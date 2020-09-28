import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';


const AttemptExam = () => {
    const {id, qid} = useParams();
    const history = useHistory();
    const [questions, setQuestion] = useState([]);
    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {
        const response = await axios.get(
          "http://localhost:8500/exam-service/getbyid/" + qid
        );
        setQuestion(response.data);
      };
    
    const [answers, setAnswers] = useState({
        userId: id,
        userAns1: "",
        userAns2: "",
        userAns3: "",
        userAns4: "",
        userAns5: "",
        })
    const { userId, userAns1, userAns2, userAns3, userAns4, userAns5} = answers;
    

    const handleChange = (event) => {
        setAnswers({...answers, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
        console.log("Ponk");
        await axios.post("http://localhost:8600/user-service/user/answer", answers);
        axios.get("http://localhost:8600/user-service/"+id+"/exam/"+qid).then((response) => {alert("Test submitted!"); history.push("/dashboard/"+id)}).catch((error) => {alert(error.response.data.message); history.push("/dashboard/"+id)});
    }
    

    return (
        <div align="center">
        <br/>
        <hr/>
        <br/>
        <h2><b>EXAM TOPIC : {questions.title}</b> </h2>
        <br/>
        <br/>
        <form>
            <table cellpadding="4" cellspacing="4" border="4">
                <tbody border="4">
                    <tr border="4" bgcolor="yellow">
                        <td border="4" bgcolor="yellow"><b>Question 1:</b></td>
                        <td border="4" bgcolor="yellow" colSpan="4"><b>{questions.q1}</b></td>
                    </tr>
                    <tr border="4" bgcolor="yellow">
                        <td border="4"></td>
                        <td border="4">
                            <input type="radio" id="userAns1" name="userAns1" value="a" onChange={handleChange}/>
                            <label for="userAns1"> {questions.op11}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns1" name="userAns1" value="b" onChange={handleChange}/>
                            <label for="userAns1"> {questions.op12}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns1" name="userAns1" value="c" onChange={handleChange}/>
                            <label for="userAns1"> {questions.op13}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns1" name="userAns1" value="d" onChange={handleChange}/>
                            <label for="userAns1"> {questions.op14}</label>
                        </td>
                    </tr>
                    <tr border="4" bgcolor="#ffd800">
                        <td border="4"><b>Question 2:</b></td>
                        <td border="4" colSpan="4"><b>{questions.q2}</b></td>
                    </tr>
                    <tr border="4" bgcolor="#ffd800">
                        <td border="4"></td>
                        <td border="4">
                            <input type="radio" id="userAns2" name="userAns2" value="a" onChange={handleChange}/>
                            <label for="userAns2"> {questions.op21}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns2" name="userAns2" value="b" onChange={handleChange}/>
                            <label for="userAns2"> {questions.op22}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns2" name="userAns2" value="c" onChange={handleChange}/>
                            <label for="userAns2"> {questions.op23}</label>
                        </td >
                        <td border="4">
                            <input type="radio" id="userAns2" name="userAns2" value="d" onChange={handleChange}/>
                            <label for="userAns2"> {questions.op24}</label>
                        </td>
                    </tr>
                    <tr border="4" bgcolor="#eedc82">
                        <td border="4"><b>Question 3:</b></td>
                        <td border="4" colSpan="4"><b>{questions.q3}</b></td>
                    </tr>
                    <tr border="4" bgcolor="#eedc82">
                        <td border="4"></td>
                        <td border="4">
                            <input type="radio" id="userAns3" name="userAns3" value="a" onChange={handleChange}/>
                            <label for="userAns3"> {questions.op31}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns3" name="userAns3" value="b" onChange={handleChange}/>
                            <label for="userAns3"> {questions.op32}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns3" name="userAns3" value="c" onChange={handleChange}/>
                            <label for="userAns3"> {questions.op33}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns3" name="userAns3" value="d" onChange={handleChange}/>
                            <label for="userAns3"> {questions.op34}</label>
                        </td>
                    </tr>
                    <tr border="4" bgcolor="#f5f5dc">
                        <td border="4"><b>Question 4:</b></td>
                        <td border="4" colSpan="4"><b>{questions.q4}</b></td>
                    </tr>
                    <tr border="4" bgcolor="#f5f5dc">
                        <td border="4"></td>
                        <td border="4">
                            <input type="radio" id="userAns4" name="userAns4" value="a" onChange={handleChange}/>
                            <label for="userAns4"> {questions.op41}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns4" name="userAns4" value="b" onChange={handleChange}/>
                            <label for="userAns4"> {questions.op42}</label>
                        </td >
                        <td border="4">
                            <input type="radio" id="userAns4" name="userAns4" value="c" onChange={handleChange}/>
                            <label for="userAns4"> {questions.op43}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns4" name="userAns4" value="d" onChange={handleChange}/>
                            <label for="userAns4"> {questions.op44}</label>
                        </td>
                    </tr>
                    <tr border="4" bgcolor="#b48648">
                        <td border="4"><b>Question 5:</b></td>
                        <td border="4" colSpan="4"><b>{questions.q5}</b></td>
                    </tr>
                    <tr border="4" bgcolor="#b48648">
                        <td border="4"></td>
                        <td border="4">
                            <input type="radio" id="userAns5" name="userAns5" value="a" onChange={handleChange}/>
                            <label for="userAns5"> {questions.op51}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns5" name="userAns5" value="b" onChange={handleChange}/>
                            <label for="userAns5"> {questions.op52}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns5" name="userAns5" value="c" onChange={handleChange}/>
                            <label for="userAns5"> {questions.op53}</label>
                        </td>
                        <td border="4">
                            <input type="radio" id="userAns5" name="userAns5" value="d" onChange={handleChange}/>
                            <label for="userAns5"> {questions.op54}</label>
                        </td>
                    </tr>
                    <tr border="4">
                        <td border="4"></td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <Button variant="contained" onClick={handleSubmit} color="primary">
        Submit
      </Button>
           
        </form>
    </div>
    );
};

export default AttemptExam;