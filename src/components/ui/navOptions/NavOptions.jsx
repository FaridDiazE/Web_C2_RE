import React from 'react';
import './NavOptions.css';

function NavOptions({ text, icon ,alignVertical,handle, customClassNavOpt}) {
  const IconComponent = icon ? icon : null;
  return (
    <button onClick={handle} className='customClassNavOpt' id={`btn ${alignVertical ? 'align-vertical' : ''}`}>
      {IconComponent && <IconComponent  />} {}
      {text}
    </button>
  );
}

export default NavOptions;
