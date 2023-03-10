import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import movieIcon from '../../assets/movie-icon.svg';
import {  registerUser } from '../../auth/authSlice';
import Button from '../../components/button/Button';
import InputField from '../../components/input/InputField';
import PasswordField from '../../components/input/PasswordField';
import "./auth.scss"; 

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, isLoggedIn} = useSelector((state) => state.auth)
    const onRegister = (e) => {
        e.preventDefault();
        const user = {
            fullName,
            email,
            password
        };
        for (const key in user) {
            if (user[key] === '' || user[key] === undefined) {
                toast.error(`Fields must not be empty`)
                return
            }
        };      
        dispatch(registerUser({email, password, fullName}));
       
    }
   
    useEffect(()=>{
        if(isLoggedIn){
            navigate("/")
        }
    }, [isLoggedIn, navigate]);
    return (
        <div>
            <form onSubmit={onRegister} className="auth-register">
                <img src={movieIcon} alt='movie-icon' />
                <h3>Hi, Welcome</h3>
                <h5>Please sign-in to your account and start your experience.</h5>
                <InputField placeholder={'Full Name'} value={fullName} handleChange={setFullName}/>
                <InputField placeholder={'Email'} value={email} handleChange={setEmail} />
                <PasswordField placeholder="Password" value={password} handleChange={setPassword}/>
                <Button title={"Register"} type="submit" isLoading={isLoading}/>
                <div className='flex'>
                    <h6>Already have an account?</h6>
                    <span onClick={() => navigate('/login')}>Login</span>
                </div>
            </form>
        </div>
    )
}
