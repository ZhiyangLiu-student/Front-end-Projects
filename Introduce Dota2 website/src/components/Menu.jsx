import React from 'react';
import Button from './Button';
import './Menu.css';


const Menu = ({ setCurrentPage}) => {
  return (
    <div className='buttonsl'>
      <Button aria-label='About Dota 2' onClick={() => setCurrentPage('Page1')}>About Dota 2</Button>
      <Button aria-label='How to Play' onClick={() => setCurrentPage('Page2')}>How to Play</Button>
      <Button aria-label='Why Dota 2' onClick={() => setCurrentPage('Page3')}>Why Dota 2</Button>
      <Button aria-label='My Collections'onClick={() => setCurrentPage('Page4')}>My Collections</Button>
    </div>
  );
};

export default Menu;
