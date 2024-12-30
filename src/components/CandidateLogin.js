import { Link, useNavigate } from 'react-router-dom';
import '../css/style.css';
import { useEffect, useState } from 'react';
import { loginCandidate } from '../store/candidateSlice.js';
import { setNavData } from '../store/commonSlice.js';
import { useDispatch } from 'react-redux';
function CandidateLogin(){
    const [candidate,setCandidate] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getData = (event)=>{
        const {name,value} = event.target;
        setCandidate({
            ...candidate,
            [name]:value
        });
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const res = await loginCandidate(candidate);
        if(res.status==200){
            dispatch(setNavData("candidateHome"));
            navigate('/candidateHome');
        }
        event.target.reset();
    }
    return (<div id="loginbox">
        <center><h2>Candidate Login Form</h2>
            {/* <span style="color:red"><%=message%></span> */}
            {/* action="/candidate/candidateLogin" */}
            <form onSubmit={handleSubmit} method="post">
            <input 
                id="input" 
                type="email" 
                placeholder="Enter Email" 
                name="email"
                onChange={getData}
            /> <br/>
            
            <input 
                id="input" 
                type="password" 
                placeholder="Enter Password" 
                name="password"
                onChange={getData}

            /> <br/>
            
            <input 
                id="inputbtn" 
                type="submit" 
                value="Login"
            /> <br/>
            
            <input 
                id="inputbtn" 
                type="reset" 
                value="Reset"
            /> <br/>
        </form>    
        <Link id="demolink" to="/candidateRegistration">Yet Not Registered ? Register Here</Link>
    </center>
    </div>);
}
export default CandidateLogin;