import SibApiV3Sdk from 'sib-api-v3-sdk';
import { json } from '@sveltejs/kit';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const TO_EMAIL = 'contact@futureready.design';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    try {
        if (!BREVO_API_KEY) {
            return json({ error: 'Email service not configured.' }, { status: 500 });
        }

        const data = await request.json();
        const { firstname, email, message___question } = data;

        if (!firstname || !email || !message___question) {
            return json({ error: 'Missing required fields.' }, { status: 400 });
        }

        // Configure Brevo API key
        SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = BREVO_API_KEY;
        const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

        const sendSmtpEmail = {
            to: [{ email: TO_EMAIL }],
            sender: { email: 'contact@futureready.design', name: firstname }, // Use your verified sender
            replyTo: { email, name: firstname }, // User's email as replyTo
            subject: `New Contact Form Submission from ${firstname}`,
            htmlContent: `<p><strong>Name:</strong> ${firstname}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message___question.replace(/\n/g, '<br>')}</p>`
        };

        const brevoResponse = await apiInstance.sendTransacEmail(sendSmtpEmail);

        return json({ success: true });
    } catch (err) {
        console.error('Failed to send email:', err);
        return json({ error: 'Failed to send email.', details: err.message }, { status: 500 });
    }
} 