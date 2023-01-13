import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import app from "../firebaseConfig";

// const databaseRef = app.da
const initialState = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    message: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoginStatus: (state, action) => {
            state.isLoggedIn = action.payload;
        }
    },
    extraReducers: {

    }


});
export const {setLoginStatus} = authSlice.actions
export default authSlice.reducer

