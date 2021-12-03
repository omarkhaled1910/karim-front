import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isFetching: false,
    err: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        loginStart: (state, action) => {
            console.log(action);
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            console.log(action);
            state.user = action.payload;
            state.isFetching = false;
        },
        loginError: (state) => {
            state.isFetching = false;
            state.err = true
        },

        registerSuccess: (state, action) => {
            state.user = action.payload
            state.err = false
        },
        registerError: (state) => {
            state.err = true
        },
        logout: (state) => {
            state.user = null
        }
    }


})

export const {
    loginStart, loginSuccess, loginError, logout, registerSuccess, registerError
} = userSlice.actions

export default userSlice.reducer