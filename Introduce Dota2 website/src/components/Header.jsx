import React from 'react';
import './Header.css';
import { useTheme } from '../ThemeContext';
const Header = () => {
  const { theme } = useTheme();
  return(
    <header className={`header ${theme}`}>
      <img className='logo' src='\images\IMG_3821.jpg'></img>
      <h1 className="header__title">Dota 2</h1>
    </header>
  );
}

export default Header;

