import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';

// You should set these in your environment (e.g., .env file)
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const TO_EMAIL = 'contact@futureready.design';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    try {
        // Debug: Log environment variables (except password)
        console.log('SMTP_HOST:', SMTP_HOST);
        console.log('SMTP_PORT:', SMTP_PORT);
        console.log('SMTP_USER:', SMTP_USER);
        // Do not log SMTP_PASS for security
        console.log('TO_EMAIL:', TO_EMAIL);

        const data = await request.json();
        console.log('Request data:', data);
        const { firstname, email, message___question } = data;

        if (!firstname || !email || !message___question) {
            console.log('Missing required fields:', { firstname, email, message___question });
            return json({ error: 'Missing required fields.' }, { status: 400 });
        }

        // Create a transporter
        const transporterConfig = {
            host: SMTP_HOST,
            port: Number(SMTP_PORT),
            secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS
            }
        };
        console.log('Transporter config:', transporterConfig);
        const transporter = nodemailer.createTransport(transporterConfig);

        // Debug: verify transporter connection
        try {
            await transporter.verify();
            console.log('SMTP connection verified.');
        } catch (verifyErr) {
            console.error('SMTP connection verification failed:', verifyErr);
            return json({ error: 'SMTP connection verification failed', details: verifyErr.message }, { status: 500 });
        }

        // Send mail
        const mailOptions = {
            from: `Website Contact Form <${SMTP_USER}>`,
            to: TO_EMAIL,
            subject: `New Contact Form Submission from ${firstname}`,
            replyTo: email,
            text: `Name: ${firstname}\nEmail: ${email}\nMessage: ${message___question}`,
            html: `<p><strong>Name:</strong> ${firstname}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message___question.replace(/\n/g, '<br>')}</p>`
        };
        console.log('Mail options:', mailOptions);

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info);

        return json({ success: true, info });
    } catch (err) {
        console.error('Email send error:', err);
        return json({ error: 'Failed to send email.', details: err.message, stack: err.stack }, { status: 500 });
    }
} 