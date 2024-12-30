import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import jscookie from 'js-cookie';
import { candidateAppliedVacancy, recruiterUpdateStatus } from "../store/recruiterSlice.js";
import { setNavData } from "../store/commonSlice.js";
import { serverURL } from "../urls.js";
function AppliedCandidateList(){
    const recruiterEmail = jscookie.get("recruiterEmail");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [tableHeader,setTableHeader] = useState();
    const [appliedVacancyList,setAppliedVacancyList] = useState([]);
    const [newResult,setNewResult] = useState([]);
    //const [candidateData,setCandidateData] = useState();

    useEffect(()=>{
        async function myfun(){
        dispatch(setNavData("recruiterHome"));
        if(recruiterEmail){
            const result = await candidateAppliedVacancy();
            console.log(result);
            if(result.data.message=='No Record Found'){
                setTableHeader("No Record Found");
            }else{
                setTableHeader(
                    <thead>
                        <th>S.No</th>
                        <th>AppliedVacancyId</th>
                        <th>VacancyId</th>
                        <th>CandidateEmail</th>
                        <th>RecruiterEmail</th>
                        <th>Post</th>
                        <th>RecruiterStatus</th>
                    </thead>
                );
                setAppliedVacancyList(result.data.appliedVacancyList);
                setNewResult(result.data.result);
            }
        }else{
            navigate('/');
        }
      }
      myfun();
},[]);
    // const getData = (event)=>{
    //     const {name,value} = event.target;
    //     setCandidateData({
    //         ...candidateData,
    //         [name]:value
    //     });
    // }
    const handleSubmit = async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const vacancyId = formData.get('vacancyId');
        const recruiterStatus = formData.get('recruiterStatus');
        const candidateData = {
             vacancyId:vacancyId,
             recruiterStatus:recruiterStatus   
        }
        const result = await recruiterUpdateStatus(candidateData);
        console.log("recruiter update status : ",result);  
        setAppliedVacancyList(result.data.appliedVacancyList); 
        event.target.reset();      
    }
    return (<>
        <p style={{fontSize:"22px",fontFamily:"candara",padding:"10px"}}>
            Welcome {recruiterEmail}
        </p>
        <br/>
        <center>
            <h2>Applied Candidate Vacancy List</h2>
        </center>
        <table width="100%" id="space" border="1" cellspacing="0" cellpadding="5">
           {tableHeader}
           <tbody>
           {
            Array.isArray(appliedVacancyList) && appliedVacancyList.map((vacancy,index)=>{
                {console.log("-------------------------> ",vacancy.vacancyId);}
                 return (<tr>
                    <td>{index+1}</td>
                    <td>{vacancy.appliedVacancyId}</td>
                    <td>{vacancy.vacancyId}</td>
                    <td>{vacancy.candidateEmail} <br/>
                        <a href={`${serverURL}/documents/${newResult[index]}`} download={newResult[index]}>{newResult[index]}</a>
                    </td>    
                    <td>{vacancy.recruiterEmail}</td>
                    <td>{vacancy.post}</td>
                    <td>
                    {/* action="/recruiter/recruiterUpdateStatus" */}
                        <form method="post" onSubmit={handleSubmit}>
                        <input 
                            type="hidden" 
                            value={vacancy.vacancyId} 
                            name="vacancyId"
                        />
                        <select name="recruiterStatus" id="input">
                            <option value={vacancy.recruiterStatus}>{vacancy.recruiterStatus}</option>
                            <option value="ShortListed">ShortListed</option>
                            <option value="Better Luck Next Time">Better Luck Next Time</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                        <input 
                            type="submit" 
                            value="Update Status" 
                            id="inputbtn"
                        />
                        </form>
                    </td>
                </tr>)}) 
            }  
           </tbody>
        </table>
    </>);
}
export default AppliedCandidateList;



/*
    <br>
    <center>
        <h2>Applied Candidate Vacancy List</h2>
            <span style="color:red"><%=message%></span>
        <br>
    </center>
    <% if(message=="No Record Found"){%>
        <center>
            <span style="font-size:20px;color:red">
                <%=message%>
            </span>
        </center>
    <%}else{%>

    <table width="100%" id="space" border="1" cellspacing="0" cellpadding="10">
        <thead>
            <th>S.No</th>
            <th>AppliedVacancyId</th>
            <th>VacancyId</th>
            <th>CandidateEmail</th>
            <th>RecruiterEmail</th>
            <th>Post</th>
            <th>RecruiterStatus</th>
        </thead>
        <tbody>
           
            <%appliedVacancyList.forEach((vacancy,index)=>{%>
                 <tr>
                    <td><%=index+1%></td>
                    <td><%=vacancy.appliedVacancyId%></td>
                    <td><%=vacancy.vacancyId%></td>
                    <td><%=vacancy.candidateEmail%>
                        <a href="documents/<%=result[index]%>"><%=result[index]%></a>
                    </td>    
                    <td><%=vacancy.recruiterEmail%></td>
                    <td><%=vacancy.post%></td>
                    <td>
                        <form action="/recruiter/recruiterUpdateStatus" method="post">
                        <input type="hidden" value="<%=vacancy.vacancyId%>" name="vacancyId">
                        <select name="recruiterStatus" id="input">
                            <option value="<%=vacancy.recruiterStatus%>"><%=vacancy.recruiterStatus%></option>
                            <option value="ShortListed">ShortListed</option>
                            <option value="Better Luck Next Time">Better Luck Next Time</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                        <input type="submit" value="Update Status" id="inputbtn">
                        </form>
                    </td>
                </tr>   
            <%})%>
        </tbody>
    </table>
    <%}%>

*/