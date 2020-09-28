import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const DeleteExam = () => {
  const { id } = useParams();
  const [exam, setExam] = useState({
    qBankId: 0,
    title: "",
    q1: "",
    op11: "",
    op12: "",
    op13: "",
    op14: "",
    a1: "",
    q2: "",
    op21: "",
    op22: "",
    op23: "",
    op24: "",
    a2: "",
    q3: "",
    op31: "",
    op32: "",
    op33: "",
    op34: "",
    a3: "",
    q4: "",
    op41: "",
    op42: "",
    op43: "",
    op44: "",
    a4: "",
    q5: "",
    op51: "",
    op52: "",
    op53: "",
    op54: "",
    a5: "",
  });

  let history = useHistory();
  const {
    qBankId,
    title,
    q1,
    op11,
    op12,
    op13,
    op14,
    a1,
    q2,
    op21,
    op22,
    op23,
    op24,
    a2,
    q3,
    op31,
    op32,
    op33,
    op34,
    a3,
    q4,
    op41,
    op42,
    op43,
    op44,
    a4,
    q5,
    op51,
    op52,
    op53,
    op54,
    a5,
  } = exam;

  const loadExam = async () => {
    const result = await axios.get(
      "http://localhost:8500/exam-service/getbyid/" + id
    );
    setExam(result.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.delete("http://localhost:9000/admin-service/exam/" + id);
    history.push("/");
  };

  useEffect(() => {
    loadExam();
  }, []);
  return (
    <div>
      <br/>
      <hr/>
      <br/>
      <form onSubmit={handleSubmit}>
      <Typography component="div" variant="h3" textAlign="center">
      QUESTION BANK
      </Typography>
      <Typography component="div">
      <Box variant="h5"  textAlign="justify" m={1}>
      Q1. {exam.q1}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op11}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op12}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op13}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op14}
      </Box>
      <Box textAlign="left" m={1}>
      Answer-{exam.a1}
      </Box>
      <br/>
      <Box variant="h5" textAlign="justify" m={1}>
      Q2. {exam.q2}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op21}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op22}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op23}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op24}
      </Box>
      <Box textAlign="left" m={1}>
      Answer 1. {exam.a2}
      </Box>
      <br/>
      <Box variant="h5" textAlign="justify" m={1}>
      Q3. {exam.q3}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op31}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op32}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op33}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op34}
      </Box>
      <Box textAlign="left" m={1}>
      Answer-{exam.a3}
      </Box>
      <br/>
      <Box  variant="h5" textAlign="justify" m={1}>
      Q4.  {exam.q4}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op41}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op42}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op43}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op44}
      </Box>
      <Box textAlign="left" m={1}>
      Answer-{exam.a4}
      </Box>
      <br/>
      <Box variant="h5" textAlign="justify" m={1}>
      Q5. {exam.q5}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op51}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op52}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op53}
      </Box>
      <Box textAlign="left" m={1}>
      {exam.op54}
      </Box>
      <Box textAlign="left" m={1}>
      Answer-{exam.a5}
      </Box>
    </Typography>
    <br/>
        
    <Button variant="contained" color="primary" type="submit">Delete Exam</Button>
      </form>
    </div>
  );
};
export default DeleteExam;
