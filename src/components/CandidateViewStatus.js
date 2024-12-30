import { useEffect, useState } from "react";
import { setNavData } from "../store/commonSlice.js";
import jscookie from 'js-cookie';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getStatusData } from "../store/candidateSlice.js";
function CandidateViewStatus(){
    const candidateEmail = jscookie.get("candidateEmail");
    const [tableHeader,setTableHeader] = useState();
    const [appliedVacancyList,setAppliedVacancyList] = useState([]);
    const dispatch = useDispatch();    
    const navigate = useNavigate();
    useEffect(()=>{
        async function myFun(){
            dispatch(setNavData("candidateHome"));
            if(candidateEmail){
             const result = await getStatusData(); 
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
                }
            }else{
                navigate('/');
            }
        }
        myFun();
    },[]);
    return (<>
    <br/>
        <center>
            <h2>MyStatus List</h2>
        </center>
    <br/>
    <table width="100%" id="space" border="1" cellspacing="0" cellpadding="5">
           {tableHeader}
           <tbody>
           {
                Array.isArray(appliedVacancyList) && appliedVacancyList.map((vacancy,index)=>{
                        return(<tr>
                            <td>{index+1}</td>
                            <td>{vacancy.appliedVacancyId}</td>
                            <td>{vacancy.vacancyId}</td>
                            <td>{vacancy.candidateEmail}</td>
                            <td>{vacancy.recruiterEmail}</td>
                            <td>{vacancy.post}</td>
                            <td>{vacancy.recruiterStatus}</td>
                        </tr>)   
                })
           }
       </tbody>
   </table>
    </>);
}
export default CandidateViewStatus;

/*
    <br>
    <center>
        <h2>MyStatus List</h2>
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
                    <td><%=vacancy.candidateEmail%></td>
                    <td><%=vacancy.recruiterEmail%></td>
                    <td><%=vacancy.post%></td>
                    <td><%=vacancy.recruiterStatus%></td>
                </tr>   
            <%})%>
        </tbody>
    </table>
    <%}%>
*/