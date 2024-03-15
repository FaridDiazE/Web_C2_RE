import React from 'react'
import './Iconbtn.css'

function Iconbtn({icono,text,color}) {
    const IconComponent = icono;
  return (
    <>
    
        <button  className='btn-icons'> <IconComponent color={color}/>{text}</button>
    
    </>
  )
}

export default Iconbtn