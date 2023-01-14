import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import movieIcon from '../../assets/movie-icon.svg';
import { loginUser } from '../../auth/authSlice';
import Button from '../../components/button/Button';
import InputField from '../../components/input/InputField';
import PasswordField from '../../components/input/PasswordField';
import "./auth.scss";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const { error, isLoading, isLoggedIn, message } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogin = (e) => {
        e.preventDefault();
        const user = {
            email, 
            password
        };
        for(const key in user){
            if(user[key] === '' || user[key] === undefined){
                toast.error("All fields must not be empty")              
                return
            }
        }
        dispatch(loginUser({email, password}));
    }

    useEffect(()=>{
        if(isLoggedIn){
            navigate('/')
        }
    }, [isLoggedIn, navigate])

    useEffect(() => {
        if(error){
            toast.error(error)
        } else {
            if(message){
                toast.success(message)
            }
        }
    }, [error, message])

  return (
    <div>
        <form className="auth-login" onSubmit={onLogin}>
        <img src={movieIcon} alt='movie-icon'/>
        <h3>Hi, Welcome</h3>
        <h5>Please sign-in to your account and start your experience.</h5>
        <InputField placeholder={'Email'} value={email} handleChange={setEmail}/>
        <PasswordField placeholder="Password" value={password} handleChange={setPassword}/>
        <Button title={"Login"} type="submit" isLoading={isLoading}/>
        <div className='flex'>
            <h6>Don't have an account?</h6> 
            <span onClick={() => navigate('/register')}>Register</span>
        </div>
        </form>
    </div>
  )
}
