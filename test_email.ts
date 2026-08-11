import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function test() {
  try {
    const pdfBuffer = await new Promise<Buffer>((resolve, reject) => {
      const doc = new PDFDocument({ margin: 50 });
      const buffers: Buffer[] = [];
      
      doc.on('data', (buffer) => buffers.push(buffer));
      doc.on('end', () => resolve(Buffer.concat(buffers)));
      doc.on('error', reject);

      doc.fontSize(20).text('Form Submission Details', { align: 'center' });
      doc.end();
    });

    console.log('PDF generated, size:', pdfBuffer.length);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('Sending email...');
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO || 'tn48saravanan@gmail.com',
      subject: `Test Submission`,
      text: `Test email`,
      attachments: [
        {
          filename: `Test.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    });

    console.log('Success!');
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
