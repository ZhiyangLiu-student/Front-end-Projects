import React, { useEffect, useState } from 'react';
import './Page4.css';
import { useTheme } from '../ThemeContext';
const images = [
  { id: '1', imageName: 'lc.jpg', tag: 'Arcana' },
  { id: '2', imageName: 'ug.jpg', tag: 'Arcana' },
  { id: '3', imageName: 'ax1.jpg', tag: 'Arcana' },
  { id: '4', imageName: 'pa.jpg', tag: 'Arcana' },
  { id: '5', imageName: 'jugg.jpg', tag: 'Arcana' },
  { id: '6', imageName: 'jugg1.jpg', tag: 'all' },
  { id: '7', imageName: 'wk.jpg', tag: 'Mythical' },
  { id: '8', imageName: 'sl.jpg', tag: 'Mythical' },
  { id: '9', imageName: 'lion.jpg', tag: 'all' },
  { id: '10', imageName: 'cw.jpg', tag: 'all' },
  { id: '11', imageName: 'mc.jpg', tag: 'Unavailable' },
  { id: '12', imageName: 'pg.jpg', tag: 'all' },
  { id: '13', imageName: 'rz.jpg', tag: 'Arcana' },
  { id: '14', imageName: 'om.jpg', tag: 'Unavailable' },
  { id: '15', imageName: 'doom.jpg', tag: 'Unavailable' },
  { id: '16', imageName: 'es.jpg', tag: 'Mythical' },
  { id: '17', imageName: 'axe.jpg', tag: 'Unavailable' }

];

const Page4 = () => {
  const { theme, toggleTheme } = useTheme();
  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
  }, [tag]);

  return (
  <div className={`page4 ${theme}`}>
    <h2 className="pageTitle">Collections</h2>
    <button className='themebt' aria-label='Change Theme' onClick={toggleTheme}>Change Theme</button>
    <div id='main-content'> 
      <div className={`tags ${theme}`}>
        <TagButton name='all' aria-label='All' handleSetTag={setTag} tagActive={tag === 'all' ? true : false} />
        <TagButton name='Arcana' aria-label='Arcana' handleSetTag={setTag} tagActive={tag === 'Arcana' ? true : false} />
        <TagButton name='Unavailable' aria-label='Unavailable' handleSetTag={setTag} tagActive={tag === 'Unavailable' ? true : false} />
        <TagButton name='Mythical' aria-label='Mythical' handleSetTag={setTag} tagActive={tag === 'Mythical' ? true : false} />
      </div>
      <div className='container4'>
        {filteredImages.map(image => (
          <div key={image.id} className='image-card'>
            <img className='image' src={`/images/${image.imageName}`} alt="" />
          </div>
        ))}
      </div>
  </div>
  </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  
  return (
    <button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
      {name.toUpperCase()}{' '}
    </button>
  );
};

export default Page4;
