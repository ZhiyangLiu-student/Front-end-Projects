import React from 'react';
import './Footer.css';
import { useTheme } from '../ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer__content">
        <p>&copy; Dota2.</p>
      </div>
    </footer>
  );
};

export default Footer;

