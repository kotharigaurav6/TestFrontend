import { Link } from 'react-router-dom';
import '../css/style.css';
import { useState } from 'react';
import { addCandidate } from '../store/candidateSlice.js';
function CandidateRegistration(){
    const [candidate,setCandidate] = useState({});
    const getData = (event)=>{
        const {name,value} = event.target;
        if(event.target.type=='file'){
            var fileData = event.target.files[0];
            console.log("fileData : ",fileData);
            setCandidate({
                ...candidate,
                [name]:fileData
            });
        }else{
            setCandidate({
                ...candidate,
                [name]:value
            });
        }
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        // console.log('candidate : ',candidate);
        var formData = new FormData();
        for(var index in candidate){
            if(candidate[index]){
                console.log(index+" "+candidate[index]);
                formData.append(index,candidate[index]);
            }
        }
        await addCandidate(formData);
        event.target.reset();
    }
    return (<div id="loginbox">        
        <center><h2>Candidate Registration</h2>
        {/* action="/candidate/candidateRegistration" */}
        <form  method="post" onSubmit={handleSubmit} enctype="multipart/form-data">
            <input 
                id="input" 
                type="text" 
                placeholder="Enter Full Name" 
                name="name"
                onChange={getData}
            /> <br/>

            <input 
                id="input" 
                type="email" 
                placeholder="Enter Email" 
                name="_id"
                onChange={getData}
            /> <br/>

            <input 
                id="input" 
                type="password" 
                placeholder="Enter Password" 
                name="password"
                onChange={getData}
            /> <br/>

            <span style={{fontSize: "17px"}}>Select Gender : </span>
            <input onClick={getData} type="radio" id="male" value="Male" name="gender"/>
            <label for="male" style={{fontSize: "17px"}}>Male</label>
            <input onClick={getData} type="radio" id="female" value="Female" name="gender"/>
            <label for="female" style={{fontSize: "17px"}}>Female</label>
            
            <input 
                id="input" 
                type="date" 
                name="dob"
                onChange={getData}
            /> <br/>

            <textarea 
                name="address" 
                rows="3" 
                cols="39" 
                placeholder="Enter Address"
                onChange={getData}></textarea>

            <input 
                id="input" 
                type="text" 
                maxlength="10" 
                placeholder="Enter 10-digit Mobile No." 
                name="contact"
                onChange={getData}
            /> <br/>

            <select onChange={getData} id="input" name="qualification">
                <option value="">Select Qualification</option>
                <option value="B.COM">B.COM</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="MBA">MBA</option>
                <option value="MCA">MCA</option>
                <option value="ME">ME</option>
                <option value="PHD">PHD</option>
            </select>

            <input 
                id="input" 
                type="text" 
                placeholder="Enter Percentage" 
                name="percentage"
                onChange={getData}
            /> <br/>
 
            <select onChange={getData} id="input" name="experience">
                <option value="">Select Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="1+ Year">1+ Year</option>
                <option value="2+ Year">2+ Year</option>
                <option value="3+ Year">3+ Year</option>
                <option value="5+ Year">5+ Year</option>
                <option value="10+ Year">10+ Year</option>
            </select>
           <br/>
           <span style={{fontSize: "17px"}}>Resume: </span>
           <input 
                type="file" 
                id="file" 
                name="docs"
                onChange={getData}
            /> <br/>

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
        <Link id="demolink" to="/candidateLogin">Already Registered ? Login Here</Link>
    </center>
    </div>);
}
export default CandidateRegistration;