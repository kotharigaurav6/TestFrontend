import banner from '../images/banner.png';
import '../css/style.css';
import jscookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function CandidateHome(){
    const candidateEmail = jscookie.get("candidateEmail");
    const navigate = useNavigate();
    useEffect(()=>{
        if(candidateEmail){
            navigate('/candidateHome');
        }else{
            navigate('/');
        }
    },[]);
    
    return (<>
        <p style={{fontSize:"22px",fontFamily:"candara",padding:"10px"}}>
        Welcome {candidateEmail}
        </p>
        <div id="banner">
            <img src={banner} id="banner_img" alt=""/>
        </div>
    </>);
}

export default CandidateHome; 