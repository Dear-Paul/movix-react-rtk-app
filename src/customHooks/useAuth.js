import  { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useDispatch } from 'react-redux';
import { loginUserSuccess } from '../auth/authSlice';

export default function useAuth() {
    const [currentUser, setCurrentUser] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setCurrentUser(user);
                dispatch(loginUserSuccess(user.displayName));
                
            } else {
                setCurrentUser(null)
            }
        })
    }, [dispatch])
  return {
    currentUser
  }
}
