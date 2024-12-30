import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { adminURL } from "../urls.js";
import jscookie from 'js-cookie';
const adminToken = jscookie.get("admin_jwt_token");
const initialState = {
    message:""
}
const adminSlice = createSlice({
    name:'adminSlice',
    initialState,
    reducers:{
        setMessage : (state,action)=>{
            state.message = action.payload;
        }
    }
});

/*
    admin email : admin@gmail.com
    admin password : 12345678
*/  

export const adminLogin = async(adminData)=>{
    try{
        console.log("adminData email : ",adminData.email);
        const result = await axios.post(adminURL+'/adminLogin',adminData);
        // console.log("Admin slice result : ",result);
        if(result.status==200){
            jscookie.set("adminEmail",adminData.email);
            jscookie.set("admin_jwt_token",result.data.token,{expires:1});
        }
        return result;
    }catch(error){
        console.log("Error in addLogin Function in adminSlice : ",error);
    }
}

export const recruiterList = async()=>{
    try{
        const recruiterList = await axios.get(adminURL+'/adminRecruiterList?adminToken='+adminToken);
        console.log("Recruiter List : ",recruiterList);
        return recruiterList;
    }catch(error){
        console.log("Error while dealing with recriuiter list in admin panel");
    }
}

export const adminVerifyRecruiter = async(recruiterEmail)=>{
    try{
        const recruiterStatus = await axios.get(adminURL+'/adminVerifyRecruiter?adminToken='+adminToken+'&recruiterEmail='+recruiterEmail);
        //console.log("recruiterStatus : ",recruiterStatus);
        
        return recruiterStatus;
    }catch(error){
        console.log("Error while verifying Recruiter");
        
    }
}

export const {setMessage} = adminSlice.actions;
export default adminSlice.reducer;