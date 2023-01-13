import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword, signOut } from "firebase/auth";
import  { auth } from "../firebaseConfig";


export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async({email, password, fullname}, { dispatch}) => {
        dispatch(creatingUser())
        try {
            await createUserWithEmailAndPassword(auth, email, password).then((usr)=>{
                dispatch(createUserSuccess(fullname))
        })

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
        dispatch(loginUserSuccess(user.user.uid))
      
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
    user: {},
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
          state.displayName = action.payload;
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
        }
      },
    
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state, action) => {
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
export const {creatingUser, createUserSuccess, createUserFailed, loginInUser, loginUserSuccess, loginUserFailed, logoutExistingUser} = authSlice.actions
export default authSlice.reducer

