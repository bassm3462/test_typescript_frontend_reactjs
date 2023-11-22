/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface LoginData {
  email: string;
  password: string;
}

export const login = createAsyncThunk('auth/login', async ({username,password}, thunkAPI) => {
  try {
    // Your login logic here
    // Example: Make an API call
    const response = await axios({
      method:"post",
      // url:"http://127.0.0.1:4000/API/login",
      url:`http://cgi-bin/getuid?username=${username}&password=${password}`,

      headers:{
        "Content-Type":"application/json"
      },
      data:{username,password},

    
    });


    // Return the result of the API call
    return response.data;
  } catch (error) {
    // Handle errors here
    if(error&&error.response){
    return thunkAPI.rejectWithValue(error.response.data);
    }
  }
});