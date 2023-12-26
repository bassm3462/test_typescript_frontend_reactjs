import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
export const AddNVRmnulle=createAsyncThunk("add/nvr",async(formData,thunkAPI)=>{
    try{
        let response = await axios({
            url:"http://localhost:4000/add/NVRM",
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData,
        })
        return response;
        }catch (error:any){
            if(AxiosError<any>){
            return thunkAPI.rejectWithValue({statusCode: error?.response?.status,message : error?.response?.data})
                }else{
                    console.log('err',error);
                    }
   }
})
export const getData=createAsyncThunk("add/nvr",async(formData,thunkAPI)=>{
    try{
        let response = await axios({
            method: 'get',
            url:"http://192.168.100.60/cgi-bin/keep_alive?",
           
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: {formData},
        })
        return response;
        }catch (error:any){
            if(AxiosError<any>){
            return thunkAPI.rejectWithValue({statusCode: error?.response?.status,message : error?.response?.data})
                }else{
                    console.log('err',error);
                    }
   }
})
