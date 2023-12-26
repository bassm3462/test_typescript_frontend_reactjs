/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface LoginData {
  email: string;
  password: string;
}
export const login = createAsyncThunk('auth/login', async (formData:LoginData, thunkAPI) => {
  try {
    const response = await axios({
      method:"post",
      url:"http://127.0.0.1:4000/login",
      // url:`http://cgi-bin/getuid?email=${email}&password=${password}`,
      headers:{
        "Content-Type":"application/json"
      },
      data:formData
    });
    return response.data;
  } catch (error) {
    if(error && error instanceof axios.AxiosError && error.response){
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
});
export const ADDuser = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
  try {
  
    const response = await axios({
      method:"post",
      url:"http://127.0.0.1:4000/add/User",
      headers:{
        "Content-Type":"application/json"
      },
      data:formData,
    });
    return response.data;
  } catch (error) {
    if(error && error instanceof axios.AxiosError && error.response){
    return thunkAPI.rejectWithValue(error.response.data);
    }
  }
});