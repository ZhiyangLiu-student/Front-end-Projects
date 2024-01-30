import React from 'react';
import './Button.css';

function Button({ type, visual, onClick, children }){
  const buttonClassName = visual === 'link' ? 'link-Button' : 'default-Button';

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;