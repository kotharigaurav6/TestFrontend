import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getVacancyList } from "../store/vacancySlice.js";
import jscookie from 'js-cookie';
import { candidateApplyVacancy } from "../store/appliedVacancySlice.js";
function CandidateVacancyList() {
    const [vacancyList,setVacancyList] = useState([]);
    const [tableHeader,setTableHeader] = useState();
    const candidateEmail = jscookie.get("candidateEmail");
    const [newResult,setNewResult] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        if(candidateEmail){
            async function myFun(){
                const result = await getVacancyList();
                setNewResult(result.data.vacancyStatus);
                console.log(result);
                if(result.data.message=='No Record Found'){
                    setTableHeader("No Record Found");
                }else{
                    setTableHeader(
                    <thead>
                        <th>S.No</th>
                        <th>VacancyId</th>
                        <th>Post</th>
                        <th>Subject</th>
                        <th>Location</th>
                        <th>Criteria</th>
                        <th>Experience</th>
                        <th>Mode</th>
                        <th>Vacancy</th>
                        <th>Salary</th>
                        <th>AdvDate</th>
                        <th>LastDate</th>
                        <th>Recruiter</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Apply</th>
                      </thead>
                    );
                }
                setVacancyList(result.data.vacancyList);
            }
            myFun();

        }else{
            navigate('/');
        }
    },[]);    

    const applyForVacancy = async(vacancyObj)=>{
        // console.log("selected vacancy object : ",vacancyObj);
        const result = await candidateApplyVacancy(vacancyObj);
        console.log("Result : ",result);
        setVacancyList(result.data.vacancyList);
        setNewResult(result.data.vacancyStatus);
    }
    return (<>
        <p style={{fontSize:"22px",fontFamily:"candara",padding:"10px"}}>
        Welcome {candidateEmail}
        </p>
        <center>
            <h2>Vacancy List</h2>
        </center>
        <table width="100%" id="space" border="1" cellspacing="0" cellpadding="5">
                  
           {tableHeader}
           
            <tbody>
                {
                    vacancyList.map((obj,index)=>{
                        let sendObj = {
                            vacancyId : obj.vacancyId,
                            candidateEmail : candidateEmail,
                            recruiterEmail : obj.email,
                            post : obj.post
                        }  
                        return(<tr>
                            <td>{index+1}</td>
                            <td>{obj.vacancyId}</td>
                            <td>{obj.post}</td>
                            <td>{obj.subject}</td>
                            <td>{obj.location}</td>
                            <td>{obj.criteria}</td>
                            <td>{obj.experience}</td>
                            <td>{obj.mode}</td>
                            <td>{obj.vacancy}</td>
                            <td>{obj.salary}</td>
                            <td>{obj.advDate}</td>
                            <td>{obj.lastDate}</td>
                            <td>{obj.recruiter}</td>
                            <td>{obj.email}</td>
                            <td>{obj.name}</td>
                            <td>
                            {
                            newResult.some((objNew)=> objNew.vacancyId==obj.vacancyId && objNew.candidateEmail==candidateEmail) ?    
                            <span style={{color:"red"}}>Applied</span> : <Link to="" onClick={()=>{applyForVacancy(sendObj)}}>Apply</Link>
                            }
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </>);
}
// function CandidateVacancyList(){
//     return(<>
//         <br/>
//     <center>
//         <h2>Vacancy List</h2>
//         <br/>
//     </center>

//     {/* <% if(message=="No Record Found"){%> */}
//         <center>
//         <span style={{fontSize:"20px",color:"red"}}>
//                 {/* <%=message%> */}
//             </span>
//         </center>
//     {/* <%}else{%> */}
//         <span style={{fontSize:"20px",color:"red"}}>
//             {/* <center><%=message%></center> */}
//         </span>
//     <table width="100%" id="space" border="1" cellspacing="0" cellpadding="5">
//         <thead>
//             <th>S.No</th>
//             <th>VacancyId</th>
//             <th>Post</th>
//             <th>Subject</th>
//             <th>Location</th>
//             <th>Criteria</th>
//             <th>Experience</th>
//             <th>Mode</th>
//             <th>Vacancy</th>
//             <th>Salary</th>
//             <th>AdvDate</th>
//             <th>LastDate</th>
//             <th>Recruiter</th>
//             <th>Apply</th>
//         </thead>
//         <tbody>

//             {/* <%vacancyList.forEach((vacancy,index)=>{
//                 let obj = {
//                     vacancyId : vacancy.vacancyId,
//                     candidateEmail : email,
//                     recruiterEmail : vacancy.email,
//                     post : vacancy.post
//                 }    
//             %>
//                  <tr>
//                     <td><%=index+1%></td>
//                     <td><%=vacancy.vacancyId%></td>
//                     <td><%=vacancy.post%></td>
//                     <td><%=vacancy.subject%></td>
//                     <td><%=vacancy.location%></td>
//                     <td><%=vacancy.criteria%></td>
//                     <td><%=vacancy.experience%></td>
//                     <td><%=vacancy.mode%></td>
//                     <td><%=vacancy.vacancy%></td>
//                     <td><%=vacancy.salary%></td>
//                     <td><%=vacancy.advDate.toDateString()%></td>
//                     <td><%=vacancy.lastDate.toDateString()%></td>
//                     <td><%=vacancy.email%></td>
//                     <td>
//                     <%if(status.some((obj)=>obj.vacancyId==vacancy.vacancyId && obj.candidateEmail==email)){%>    
//                             <span style="color:red">Applied</span>
//                     <%}else{%>
//                             <a href="/appliedVacancy/candidateAppliedVacancy?data=<%=JSON.stringify(obj)%>">Apply</a>
//                     <%}%>    
//                     </td>    
//                     </tr>   
//             <%})%> */}
//         </tbody>
//     </table>
//     {/* <%}%> */}

//     </>);
// }
export default CandidateVacancyList;