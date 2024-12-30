import { useState } from 'react';
import '../css/style.css';
import { adminLogin} from '../store/adminSlice.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNavData } from '../store/commonSlice.js';
function AdminLogin(){
    const [adminCredential,setCredential] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getData = (event)=>{
        const {name,value} = event.target;
        setCredential({
            ...adminCredential,
            [name]:value
        });
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const result = await adminLogin(adminCredential);
        // console.log("AdminLogin result : ",result);
        if(result.status==200){
            //console.log("status : ",result.status);
            dispatch(setNavData("adminHome"));
            navigate('/adminHome',{
                state:{
                    adminEmail : result.data.email
                }
            });
        }
        else{
            console.log("else of admin login handle submit");
            navigate('/adminLogin');
        }
    }
    return (<div id="loginbox">
        <center><h2>Admin Login Form</h2>
            {/* <span style="color:red"><%=message%></span> */}
            {/* "/admin/adminLogin" */}
        <form action="" onSubmit={handleSubmit} method="post">
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
    </center>
    </div>);
}

export default AdminLogin;