import { useLocation, useNavigate } from 'react-router-dom';
import banner from '../images/banner.png';
import { useEffect } from 'react';
import jscookie from 'js-cookie';
function RecruiterHome(){
     // const location = useLocation();
     const recruiterEmail = jscookie.get("recruiterEmail");
     const navigate = useNavigate();
     useEffect(()=>{
         if(recruiterEmail){
             navigate('/recruiterHome');
         }else{
             navigate('/');
         }
     },[]);
    return(<>
         <p style={{fontSize:"22px",fontFamily:"candara",padding:"10px"}}>
        Welcome {recruiterEmail}
        </p>
        <div id="banner">
            <img src={banner} id="banner_img" alt=""/>
        </div>
    </>);
}
export default RecruiterHome;