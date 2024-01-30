// import React from 'react';
import React, { useState } from 'react';
import './Page3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { useTheme } from '../ThemeContext';
const Page3 = () => {
  const { theme, toggleTheme } = useTheme();
  const [selected, setSelected] = useState(null)
  const toggle = (i)=>{
    if(selected ==i){
      return setSelected(null)
    }

    setSelected(i)

    
  }
  return(
    <div className={`page3 ${theme}`}>
    <h2 className="pageTitle">Why Dota 2</h2>  
    <button className='themebt' aria-label='Change Theme' onClick={toggleTheme}>Change Theme</button>
    <div id='main-content'>
    <div className='wrapper'>
      <div className='accordion'>
        {data.map((item,i)=>(
            <div className='item'  tabIndex="0" key={i}>
                <div
              className='item'
              tabIndex="0"
              key={i}
              onClick={() => toggle(i)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  toggle(i);          
                }
              }}
            >
                <h2>{item.qustion}</h2>
                <span>{selected == i ?<FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faArrowDown} />}</span>
                </div>
                <div className={selected == i ? 'content show' : 'content'}>
                  {selected === i && (<img 
                  src={item.imageUrl} 
                  alt={`Answer ${i + 1}`} 
                  className='image-container'/>)}</div>
             </div> 
        ))}
      </div>
      
    </div>
    </div>
    </div>
  );
}

const data = [
  {
    qustion: 'More detailed modeling of heroes',
    imageUrl: '/images/ug.jpg'
  },
  {
    qustion: 'Bigger map than other MOBA games',
    imageUrl: '/images/map.jpg'
  },
  {
    qustion: 'More strategic',
    imageUrl: '/images/strategic.jpg'
  },
  {
    qustion: 'More professional tournaments',
    imageUrl: '/images/tour.jpg'
  }
  

]

export default Page3;


