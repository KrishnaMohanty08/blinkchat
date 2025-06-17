// Footer.js
import React from 'react';

const footerStyle = {
  background: '#090b0a',
  color: '#88efc3',
  fontFamily: 'Inter, sans-serif',
  textAlign: 'center',
  padding: '.6rem 0',
  borderTop: '2px solid #3ffeab',
  marginTop: 'auto',
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
}
