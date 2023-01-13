import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import movieIcon from '../../assets/movie-icon.svg';
import Button from '../../components/button/Button';
import InputField from '../../components/input/InputField';
import PasswordField from '../../components/input/PasswordField';
import "./auth.scss";

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onRegister = () => {
        const user = {
            fullName,
            email, 
            password
        };
        for(const key in user){
            if(user[key] === '' || user[key] === undefined){
                toast.error(`Fields must not be empty`)
                console.log("Here", user[key])
                return
            }
        }
    }
  return (
    <div className="auth-register">
        <img src={movieIcon} alt='movie-icon'/>
        <h3>Hi, Welcome</h3>
        <h5>Please sign-in to your account and start your experience.</h5>
        <InputField placeholder={'Full Name'} value={fullName} handleChange={setFullName}/>
        <InputField placeholder={'Email'} value={email} handleChange={setEmail}/>
        <PasswordField placeholder="Password" value={password} handleChange={setPassword}/>
        <Button title={"Register"} onSubmit={onRegister}/>
        <div className='flex'>
            <h6>Already have an account?</h6> 
            <span onClick={() => navigate('/')}>Login</span>
        </div>
        <ToastContainer/>
    </div>
  )
}
