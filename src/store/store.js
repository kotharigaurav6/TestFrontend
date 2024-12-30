import { configureStore } from "@reduxjs/toolkit";
import recruiterSlice from './recruiterSlice.js';
import commonSlice from './commonSlice.js';
import adminSlice from './adminSlice.js';
import vacancySlice from './vacancySlice.js';


export default configureStore({
    reducer:{
        recruiter : recruiterSlice,
        commonSlice : commonSlice,
        adminSlice : adminSlice,
        vacancySlice : vacancySlice
    }
});