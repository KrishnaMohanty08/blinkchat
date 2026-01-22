# 🚀 Quick Start Guide - Krishna Mohanty Portfolio

Welcome! This guide will help you get the portfolio up and running in minutes.

## ⚡ Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
yarn install
```

### 2. Set Up Email (Optional but recommended)
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local and add your SMTP credentials
# For Gmail: Use App Password (see SMTP_SETUP.md)
```

Example `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=mohantykrishna57@gmail.com
```

### 3. Run Development Server
```bash
yarn dev
```

Visit: http://localhost:3000

That's it! 🎉

---

## 📝 Customization Guide

### Update Your Information

**1. Personal Details** (`app/components/Hero.jsx`)
- Name
- Role/Title
- Tagline
- Social links

**2. About Section** (`app/components/About.jsx`)
- Bio/Description
- Years of experience
- LeetCode stats

**3. Skills** (`app/components/Skills.jsx`)
- Add/remove technologies
- Update skill categories

**4. Projects** (`app/components/Projects.jsx`)
- Project titles and descriptions
- Tech stacks
- GitHub/Live URLs

**5. Achievements** (`app/components/Achievements.jsx`)
- Update awards and milestones

**6. Contact** (`app/components/Contact.jsx`)
- Location
- Email
- Social links

### Change Colors

Edit `tailwind.config.js`:
```js
colors: {
  'neon-blue': '#00d4ff',  // Your accent color here
  // ... other colors
}
```

### Customize 3D Object

Edit `app/components/3D/WireframeSphere.jsx`:
- Change geometry type
- Adjust rotation speed
- Modify colors and opacity

---

## 🧪 Testing

### Test Locally
```bash
yarn dev
# Visit http://localhost:3000
```

### Test Production Build
```bash
yarn build
yarn start
```

### Test Contact Form
1. Fill out the form
2. Check your email inbox
3. Verify you received the message

---

## 🚢 Deployment

### Vercel (Easiest - 5 minutes)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables (SMTP settings)
   - Click Deploy!

### Netlify

1. **Build Settings**
   - Build command: `yarn build`
   - Publish directory: `.next`

2. **Add Environment Variables**
   - Go to Site settings → Environment
   - Add all SMTP variables

### Custom Server

```bash
# Build
yarn build

# Start with PM2
pm2 start yarn --name "portfolio" -- start

# Or with node
node .next/standalone/server.js
```

---

## 🔧 Common Issues

### Contact Form Not Working
- ✅ Check `.env.local` file exists
- ✅ Verify SMTP credentials are correct
- ✅ Use App Password for Gmail (not regular password)
- ✅ Restart server after adding environment variables

### 3D Object Not Showing
- ✅ Check browser console for WebGL errors
- ✅ Ensure browser supports WebGL
- ✅ Try disabling browser extensions

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
yarn install
yarn build
```

---

## 📚 Important Files

```
/app
├── app/
│   ├── components/        # All UI components
│   ├── api/contact/       # Email API endpoint
│   ├── layout.js          # Root layout & metadata
│   └── page.js            # Main page
├── .env.local            # Your SMTP credentials (create this!)
├── package.json          # Dependencies
└── README.md             # Full documentation
```

---

## 🎯 Next Steps

1. ✅ Run the portfolio locally
2. ✅ Update all personal information
3. ✅ Set up contact form email
4. ✅ Test on mobile devices
5. ✅ Deploy to Vercel/Netlify
6. ✅ Share your portfolio link!

---

## 💡 Pro Tips

- **Images**: Add project screenshots to `/public` folder
- **Resume**: Add PDF download button in Contact section
- **Analytics**: Add Google Analytics in `app/layout.js`
- **Blog**: Create `/app/blog` directory for blog posts
- **SEO**: Update metadata in `app/layout.js`

---

## 🆘 Need Help?

1. Check `README.md` for detailed documentation
2. Check `SMTP_SETUP.md` for email configuration
3. Check `DEPLOYMENT_CHECKLIST.md` before deploying
4. Search for errors in browser console
5. Check Next.js documentation: https://nextjs.org/docs

---

## 📞 Support

**Krishna Mohanty**
- 📧 mohantykrishna57@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/krishna-mohanty-67a9082b0)
- 🐙 [GitHub](https://github.com/KrishnaMohanty08)

---

Built with ❤️ using Next.js 14, Tailwind CSS, Framer Motion, and Three.js
