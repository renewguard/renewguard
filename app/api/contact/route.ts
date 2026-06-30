import { NextResponse } from 'next/server';

/**
 * Handles the homepage contact form.
 *
 * Requires two environment variables (set them in Vercel: Project ->
 * Settings -> Environment Variables, then redeploy):
 *   - RESEND_API_KEY   your API key from resend.com
 *   - CONTACT_TO_EMAIL the inbox you want submissions delivered to
 *
 * Uses Resend's shared `onboarding@resend.dev` sender, so no domain
 * verification is required to start sending.
 */
export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      console.error('Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.');
      return NextResponse.json({ error: 'Email service is not configured yet.' }, { status: 500 });
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'LapseGuard <onboarding@resend.dev>',
        to: toEmail,
        reply_to: email,
        subject: `New contact form message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || '—'}\n\nMessage:\n${message}`,
      }),
    });

    if (!resendRes.ok) {
      console.error('Resend API error:', await resendRes.text());
      return NextResponse.json({ error: 'Failed to send your message. Please try again.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
