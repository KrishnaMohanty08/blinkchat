# Krishna Mohanty - Premium Developer Portfolio

A modern, premium developer portfolio built with Next.js 14, Tailwind CSS, Framer Motion, and Three.js. Features smooth animations, 3D interactive elements, and a clean, minimalist design.

## 🌟 Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Three.js** 3D wireframe interactive sphere in hero section
- **Dark theme** with neon blue accent
- **Fully responsive** mobile-first design
- **Glassmorphism** UI elements
- **Contact form** with Nodemailer email integration
- **SEO optimized** with meta tags
- **Performance optimized** for Lighthouse score 90+

## 📋 Sections

1. **Hero** - Full-screen section with 3D interactive wireframe, name, role, and CTA buttons
2. **About** - Professional introduction with feature cards
3. **Skills** - Animated grid showcasing tech stack (Languages, Frontend, Backend, Core CS)
4. **Projects** - Interactive project cards for KIIT Saathi and Arogyam
5. **Achievements** - Enactus National Cup 2025 Winner, 200+ LeetCode problems
6. **Contact** - Functional contact form with email integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and Yarn
- SMTP credentials for contact form (Gmail, Outlook, etc.)

### Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

The application will be available at `http://localhost:3000`

## 📧 Contact Form Setup

The contact form uses Nodemailer to send emails. You need to configure SMTP settings:

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Add your SMTP credentials to `.env.local`:

### For Gmail:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=mohantykrishna57@gmail.com
```

**Note for Gmail:** You need to generate an "App Password" instead of using your regular password:
1. Go to Google Account Settings
2. Security → 2-Step Verification
3. App Passwords → Generate new password
4. Use this password in `SMTP_PASS`

### For Other Providers:

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

**Yahoo:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

## 📁 Project Structure

```
/app
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # Contact form API endpoint
│   ├── components/
│   │   ├── 3D/
│   │   │   ├── Scene3D.jsx       # 3D canvas wrapper
│   │   │   └── WireframeSphere.jsx # Wireframe geometry
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── SectionWrapper.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Navigation.jsx
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  'neon-blue': '#00d4ff',        // Main accent color
  'neon-blue-dark': '#0099cc',   // Darker shade
  'dark-bg': '#0a0a0a',          // Background
  'dark-card': '#111111',        // Card background
}
```

### Content

Update developer information in:
- `app/components/Hero.jsx` - Name, role, tagline
- `app/components/About.jsx` - Bio and experience
- `app/components/Skills.jsx` - Tech stack
- `app/components/Projects.jsx` - Project details
- `app/components/Achievements.jsx` - Accomplishments
- `app/components/Contact.jsx` - Contact info and social links

### 3D Object

Modify the 3D wireframe in `app/components/3D/WireframeSphere.jsx`:
- Change geometry type (IcosahedronGeometry, TorusGeometry, etc.)
- Adjust colors, opacity, rotation speed
- Modify mouse interaction intensity

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Build command: `yarn build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### Environment Variables

Make sure to add these in your deployment platform:
```
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASS
RECIPIENT_EMAIL
```

## 📊 Performance

- Lazy loading for 3D components
- Code splitting with Next.js dynamic imports
- Optimized images and fonts
- Minimal bundle size
- Target Lighthouse score: 90+

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei
- **Icons:** Lucide React
- **Email:** Nodemailer
- **Fonts:** Inter, Space Grotesk (Google Fonts)

## 📝 License

MIT License - feel free to use this portfolio as inspiration or template for your own!

## 👤 Developer

**Krishna Mohanty**
- 🎓 KIIT University (B.Tech CSE, 2023-2027)
- 📍 Bhubaneswar, India
- 📧 mohantykrishna57@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/krishna-mohanty-67a9082b0)
- 🐙 [GitHub](https://github.com/KrishnaMohanty08)

---

Built with ❤️ by Krishna Mohanty
