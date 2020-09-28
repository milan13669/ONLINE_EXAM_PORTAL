import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
const EditExam = () => {
  const classes = useStyles();
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

  const handleChange = (event) => {
    setExam({ ...exam, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:9000/admin-service/exam", exam);
    history.push("/");
  };

  const loadExam = async () => {
    const result = await axios.get(
      "http://localhost:8500/exam-service/getbyid/" + id
    );
    setExam(result.data);
  };

  useEffect(() => {
    loadExam();
  }, []);
  return (
    <div>
      <hr/>
      <br/>
      <Typography component="div" variant="h3" textAlign="center">
      EDIT QUESTION BANK
      </Typography>
      <br/>
      <br/>
      <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
          type="text"
          name="qBankId"
          value={qBankId}
          onChange={handleChange}
          label="Question Bank ID"
          variant="outlined"
        />
        <TextField
          type="text"
          name="title"
          value={title} 
          onChange={handleChange}
          label="Exam Title"
          variant="outlined"
        />
        </div>
        <div>
        <TextField
          type="text"
          name="q1"
          value={q1}
          onChange={handleChange}
          label="Question-1"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op11" 
           value={op11} 
           onChange={handleChange} 
          label="Option 1"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op12" 
           value={op12} 
           onChange={handleChange} 
          label="Option 2"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op13" 
           value={op13} 
           onChange={handleChange} 
          label="Option 3"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op14" 
           value={op14} 
           onChange={handleChange} 
          label="Option 4"
          variant="outlined"
        />
        <TextField
          type="text"
           name="a1" 
           value={a1} 
           onChange={handleChange} 
          label="Answer 1"
          variant="outlined"
        />
        </div>
        <br/>
        <div>
        <TextField
          type="text"
          name="q2"
          value={q2}
          onChange={handleChange}
          label="Question-2"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op21" 
           value={op21} 
           onChange={handleChange} 
          label="Option 1"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op22" 
           value={op22} 
           onChange={handleChange} 
          label="Option 2"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op23" 
           value={op23} 
           onChange={handleChange} 
          label="Option 3"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op24" 
           value={op24} 
           onChange={handleChange} 
          label="Option 4"
          variant="outlined"
        />
        <TextField
          type="text"
           name="a2" 
           value={a2} 
           onChange={handleChange} 
          label="Answer 2"
          variant="outlined"
        />
        </div>
        <br/>
        <div>
        <TextField
          type="text"
          name="q3"
          value={q3}
          onChange={handleChange}
          label="Question-3"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op31" 
           value={op31} 
           onChange={handleChange} 
          label="Option 1"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op32" 
           value={op32} 
           onChange={handleChange} 
          label="Option 2"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op33" 
           value={op33} 
           onChange={handleChange} 
          label="Option 3"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op34" 
           value={op34} 
           onChange={handleChange} 
          label="Option 4"
          variant="outlined"
        />
        <TextField
          type="text"
           name="a3" 
           value={a3} 
           onChange={handleChange} 
          label="Answer 3"
          variant="outlined"
        />
        </div>
        <br/>
        <div>
        <TextField
          type="text"
          name="q4"
          value={q4}
          onChange={handleChange}
          label="Question-4"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op41" 
           value={op41} 
           onChange={handleChange} 
          label="Option 1"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op42" 
           value={op42} 
           onChange={handleChange} 
          label="Option 2"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op43" 
           value={op43} 
           onChange={handleChange} 
          label="Option 3"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op44" 
           value={op44} 
           onChange={handleChange} 
          label="Option 4"
          variant="outlined"
        />
        <TextField
          type="text"
           name="a4" 
           value={a4} 
           onChange={handleChange} 
          label="Answer 4"
          variant="outlined"
        />
        </div>
        <br/>
        <div>
        <TextField
          type="text"
          name="q5"
          value={q5}
          onChange={handleChange}
          label="Question-5"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op51" 
           value={op51} 
           onChange={handleChange} 
          label="Option 1"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op52" 
           value={op52} 
           onChange={handleChange} 
          label="Option 2"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op53" 
           value={op53} 
           onChange={handleChange} 
          label="Option 3"
          variant="outlined"
        />
        <TextField
          type="text"
           name="op54" 
           value={op54} 
           onChange={handleChange} 
          label="Option 4"
          variant="outlined"
        />
        <TextField
          type="text"
           name="a5" 
           value={a5} 
           onChange={handleChange} 
          label="Answer 5"
          variant="outlined"
        />
        </div>
        <br/>
        
        
        <Button variant="contained" color="primary" type="submit">Edit Exam</Button>
      </form>
    </div>
  );
};
export default EditExam;
