import { createSlice } from "@reduxjs/toolkit";
import { AddNVRmnulle } from "./NVRaction";
interface INITVALUE {
    user: null | string;
    loading: boolean;
    error: boolean;
    success: boolean;
  }
const initialState:INITVALUE={
    user:null,
    error:false,
    loading: true,
    success: false
};
export const NvrM = createSlice({
    name: "C",
    initialState: initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(AddNVRmnulle.pending, (state) => {
        state.loading = true;
      })
      .addCase(AddNVRmnulle.fulfilled, (state) => {
        state.success = true;
        state.error = false;
      }).addCase(AddNVRmnulle.rejected,(state)=>{
        state.error=true
        state.loading=false
        
      })

    }
});

export default NvrM.reducer;