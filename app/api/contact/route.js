// This route sends contact form submissions as an email using Nodemailer.
// Required environment variables:
// - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
// - RECIPIENT_EMAIL (optional; defaults to SMTP_USER)

import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Basic validation: require name, message, and at least one contact method (email or phone)
    if (!name || !name.trim() || !message || !message.trim() || (!email && !phone)) {
      return new Response(JSON.stringify({ message: "Name, message and either email or phone are required" }), { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const recipient = process.env.RECIPIENT_EMAIL || user;

    if (!host || !port) {
      console.error("SMTP configuration missing (SMTP_HOST/SMTP_PORT)");
      return new Response(JSON.stringify({ message: "Email service not configured" }), { status: 500 });
    }

    if (!user || !pass) {
      console.error("SMTP configuration missing (SMTP_USER/SMTP_PASS)");
      return new Response(JSON.stringify({ message: "Email service not configured" }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${user}>`,
      to: recipient,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email || "(not provided)"}\nPhone: ${phone || "(not provided)"}\n\nMessage:\n${message}`,
      html:
        `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
        `<p><strong>Email:</strong> ${escapeHtml(email || "(not provided)")}</p>` +
        `<p><strong>Phone:</strong> ${escapeHtml(phone || "(not provided)")}</p>` +
        `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Message sent successfully" }), { status: 200 });
  } catch (err) {
    console.error("Error sending email:", err);
    return new Response(JSON.stringify({ message: "Failed to send message" }), { status: 500 });
  }
}

function escapeHtml(unsafe) {
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
