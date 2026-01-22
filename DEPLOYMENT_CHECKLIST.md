# Deployment Checklist

## Pre-Deployment

- [ ] All dependencies installed (`yarn install`)
- [ ] Development server runs without errors (`yarn dev`)
- [ ] Production build succeeds (`yarn build`)
- [ ] All sections visible and functional
- [ ] Mobile responsive on all screen sizes
- [ ] 3D wireframe loads and animates smoothly
- [ ] All animations working (Framer Motion)
- [ ] Navigation links scroll to correct sections

## Contact Form Setup

- [ ] `.env.local` file created with SMTP credentials
- [ ] Test email sent successfully
- [ ] Email received in recipient inbox
- [ ] Form validation working (required fields)
- [ ] Success/error messages display correctly

## Content Verification

- [ ] Personal information updated in all components
- [ ] GitHub link: https://github.com/KrishnaMohanty08
- [ ] LinkedIn link: https://www.linkedin.com/in/krishna-mohanty-67a9082b0
- [ ] Email: mohantykrishna57@gmail.com
- [ ] Project descriptions accurate
- [ ] Skills list up-to-date
- [ ] Achievement information correct

## Performance Optimization

- [ ] Lighthouse score checked (target 90+)
- [ ] Images optimized
- [ ] Fonts loading properly (Inter, Space Grotesk)
- [ ] 3D scene lazy-loaded
- [ ] No console errors in production build

## SEO & Metadata

- [ ] Page title set correctly
- [ ] Meta description added
- [ ] Open Graph tags configured
- [ ] Twitter card metadata added
- [ ] Favicon added (optional)

## Deployment Steps

### Vercel (Recommended)

1. Push code to GitHub repository
2. Import project on Vercel
3. Add environment variables:
   - SMTP_HOST
   - SMTP_PORT
   - SMTP_USER
   - SMTP_PASS
   - RECIPIENT_EMAIL
4. Deploy!

### Manual Deployment

1. Build the project: `yarn build`
2. Test production build: `yarn start`
3. Upload `.next` folder to hosting
4. Configure environment variables on server
5. Set up Node.js runtime (18+)

## Post-Deployment

- [ ] Visit live URL and test all features
- [ ] Test contact form with real email
- [ ] Check on multiple devices (desktop, tablet, mobile)
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Verify all links work
- [ ] Check 3D performance on lower-end devices
- [ ] Monitor for any console errors

## Future Enhancements (Optional)

- [ ] Add Google Analytics
- [ ] Implement blog section
- [ ] Add more projects as portfolio grows
- [ ] Create case studies for projects
- [ ] Add testimonials section
- [ ] Implement dark/light mode toggle
- [ ] Add resume download functionality
- [ ] Create project detail pages

## Notes

- Remember to update project links from '#' to actual URLs when available
- Keep tech stack and achievements updated regularly
- Monitor contact form for spam and implement rate limiting if needed
- Back up environment variables securely

---

Last updated: January 2025
