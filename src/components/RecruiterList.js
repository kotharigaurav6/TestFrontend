import { useEffect, useState } from "react";
import { adminVerifyRecruiter, recruiterList } from "../store/adminSlice.js";
import { Link } from "react-router-dom";
function RecruiterList(){
    const [recruiterDataList,setRecruiterList] = useState([]);
    useEffect(()=>{
        async function myfun()
        {
            const recruiterDataList = await recruiterList();
            console.log("Inside UI : ",recruiterDataList.data.recruiterList);
            setRecruiterList(recruiterDataList.data.recruiterList);
        }
        myfun();
    },[]);
    const adminVerify = async(recruiterEmail)=>{
        try{
            const result = await adminVerifyRecruiter(recruiterEmail);
            console.log("Result : ",result);
            setRecruiterList(result.data.recruiterList);
        }catch(error){

        }
    }
    return (<>
        <table border='1' cellspacing='0' cellpadding='10'> 
            <caption>
                <h2>Recruiter List</h2>
            </caption>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Recruiter</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>EmailVerify</th>
                    <th>AdminVerify</th>
                </tr>
            </thead>
            <tbody>
                {
                    Array.isArray(recruiterDataList) && recruiterDataList.map((obj,index)=>{
                        return (<tr>
                            <td>{index+1}</td>
                            <td>{obj.name}</td>
                            <td>{obj.recruiter}</td>
                            <td>{obj.email}</td>
                            <td>{obj.contact}</td>
                            <td>{obj.address}</td>
                            <td>{obj.status}</td>
                            <td>{obj.emailVerify}</td>
                            {/* <td>{obj.adminVerify}</td> */}
                            <td>
                                <Link to='' onClick={()=>{adminVerify(obj.email)}}>{obj.adminVerify}</Link>
                            </td>
                        </tr>);
                    })
                }
            </tbody>
        </table>        
    </>);
}
export default RecruiterList;