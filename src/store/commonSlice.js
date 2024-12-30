import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    navShow : "home"
}
const commonSlice = createSlice({
    name:'commonSlice',
    initialState,
    reducers : {
        setNavData : (state,action)=>{
            state.navShow = action.payload
        }
    }
})

export const {setNavData} = commonSlice.actions;
export default commonSlice.reducer;