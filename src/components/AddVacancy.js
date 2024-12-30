import { useState } from "react";
import { addVacancy, setMessage } from "../store/vacancySlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function AddVacancy() {
    const [vacancy,setVacancy] = useState({});
    const message = useSelector(state=>state.vacancySlice.message);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = (event)=>{
        const {name,value} = event.target;
        setVacancy({
            ...vacancy,
            [name]:value
        });
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const result = await addVacancy(vacancy);
        console.log("AddVacancy.js----------- : ",result);
        // if(result.status==200){
            navigate('/addVacancy');
            dispatch(setMessage(result.data.message));
        // }
        event.target.reset();
    }
    return (<>
        <br />
        <center>
        {/* action="/vacancy/addVacancy" */}
            <form  onSubmit={handleSubmit} method="post">
                <table>
                    <caption>
                        <h2>Add Vacancy</h2>
                        <span style={{color:"red"}}>
                            {message}
                        </span>
                    </caption>
                    <tr>
                        <td>
                            <label>Post</label>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                placeholder="Enter Post" 
                                id="input" 
                                name="post"
                                onChange={getData} 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Subject</label>
                        </td>
                        <td>
                            <select  onChange={getData} name="subject" id="input">
                                <option value="">Select Subject</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Physics">Physics</option>
                                <option value="Business Maths">Business Maths</option>
                                <option value="Programming Language">Programming Language</option>
                                <option value="Aptitude">Aptitude</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Location</label>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                placeholder="Enter Location" 
                                id="input" 
                                name="location" 
                                onChange={getData}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Criteria</label>
                        </td>
                        <td>
                            <select  onChange={getData} name="criteria" id="input">
                                <option value="">Select Criteria</option>
                                <option value="Graduate">Graduate</option>
                                <option value="Post Graduate">Post Graduate</option>
                                <option value="P.hd">P.hd</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Experience</label>
                        </td>
                        <td>
                            <select  onChange={getData} name="experience" id="input">
                                <option value="">Select Experience</option>
                                <option value="Fresher">Fresher</option>
                                <option value="1+ Year">1+ Year</option>
                                <option value="2+ Year">2+ Year</option>
                                <option value="3+ Year">3+ Year</option>
                                <option value="5+ Year">5+ Year</option>
                                <option value="10+ Year">10+ Year</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Mode</label>
                        </td>
                        <td>
                            <select  onChange={getData} name="mode" id="input">
                                <option value="">Select Mode</option>
                                <option value="PartTime">PartTime</option>
                                <option value="FullTime">FullTime</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Vacancy</label>
                        </td>
                        <td>
                            <input 
                                name="vacancy" 
                                type="number" 
                                id="input" 
                                step="1" 
                                min="0" 
                                max="1000" 
                                placeholder="Enter No. Of Vacancy"
                                onChange={getData} 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Salary</label>
                        </td>
                        <td>
                            <input 
                                name="salary" 
                                type="number" 
                                id="input" 
                                step="1" 
                                min="0" 
                                placeholder="Enter Salary"
                                onChange={getData} 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Adv.Date</label>
                        </td>
                        <td>
                            <input 
                                type="date" 
                                id="input" 
                                name="advDate" 
                                onChange={getData}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Last Date</label>
                        </td>
                        <td>
                            <input 
                                type="date" 
                                id="input" 
                                name="lastDate" 
                                onChange={getData}
                            />
                        </td>
                    </tr>
                    {/* <tr>
                        <td>
                            <label>Email</label>
                        </td>
                        <td>
                            <input 
                                type="email" 
                                id="input" 
                                name="email" 
                                value="<%=email%>" 
                                readonly 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>RecruiterType</label>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                id="input" 
                                name="recruiter" 
                                value="<%=recruiterObj.recruiter%>" 
                                readonly 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>RecruiterName</label>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                id="input" 
                                name="name" 
                                value="<%=recruiterObj.name%>" 
                                readonly 
                            />
                        </td>
                    </tr> */}
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="submit" 
                                id="inputbtn" 
                                value="Add Vacancy" 
                            /> <br/>
                            <input 
                                type="reset" 
                                id="inputbtn" 
                                value="Reset" 
                            />
                        </td>
                    </tr>

                </table>
            </form>
        </center>
    </>);
}
export default AddVacancy;