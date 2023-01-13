import React from 'react';
import './Button.scss'

const Button = ({title, onSubmit}) => {
  return (
    // <div className='button'>
         <button onClick={onSubmit}>
        <h4>{title}</h4>
    </button>
    // </div>
   
  )
}

export default Button;
