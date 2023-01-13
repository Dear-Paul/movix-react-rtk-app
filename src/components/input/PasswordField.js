import React, { useState } from 'react';
import './input.scss';
import passwordEye from '../../assets/password-eye.svg';

export default function PasswordField({handleChange, value, placeholder}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='input'>
        <input placeholder={placeholder} autoComplete="off" value={value} type={showPassword ? 'text' : 'password'} onChange={(e) => handleChange(e.target.value) }/>
        <span><img src={passwordEye} className="pointer" onClick={()=> setShowPassword(!showPassword)} alt="password eye"/></span>
    </div>
  )
}
