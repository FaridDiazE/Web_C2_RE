import React from 'react';
import './ButtonOpenM.css';

function ButtonPubiclations({ text, icon, alignVertical, handle }) {
    const IconComponent = icon ? icon : null;
    return (
      <button
        type="button" // Cambia el tipo de botón a "button"
        onClick={handle}
        className={`btn ${alignVertical ? 'align-vertical' : ''}`}
      >
        {IconComponent && <IconComponent />} {}
        {text}
      </button>
    );
  }
  
export default ButtonPubiclations;
