import React from 'react';
import './ButtonConfig.css'
function NavOptions({ text,handle, customClassB }) {
  
    return (
    <button onClick={handle} className={customClassB}>
      {text}
    </button>
  );
}

export default NavOptions;
