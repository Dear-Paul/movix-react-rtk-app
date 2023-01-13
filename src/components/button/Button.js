import React from 'react';
import './Button.scss'

const Button = ({title, type, isLoading}) => {
  return (
    // <div className='button'>
         <button type={type}>
          {isLoading ? <h4>Loading...</h4> :  <h4>{title}</h4>}
       
    </button>
    // </div>
   
  )
}

export default Button;
