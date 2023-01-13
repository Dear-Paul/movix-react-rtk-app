import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import movieIcon from '../../assets/movie-icon.svg';
import Button from '../../components/button/Button';
import InputField from '../../components/input/InputField';
import PasswordField from '../../components/input/PasswordField';
import "./auth.scss";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onLogin = () => {
        const user = {
            email, 
            password
        };
        for(const key in user){
            if(user[key] === '' || user[key] === undefined){
                toast.error("All fields must be field")
                
                return
            }
        }
    }
  return (
    <div className="auth-login">
        <img src={movieIcon} alt='movie-icon'/>
        <h3>Hi, Welcome</h3>
        <h5>Please sign-in to your account and start your experience.</h5>
        <InputField placeholder={'Email'} value={email} handleChange={setEmail}/>
        <PasswordField placeholder="Password" value={password} handleChange={setPassword}/>
        <Button title={"Login"} onSubmit={onLogin}/>
        <div className='flex'>
            <h6>Don't have an account?</h6> 
            <span onClick={() => navigate('/register')}>Register</span>
        </div>
        <ToastContainer/>
    </div>
  )
}
