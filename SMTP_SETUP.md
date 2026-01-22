# SMTP Configuration Guide for Contact Form

This guide will help you set up email functionality for the portfolio contact form.

## Quick Setup

1. Create a `.env.local` file in the root directory
2. Add your SMTP credentials (see examples below)
3. Restart the development server

## Gmail Setup (Recommended)

### Step 1: Enable 2-Step Verification
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. In the same Security section, find **App passwords**
2. Select **Mail** as the app and **Other** as the device
3. Name it "Portfolio Contact Form"
4. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)

### Step 3: Configure .env.local
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
RECIPIENT_EMAIL=mohantykrishna57@gmail.com
```

**Important:** Remove spaces from the app password!

## Other Email Providers

### Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
RECIPIENT_EMAIL=mohantykrishna57@gmail.com
```

### Yahoo Mail

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=mohantykrishna57@gmail.com
```

**Note:** Yahoo also requires an app password. Generate it in Yahoo Account Settings → Security.

### SendGrid (Production)

For production deployments, consider using SendGrid:

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
RECIPIENT_EMAIL=mohantykrishna57@gmail.com
```

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Use "apikey" as SMTP_USER and your API key as SMTP_PASS

## Troubleshooting

### "Email service not configured" error
- Check that all environment variables are set
- Ensure there are no typos in variable names
- Restart your development server after adding variables

### "Failed to send message" error
- Verify your SMTP credentials are correct
- Check that 2-Step Verification is enabled (Gmail)
- Ensure you're using an App Password, not your regular password
- Check if your email provider allows SMTP access

### Testing the contact form

1. Fill out all required fields (Name, Email, Message)
2. Click "Send Message"
3. You should see a success message
4. Check your recipient email inbox

## Security Best Practices

1. **Never commit `.env.local` to git** - it's already in `.gitignore`
2. **Use environment variables** in production (Vercel, Netlify, etc.)
3. **Rotate passwords** regularly
4. **Use app passwords** instead of account passwords
5. **Consider rate limiting** for production to prevent spam

## Production Deployment

### Vercel
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add all SMTP variables
4. Redeploy your application

### Netlify
1. Go to Site settings → Build & deploy → Environment
2. Add all SMTP variables
3. Trigger a new deploy

## Alternative Solutions

### Formspree (No SMTP needed)
If you don't want to set up SMTP:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Update the contact form to use Formspree endpoint

### EmailJS (No Backend needed)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Set up email service
3. Replace API route with EmailJS client-side integration

## Need Help?

If you encounter issues:
1. Check the server console logs for detailed error messages
2. Verify SMTP settings with your email provider
3. Test SMTP credentials using an online SMTP tester
4. Ensure firewall/antivirus isn't blocking SMTP ports

---

For more help, refer to:
- [Nodemailer Documentation](https://nodemailer.com/)
- [Gmail SMTP Guide](https://support.google.com/mail/answer/7126229)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
