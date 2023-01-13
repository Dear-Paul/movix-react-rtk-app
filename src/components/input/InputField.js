import React from 'react';
import './input.scss';


export default function InputField({handleChange, value, placeholder}) {
  return (
    <div className='input'>
        <input placeholder={placeholder} autoComplete={false}  value={value} type={'text'} onChange={(e) => handleChange(e.target.value) }/>
    </div>
  )
}
