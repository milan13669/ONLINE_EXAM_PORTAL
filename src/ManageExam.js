import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
  export default function ManageExam() {
    const [exams, setExams] = useState([]);
    useEffect(() => {
        getExams();
    }, []);


    const getExams = async () => {
        const response = await axios.get(
            "http://localhost:8500/exam-service/showexam"
        );
        setExams(response.data);
    };

    function myFunction() {
        alert("Question Bank will be deleted!")
    }
    
    const classes = useStyles();
  
    return (
      <div>
        <br/>
        <br/>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>QUESTION BANK</StyledTableCell>
              <StyledTableCell align="right">View</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
                   {exams.map((exam, index) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                {exam.title}
                </StyledTableCell>
                
                <StyledTableCell align="right">
                <Link
                  className="btn btn-primary mr-2"
                  to={"/exams/view/" + exam.qBankId}
                >
                  View
                </Link>
                            
                </StyledTableCell>
                <StyledTableCell align="right">
                <Link
                  className="btn btn-outline-primary mr-2"
                  to={"/exams/edit/" + exam.qBankId}
                >
                  Edit
                </Link>
                </StyledTableCell>
                <StyledTableCell align="right">
                <Link
                  className="btn btn-danger mr-2"
                  to={"/exams/delete/" + exam.qBankId}
                >
                  Delete
                </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Link to={"/exams/add"}>
        
      <Button variant="contained" color="primary">
        ADD EXAM
      </Button>
      </Link>
      </TableContainer>
      </div>
    );
  }