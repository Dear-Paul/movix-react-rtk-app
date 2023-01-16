import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import  { auth } from "../firebaseConfig";

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async({email, password, fullName}, { dispatch}) => {
        
        try {
            dispatch(creatingUser())
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
             await updateProfile(userCredential?.user,{
            displayName: fullName
           });     
        if(userCredential)  { 
            dispatch(createUserSuccess(userCredential.user.displayName));
        }
        } catch (error) {
            dispatch(createUserFailed())
            toast.error(error.message)
        }
    }
)
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async({email, password}, {dispatch}) => {
       try {
        dispatch(loginInUser())
        const user = await signInWithEmailAndPassword(auth, email, password);
        if(user){
            dispatch(loginUserSuccess(user.user.displayName));
        }
      
       } catch (error) {
        dispatch(loginUserFailed())
      toast.error(error.message)
       }
    
    }
)

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async(value, {dispatch}) => {
       await signOut(auth);
       dispatch(logoutExistingUser())    
    }
)

const initialState = {
    user: "",
    isLoggedIn: false,
    isLoading: false,
    message: '',
    
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        creatingUser: state => {
          state.isLoading = true;
          state.isLoggedIn = false;
        },
        createUserSuccess: (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isLoading = false
          state.error = null
        },
        createUserFailed: (state, action) => {
          state.isLoading = false;
          state.isLoggedIn = false;
        },
        loginInUser: state => {
            state.isLoading = true
            state.isLoggedIn = false;
        },
        loginUserSuccess: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.user = action.payload
        },
        loginUserFailed: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
        },
        logoutExistingUser: (state) => {
            state.isLoggedIn = false;
        },
        authorizedUser: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        }
      },
    
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, state => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isLoggedIn = false
            state.user = action.payload
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoggedIn = false
            state.isLoading = false     
            state.error = action.error.message
           
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.isLoggedIn = false;
        })
    },

});
export const {creatingUser, createUserSuccess, createUserFailed, loginInUser, loginUserSuccess, loginUserFailed, logoutExistingUser, authorizedUser} = authSlice.actions
export default authSlice.reducer

