import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { recruiterURL } from "../urls.js";
import jscookie from 'js-cookie';
const recruiterToken = jscookie.get("recruiter_jwt_token");
const initialState = {
    message : ""
}
const recruiterSlice = createSlice({
    name:'recruiterSlice',
    initialState,
    reducers: {
        setMessage : (state,action)=>{
            console.log("setMessage action : ",action.payload);
            state.message = action.payload;
        }
    }
});
export const addRecruiter = async(recruiter)=>{
    try{
        const result = await axios.post(recruiterURL+'/recruiterRegistration',recruiter);
        // console.log("recruiterSlice : ",result);
        return result;
    }catch(error){
        console.log("Error while adding Recruiter");
    }
}
/*
    email : kotharigaurav6@gmail.com
    password : 12345678
*/

export const loginRecruiter = async(recruiter)=>{
    try{
        const result = await axios.post(recruiterURL+'/recruiterLogin',recruiter);
        console.log("Result : ",result);
        if(result.status==200){
            jscookie.set("recruiterEmail",recruiter.email);
            jscookie.set("recruiter_jwt_token",result.data.token,{expires:1});
        }
        return result;
    }catch(error){
        console.log("Error while recruiter login : ",error);
    }    
}

export const candidateAppliedVacancy = async()=>{
    try{
        const result = await axios.get(recruiterURL+'/appliedCandidateList?recruiterToken='+recruiterToken); 
        return result;
    }catch(error){
        console.log("Error while we fetch candidate applied vacancy list");
    }
}

export const recruiterUpdateStatus = async(candidateData)=>{
    try{
        const result = await axios.post(recruiterURL+'/recruiterUpdateStatus?recruiterToken='+recruiterToken,candidateData);
        return result;
    }catch(error){
        console.log("Error while updating status of candidate who applied for vacancy : ",error);
    }
}
export const {setMessage} = recruiterSlice.actions; 
export default recruiterSlice.reducer;