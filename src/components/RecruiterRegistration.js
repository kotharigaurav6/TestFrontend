import { Link, useNavigate } from 'react-router-dom';
import '../css/style.css';
import { useState } from 'react';
import { addRecruiter, setMessage } from '../store/recruiterSlice.js';
import { useDispatch } from 'react-redux';
function RecruiterRegistration(){
    const [recruiter,setRecruiter] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = (event)=>{
        const {name,value} = event.target;
        setRecruiter({
            ...recruiter,
            [name]:value
        })
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const obj = await addRecruiter(recruiter);
        // console.log("received : ",obj);
        
        if(obj.status==201){
            dispatch(setMessage(obj.data.message));
            navigate('/recruiterLogin');
        }else{
            navigate('/recruiterRegistration');
        }
    }
    return (<div id="loginbox">        
        <center><h2>Recruiter Registration</h2>
        {/* /recruiter/recruiterRegistration */}
        <form action="" method="post" onSubmit={handleSubmit}>
            <input  
                id="input" 
                type="text" 
                placeholder="Enter Name" 
                name="name"
                onChange={getData}
            /> <br/>

            <select onChange={getData} id="input" name="recruiter">
                <option value="">Select Type</option>
                <option value="School">School</option>
                <option value="College">College</option>
                <option value="Professional Institute">Professional Institute</option>
            </select>
            
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
                id="input" 
                type="text" 
                maxlength="10" 
                placeholder="Enter 10-digit Mobile No." 
                name="contact"
                onChange={getData}
            /> <br/>
           
            <textarea 
                name="address" 
                rows="3" 
                cols="39" 
                placeholder="Enter Address"
                onChange={getData}
            ></textarea>

            <input 
                id="inputbtn" 
                type="submit" 
                value="Register"
            /> <br/>
            
            <input 
                id="inputbtn" 
                type="reset" 
                value="Reset"
            /> <br/>

        </form>    
        <Link id="demolink" to="/recruiterLogin">Already Registered ? Login Here</Link>
    </center>
    </div>);
}
export default RecruiterRegistration;