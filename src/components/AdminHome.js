import banner from '../images/banner.png';
import '../css/style.css';
import { useLocation, useNavigate } from 'react-router-dom';
import jscookie from 'js-cookie';
import { useEffect } from 'react';
function AdminHome(){
    // const location = useLocation();
    const adminEmail = jscookie.get("adminEmail");
    const navigate = useNavigate();
    useEffect(()=>{
        if(adminEmail){
            navigate('/adminHome');
        }else{
            navigate('/');
        }
    },[]);
    return(<>
        <p style={{fontSize:"22px",fontFamily:"candara",padding:"10px"}}>
        Welcome {adminEmail}
        </p>
        <div id="banner">
            {/* {console.log(location.state.adminEmail)} */}
            <img src={banner} id="banner_img" alt=""/>
        </div>
    </>);
}
export default AdminHome;