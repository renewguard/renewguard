import { NextResponse } from 'next/server';

/**
 * Handles the footer newsletter signup.
 *
 * For now this just emails you the new subscriber's address using the same
 * RESEND_API_KEY / CONTACT_TO_EMAIL variables as the contact form, so you
 * have a working signup with zero extra setup.
 *
 * When you're ready for a real mailing list (so you can actually send
 * campaigns later), swap the fetch call below for Resend Audiences
 * (https://resend.com/docs/api-reference/audiences) or a provider like
 * Mailchimp, ConvertKit, or Loops.
 */
export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      console.error('Newsletter signup: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.');
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
        subject: 'New newsletter subscriber',
        text: `New subscriber: ${email}`,
      }),
    });

    if (!resendRes.ok) {
      console.error('Resend API error:', await resendRes.text());
      return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter signup error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
