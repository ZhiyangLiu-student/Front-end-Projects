import React from 'react';
import './Page2.css'
import { useTheme } from '../ThemeContext';
const Page2 = () => {
  const { theme, toggleTheme } = useTheme();
  
  
  return(
    <div className={`page2 ${theme}`}>
      <h2 className="pageTitle">How to Play</h2>
      <button className='themebt' aria-label='Change Theme' onClick={toggleTheme}>Change Theme</button>
      <div id='main-content'>
      <div className='container'>
      <div className='text2'>
      <p>The two teams—known as the Radiant and Dire—occupy fortified bases in opposite corners of the map, which is divided in half by a crossable river and connected by three paths, which are referred to as "lanes". The lanes are guarded by defensive towers that attack any opposing unit who gets within its line of sight.A small group of weak computer-controlled creatures called "creeps" travel predefined paths along the lanes and attempt to attack any opposing heroes, creeps, and buildings in their way. Creeps periodically spawn throughout the game in groups from two buildings, called the "barracks", that exist in each lane and are located within the team's bases. The map is permanently covered for both teams in fog of war, which prevents a team from seeing the opposing team's heroes and creeps if they are not directly in sight of themselves or an allied unit. The map features a day-night cycle, with some hero abilities and other game mechanics being altered depending on the time of the cycle. Present on the map are "neutral creeps" that are hostile to both teams, and reside in marked locations on the map known as "camps". Camps are located in the area between the lanes known as the "jungle", which both sides of the map have.</p>
      </div>
      <div className='Map'>
      <img className='dotaMap' src='\images\map.jpg'></img>
      </div>
      <div className='dropdown'>
        <button className='dropbtn' aria-label='Download'>Download</button>
          <div className='dropdownMenu'>
            <a href='https://store.steampowered.com/app/570/Dota_2/' className='link' aria-label='Steam'>Steam</a>
            <a href='https://www.dota2.com/home' className='link' aria-label='Dota 2'>Dota 2</a>
          </div>

      </div>
    </div>
    </div>
    </div>
  );
}

export default Page2;


