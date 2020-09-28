import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


  const useStyles = makeStyles({
    table: {
      minWidth: 350,
    },
  });

export default function Dashboard(props) {
    console.log(props);
    const  used = props.title;
    console.log(used);
    const classes = useStyles();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    userId: 0,
  });

  const [exams, setExam] = useState([]);
  useEffect(() => {
    getExams();
  }, []);

  const getExams = async () => {
    const response = await axios.get(
      "http://localhost:8500/exam-service/showexam"
    );
    setExam(response.data);
  };

  const { userId, name, email } = user;

  const loadUser = async () => {
    const result = await axios.get(
      "http://localhost:8600/user-service/userbyid/" + used
    );
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div align="center">
        <br/>
        <hr/>
        <br/>
      <h2><b>ATTEMPT EXAMS</b></h2>
      <br/>
      <br/>
     <table class="table-striped table-dark" cellpadding="6" cellspacing="6" border="3">
       <thead class="thead-dark">
     <tbody border="4">
       <tr>
         <th><h5><b>TOPIC</b></h5></th>
         <th align="center"><h5><b>ACTION</b></h5></th>
       </tr>
       {exams.map((exam, index) => (
       <tr>
         <td>{exam.title}</td>
         <td align="right"><Button><Link to={`/attemptexam/${used}/exam/${exam.qBankId}`} >Attempt</Link></Button></td>
       </tr>
        ))}
        </tbody>
        </thead>
     </table>
                    {/*
      <table class="table table-dark">
  <thead>
    <tr>
      <th  aligntext="center">TOPIC</th>
      <th  aligntext="center">ACTION</th>
      
    </tr>
  </thead>
  <tbody>
  {exams.map((exam, index) => (
    <tr>
      <th aligntext="center">{exam.title}</th>
      <th  aligntext="center"><Link class="btn btn-primary mr-5" to={`/attemptexam/${used}/exam/${exam.qBankId}`} >Attempt</Link></th>
      
    </tr>
    
      ))}
     
  </tbody>
</table>
  */}
{/*
      <TableContainer style={{width: 350}} component={Paper}>
        <Table style={{ width: 300 }} className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>TOPIC</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
                   {exams.map((exam, index) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                {exam.title}
                </StyledTableCell>
                
                <StyledTableCell component="th" scope="row" align="right">
                <Link class="btn btn-primary mr-5" to={`/attemptexam/${used}/exam/${exam.qBankId}`} >Attempt</Link>
                </StyledTableCell>
                </StyledTableRow>
                ))}
                </TableBody>
                  </Table>
                </TableContainer>
     
        
                   */}
    </div>
  );
}
