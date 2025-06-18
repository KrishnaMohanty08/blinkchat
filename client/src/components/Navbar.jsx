"use client"
import React, { useState } from 'react';

// Color palette
const COLORS = {
  background: '#090b0a',
  text: '#f4f9f7',
  primary: '#46c890',
  secondary: '#88efc3',
  accent: '#3ffeab',
};

const styles = {
  navbar: {
    background: COLORS.background,
    color: COLORS.text,
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '.7rem 1.5rem',
    position: 'relative',
    boxShadow: `0 2px 12px 0 rgba(70, 200, 144, 0.12)`,
    zIndex: 10,
  },
  logo: {
    fontWeight: 800,
    fontSize: '1rem',
    letterSpacing: '1px',
    color: COLORS.primary,
    position: 'relative',
    paddingBottom: '0.3rem',
    display: 'inline-block',
  },
  logoUnderline: {
    content: '""',
    display: 'block',
    width: '40%',
    height: '4px',
    background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})`,
    borderRadius: '2px',
    position: 'absolute',
    left: 0,
    bottom: '-6px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  link: {
    color: COLORS.text,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1.1rem',
    padding: '0.3rem 0.7rem',
    borderRadius: '6px',
    background: 'none',
    transition: 'background 0.3s, color 0.3s, box-shadow 0.3s',
    position: 'relative',
    overflow: 'hidden',
  },
  linkHover: {
    background: `linear-gradient(90deg, ${COLORS.primary} 40%, ${COLORS.accent} 100%)`,
    color: COLORS.background,
    boxShadow: `0 2px 8px 0 ${COLORS.secondary}44`,
  },
  button: {
    marginLeft: '1rem',
    background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.primary})`,
    color: COLORS.background,
    border: 'none',
    borderRadius: '999px',
    padding: '0.5rem 1.2rem',
    fontWeight: 700,
    fontSize: '1.05rem',
    cursor: 'pointer',
    boxShadow: `0 4px 16px 0 ${COLORS.accent}33`,
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  buttonHover: {
    transform: 'scale(1.06)',
    boxShadow: `0 6px 20px 0 ${COLORS.accent}55`,
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    marginLeft: '1rem',
  },
  bar: {
    width: '28px',
    height: '3px',
    background: COLORS.primary,
    margin: '4px 0',
    borderRadius: '2px',
    transition: 'all 0.3s',
  },
  // Responsive
  '@media (maxWidth: 700px)': {
    navLinks: {
      display: 'none',
    },
    hamburger: {
      display: 'flex',
    },
    mobileMenu: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      right: 0,
      background: COLORS.background,
      boxShadow: `0 8px 24px 0 ${COLORS.secondary}22`,
      borderRadius: '0 0 8px 8px',
      padding: '1rem 2rem',
      zIndex: 20,
      gap: '1.2rem',
    },
  },
};

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [hovered, setHovered] = React.useState(null);
  const [btnHovered, setBtnHovered] = React.useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Responsive: simple inline styles for demo; for production, use CSS-in-JS library or CSS modules

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        BlinkChat
        <span style={styles.logoUnderline}></span>
      </div>
      {/* Desktop Links */}
      <div style={{ ...styles.navLinks, ...(window.innerWidth < 700 ? { display: 'none' } : {}) }}>
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            style={hovered === i ? { ...styles.link, ...styles.linkHover } : styles.link}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {link.label}
          </a>
        ))}
        <button
          style={btnHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
        >
          Sign Up
        </button>
      </div>
      {/* Hamburger for mobile */}
      <div
        style={{ ...styles.hamburger, ...(window.innerWidth < 700 ? { display: 'flex' } : {}) }}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={styles['@media (maxWidth: 700px)'].mobileMenu}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={styles.link}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button style={styles.button} onClick={() => setMobileOpen(false)}>
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
