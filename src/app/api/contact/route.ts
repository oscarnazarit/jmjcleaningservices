import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
const clientEmail = process.env.CLIENT_EMAIL;

const transporter =
  gmailUser && gmailAppPassword
    ? nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      })
    : null;

const submittedIPs = new Map<string, number>();

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
  const last = submittedIPs.get(ip) ?? 0;

  if (Date.now() - last < 60_000) {
    return NextResponse.json(
      { error: 'Please wait a minute before submitting again.' },
      { status: 429 }
    );
  }

  submittedIPs.set(ip, Date.now());
  try {
    if (!transporter || !gmailUser || !gmailAppPassword || !clientEmail) {
      throw new Error(
        'Missing email configuration: GMAIL_USER, GMAIL_APP_PASSWORD, and CLIENT_EMAIL must be set.'
      );
    }

    const {
      name,
      email,
      phone,
      service,
      description,
      bedrooms,
      bathrooms,
      squareFootage,
      businessType,
      specialtyType,
      photos,
    } = await req.json();

    const attachments = Array.isArray(photos)
      ? photos
          .filter((photo: { name?: string; data?: string }) => photo?.data && photo?.name)
          .map((photo: { name?: string; data?: string }) => ({
            filename: photo.name,
            content: photo.data,
            encoding: 'base64' as const,
          }))
      : [];

    const extraDetails =
      service === 'commercial'
        ? `Business Type: ${businessType || 'Not specified'}`
        : service === 'specialty-services'
          ? `Specialty Type: ${specialtyType || 'Not specified'}`
          : `Bedrooms: ${bedrooms || 'Not specified'}<br/>Bathrooms: ${bathrooms || 'Not specified'}<br/>Square Footage: ${squareFootage || 'Not specified'}`;

    const descriptionText = (description ?? '').replace(/\n/g, '<br/>');
    const photoHtml =
      attachments.length > 0
        ? `
          <tr>
            <td style="background:#fafafa;border-top:1px solid #f0f0f0;padding:20px 36px 24px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">
                Attached Photos (${attachments.length})
              </p>
              <p style="margin:0;font-size:13px;color:#3f3f46;">
                ${attachments.map((attachment) => attachment.filename).join(', ')}
              </p>
            </td>
          </tr>`
        : '';

    await transporter.sendMail({
      from: `"JMJ Cleaning Services Website" <${gmailUser}>`,
      to: clientEmail,
      replyTo: email,
      subject: `New Quote Request — ${service || 'General Inquiry'}${attachments.length ? ` (${attachments.length} photo${attachments.length > 1 ? 's' : ''})` : ''}`,
      attachments,
      html: `
					<!DOCTYPE html>
					<html>
					<head>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					</head>
					<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
					<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
						<tr>
						<td align="center">
							<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">

							<!-- Header -->
							<tr>
								<td style="background:#18181b;border-radius:12px 12px 0 0;padding:32px 36px 28px;">
								<p style="margin:0 0 6px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#a1a1aa;">Incoming request</p>
								<h1 style="margin:0;font-size:22px;font-weight:600;color:#ffffff;line-height:1.3;">New Quote Request</h1>
								</td>
							</tr>

							<!-- Details card -->
							<tr>
								<td style="background:#ffffff;padding:32px 36px 24px;">
								<table width="100%" cellpadding="0" cellspacing="0">
									<tr>
									<td style="padding-bottom:20px;">
										<p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">Name</p>
										<p style="margin:0;font-size:15px;color:#18181b;">${name}</p>
									</td>
									</tr>
									<tr>
									<td style="padding-bottom:20px;border-top:1px solid #f0f0f0;padding-top:20px;">
										<p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">Email</p>
										<p style="margin:0;font-size:15px;color:#18181b;">${email}</p>
									</td>
									</tr>
									<tr>
									<td style="padding-bottom:20px;border-top:1px solid #f0f0f0;padding-top:20px;">
										<p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">Phone</p>
										<p style="margin:0;font-size:15px;color:#18181b;">${phone || 'Not provided'}</p>
									</td>
									</tr>
									<tr>
									<td style="border-top:1px solid #f0f0f0;padding-top:20px;">
										<p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">Service</p>
										<p style="margin:0;font-size:15px;color:#18181b;">${service || 'Not specified'}</p>
									</td>
									</tr>
									<tr>
									<td style="padding-top:20px;">
										<p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">Service Details</p>
										<p style="margin:0;font-size:15px;color:#18181b;">${extraDetails}</p>
									</td>
									</tr>
								</table>
								</td>
							</tr>

							<!-- Description section -->
							<tr>
								<td style="background:#fafafa;border-top:1px solid #f0f0f0;padding:24px 36px 28px;">
								<p style="margin:0 0 10px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">Description</p>
								<p style="margin:0;font-size:15px;line-height:1.7;color:#3f3f46;">${descriptionText}</p>
								</td>
							</tr>

							${photoHtml}

							<!-- Footer -->
							<tr>
								<td style="background:#f4f4f5;border-radius:0 0 12px 12px;padding:18px 36px;border-top:1px solid #e4e4e7;">
								<p style="margin:0;font-size:12px;color:#a1a1aa;">Sent via your website contact form</p>
								</td>
							</tr>

							</table>
						</td>
						</tr>
					</table>
					</body>
					</html>
				`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    const message =
      error instanceof Error && error.message.includes('Missing email configuration')
        ? 'Email server is not configured yet.'
        : 'Failed to send email';

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
