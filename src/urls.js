import dotenv from 'dotenv';
dotenv.config();

export const recruiterURL = process.env.REACT_APP_RECRUITER_URL;
export const candidateURL = process.env.REACT_APP_CANDIDATE_URL;
export const adminURL = process.env.REACT_APP_ADMIN_URL;
export const vacancyURL = process.env.REACT_APP_VACANCY_URL;
export const appliedVacancyURL = process.env.REACT_APP_APPLIED_VACANCY_URL;
export const serverURL = process.env.REACT_APP_SERVER_URL;

// export const recruiterURL = "http://localhost:3001/recruiter";
// export const candidateURL = "http://localhost:3001/candidate";
// export const adminURL = "http://localhost:3001/admin";
// export const vacancyURL = "http://localhost:3001/vacancy";
// export const appliedVacancyURL = "http://localhost:3001/appliedVacancy";
// export const serverURL = "http://localhost:3001/";

