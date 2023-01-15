import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import  { auth } from "../firebaseConfig";

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async({email, password, fullName}, { dispatch}) => {
        dispatch(creatingUser())
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
             await updateProfile(userCredential?.user,{
            displayName: fullName
           });     
           dispatch(createUserSuccess(userCredential.user.displayName));
        } catch (error) {
            dispatch(createUserFailed(error.message))
        }
    }
)
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async({email, password}, {dispatch}) => {
       try {
        dispatch(loginInUser())
        const user = await signInWithEmailAndPassword(auth, email, password);
        dispatch(loginUserSuccess(user.user.displayName));
       } catch (error) {
        dispatch(loginUserFailed(error.message))
        console.log(error)
       }
    
    }
)

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async() => {
       await signOut(auth);    
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
          state.isLoading = true
        },
        createUserSuccess: (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isLoading = false
          state.error = null
        },
        createUserFailed: (state, action) => {
          state.isLoading = false
          state.error = action.payload
        },
        loginInUser: state => {
            state.isLoading = true;
        },
        loginUserSuccess: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.user = action.payload
        },
        loginUserFailed: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.error = action.payload
        },
        logoutExistingUser: (state, action) => {
            state.isLoggedIn = false;
            state.message = action.payload
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
            state.isLoading = false;
            state.isLoggedIn = true;
            state.user = action.payload
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.isLoggedIn = false
        })
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.user = action.payload
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
            
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.isLoggedIn = false;
        })
    },

});
export const {creatingUser, createUserSuccess, createUserFailed, loginInUser, loginUserSuccess, loginUserFailed, logoutExistingUser, authorizedUser} = authSlice.actions
export default authSlice.reducer

