import { createSlice } from "@reduxjs/toolkit";
import { candidateURL, vacancyURL } from "../urls.js";
import jscookie from 'js-cookie';
import axios from "axios";

const recruiterToken = jscookie.get("recruiter_jwt_token");
const candidateToken = jscookie.get("candidate_jwt_token");

const initialState = {
    message:""
}
const vacancySlice = createSlice({
    name:'vacancySlice',
    initialState,
    reducers:{
        setMessage : (state,action)=>{
            state.message = action.payload
        }
    }
});

export const addVacancy = async(vacancyData)=>{
    try{
        const result = await axios.post(vacancyURL+'/addVacancy?recruiterToken='+recruiterToken,vacancyData);
        return result;
    }catch(error){
        console.log("Error while adding vacancy");
    }
}
export const getVacancyList = async()=>{
    try{
        const result = await axios.get(candidateURL+'/vacancyList?candidateToken='+candidateToken);
        return result;
    }catch(error){
        console.log("Error while fetching vacancy List");
    }
}
export const {setMessage} = vacancySlice.actions;
export default vacancySlice.reducer;