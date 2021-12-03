import axios from "axios"

import { loginError, loginStart, loginSuccess } from './Redux/userSlice'
import { registerError, registerSuccess } from './Redux/userSlice'



export const login = async (dispatch, user) => {

    dispatch(loginStart())

    console.log(user);

    try {
        const res = await axios.post('http://localhost:3001/api/auth/login', user)
        console.log(res);
        dispatch(loginSuccess(res.data))


    } catch (error) {
        console.log(error);
        dispatch(loginError());
    }


}

export const register = async (dispatch, user) => {

    console.log(user);

    try {
        const res = await axios.post('http://localhost:3001/api/auth/register', user)
        console.log(res);
        dispatch(registerSuccess(res.data))


    } catch (error) {
        console.log(error);
        dispatch(registerError());
    }


}