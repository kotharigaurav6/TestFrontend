import { Link, useNavigate } from 'react-router-dom';
import '../css/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loginRecruiter } from '../store/recruiterSlice.js';
import { setNavData } from '../store/commonSlice.js';
function RecruiterLogin(){
    const [recruiterData,setRecruiterData] = useState({});
    var message = useSelector(state=>state.recruiter.message);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    /* extract message from URL starts*/
        const urlSearch = new URLSearchParams(window.location.search);
        console.log("urlSearch : ",urlSearch.size);
        if(urlSearch.size)
             message = urlSearch.get("message");
        console.log("message : ",message);
    /* extract message from URL ends*/
    
    const getData = (event)=>{
        const {name,value} = event.target;
        setRecruiterData({
            ...recruiterData,
            [name]:value
        });
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const result = await loginRecruiter(recruiterData);
        console.log("RecruiterLogin result : ",result);
                if(result.status==200){
                    //console.log("status : ",result.status);
                    dispatch(setNavData("recruiterHome"));
                    navigate('/recruiterHome',{
                        state:{
                            recruiterEmail : result.data.email
                        }
                    });
                }
                else{
                    console.log("else of reruiter login handle submit");
                    navigate('/recruiterLogin');
                }
    }
    return (<div id="loginbox">
        <center><h2>Recruiter Login Form</h2>
            {/* <span style="color:red"><%=message%></span> */}
            {message}
            {/* action="/recruiter/recruiterLogin" */}
        <form onSubmit={handleSubmit} method="post">
            <input onChange={getData} id="input" type="email" placeholder="Enter Email" name="email"/> <br/>
            <input onChange={getData} id="input" type="password" placeholder="Enter Password" name="password"/> <br/>
            <input id="inputbtn" type="submit" value="Login"/> <br/>
            <input id="inputbtn" type="reset" value="Reset"/> <br/>
        </form>    
        <Link id="demolink" to="/recruiterRegistration">Yet Not Registered ? Register Here</Link>
    </center>
    </div>);
}
export default RecruiterLogin;