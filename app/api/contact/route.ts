import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { formType, ...fields } = data;

    if (!formType) {
      return NextResponse.json({ success: false, message: 'formType is required' }, { status: 400 });
    }

    const date = new Date().toLocaleString();

    let htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2 style="color: #333;">New Website Enquiry</h2>
        <p><strong>Form Type:</strong> ${formType}</p>
    `;

    for (const [key, value] of Object.entries(fields)) {
      if (value) {
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        if (key.toLowerCase() === 'message') {
          htmlContent += `<p><strong>${formattedKey}:</strong><br/>${value}</p>`;
        } else {
          htmlContent += `<p><strong>${formattedKey}:</strong> ${value}</p>`;
        }
      }
    }

    htmlContent += `<p><strong>Submitted Date & Time:</strong> ${date}</p></div>`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO || 'tn48saravanan@gmail.com',
      subject: `New Website Enquiry: ${formType}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process submission', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
