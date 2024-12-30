import { createSlice } from "@reduxjs/toolkit";
import { candidateURL } from "../urls.js";
import jscookie from 'js-cookie';
import axios from "axios";
const candidateToken = jscookie.get('candidate_jwt_token');
const initialState = {
    message:""
}
const candidateSlice = createSlice({
    name:'candidateSlice',
    initialState,
    reducers:{
        setMessage : (state,action)=>{
            state.message = action.payload
        }
    }
});

/*
    email : kotharigaurav6@gmail.com
    password : 12345678
*/
export const loginCandidate = async (candidateData)=>{
    try{
        const result = await axios.post(candidateURL+'/candidateLogin',candidateData);
        if(result.status==200){
            jscookie.set("candidateEmail",candidateData.email);
            jscookie.set("candidate_jwt_token",result.data.token,{expires:1});
        }
        return result;
    }catch(error){
        console.log("Error while login candidate");
    }
}

export const addCandidate = async(candidateData)=>{
    try{
         console.log("candidateSlice : ",candidateData);
         const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        const result = await axios.post(candidateURL+'/candidateRegistration',candidateData,config);
        return result;
    }catch(error){
        console.log("Error occured in candidate slice");
    }
}

export const getStatusData = async()=>{
    try{
        const result = await axios.get(candidateURL+'/myStatus?candidateToken='+candidateToken);
        return result;
    }catch(error){
        console.log("Error while getting status list of candidate");
    }
}
export const {setMessage} = candidateSlice.actions;
export default candidateSlice.reducer;