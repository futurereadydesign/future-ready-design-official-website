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
        const data = await request.json();
        const { firstname, email, message___question } = data;

        if (!firstname || !email || !message___question) {
            return json({ error: 'Missing required fields.' }, { status: 400 });
        }

        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: SMTP_PORT == 465, // true for 465, false for other ports
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS
            }
        });

        // Send mail
        await transporter.sendMail({
            from: `Website Contact Form <${SMTP_USER}>`,
            to: TO_EMAIL,
            subject: `New Contact Form Submission from ${firstname}`,
            replyTo: email,
            text: `Name: ${firstname}\nEmail: ${email}\nMessage: ${message___question}`,
            html: `<p><strong>Name:</strong> ${firstname}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message___question.replace(/\n/g, '<br>')}</p>`
        });

        return json({ success: true });
    } catch (err) {
        console.error('Email send error:', err);
        return json({ error: 'Failed to send email.' }, { status: 500 });
    }
} 