import './App.css';
import logo from './images/logo.jpg';
import './css/style.css';
import Navbar from './components/Navbar.js';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import RecruiterLogin from './components/RecruiterLogin.js';
import CandidateLogin from './components/CandidateLogin.js';
import CandidateRegistration from './components/CandidateRegistration.js';
import RecruiterRegistration from './components/RecruiterRegistration.js';
import AdminLogin from './components/AdminLogin.js';
import AdminHome from './components/AdminHome.js';
import RecruiterList from './components/RecruiterList.js';
import RecruiterHome from './components/RecruiterHome.js';
import AddVacancy from './components/AddVacancy.js';
import CandidateHome from './components/CandidateHome.js';
import CandidateVacancyList from './components/CandidateVacancyList.js';
import AppliedCandidateList from './components/AppliedCandidateList.js';
import CandidateViewStatus from './components/CandidateViewStatus.js';
function App() {
  return (<>
    <div id="header">
        <img src={logo} id="logo" alt=""/>
        <span id="heading">शिक्षक Recruitment System</span>
    </div>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/adminHome' element={<AdminHome/>}/>
        <Route path='/adminRecruiterList' element={<RecruiterList/>}/>
        <Route path='/recruiterLogin' element={<RecruiterLogin/>}/>
        <Route path='/recruiterHome' element={<RecruiterHome/>}/>
        <Route path='/appliedCandidateList' element={<AppliedCandidateList/>}/>
        <Route path='/addVacancy' element={<AddVacancy/>}/>
        <Route path='/candidateLogin' element={<CandidateLogin/>}/>
        <Route path='/candidateHome' element={<CandidateHome/>}/>
        <Route path='/vacancyList' element={<CandidateVacancyList/>}/>
        <Route path='/myStatus' element={<CandidateViewStatus/>}/>
        <Route path='/recruiterRegistration' element={<RecruiterRegistration/>}/>
        <Route path='/candidateRegistration' element={<CandidateRegistration/>}/>
    </Routes>
  </>);
}

export default App;
