import React from 'react';
import './Page1.css'
import { useTheme } from '../ThemeContext';

const Page1 = () => {
  const { theme, toggleTheme } = useTheme();
  return(
    <div className={`page1 ${theme}`}>
      <h2 className="pageTitle">About Dota 2</h2>
      <button className='themebt' aria-label='Change Theme'onClick={toggleTheme}>Change Theme</button>
      <div id='main-content'>
      <div className="cards">
      <div className="card">
        <h3>Dota 2</h3>
        <div className="cardContainer">
        <img className="cardPic" src='/images/card1.jpg' alt='fun'></img>
        </div>
        <p className="card_text">Dota 2 is a 2013 multiplayer online battle arena (MOBA) video game by Valve. The game is a sequel to Defense of the Ancients (DotA), a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. Each of the ten players independently controls a powerful character known as a "hero" that all have unique abilities and differing styles of play. During a match players collect experience points and items for their heroes to defeat the opposing team's heroes in player versus player combat. A team wins by being the first to destroy the other team's "Ancient", a large structure located within their base.</p>
      </div>
      <div className="card">
        <h3>DotA</h3>
        <div className="cardContainer">
        <img className="cardPic" src='/images/card2.jpg' alt='fun'></img>
        </div>
        <p className="card_text">Defense of the Ancients (DotA) is a multiplayer online battle arena (MOBA) mod for the video game Warcraft III: Reign of Chaos (2002) and its expansion, The Frozen Throne. The objective of the game is for each team to destroy their opponents' Ancient, a heavily guarded structure at the opposing corner of the map. Players use powerful units known as heroes, and are assisted by allied teammates and AI-controlled fighters. As in role-playing games, players level up their heroes and use gold to buy equipment during the game. DotA became a feature at several worldwide tournaments, including Blizzard Entertainment's BlizzCon and the Asian World Cyber Games. Critical reception to DotA was positive, and it has been called one of the most popular mods of any game. DotA is largely attributed as being the most significant inspiration for the MOBA genre. American video game developer Valve acquired the intellectual property rights to DotA in 2009 to develop a franchise, beginning with Dota 2 in 2013.</p>
      </div> 
      </div>
    </div>
    </div>
  );
}

export default Page1;
