import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

export default function ManageUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(
      "http://localhost:8600/user-service/showalluser"
    );
    setUsers(response.data);
  };
  const classes = useStyles();

  return (
    <div>
      <br/>
      <br/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Name</StyledTableCell>
            <StyledTableCell align="right">Action-View</StyledTableCell>
            <StyledTableCell align="right">Action-Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
              {users.map((user, index) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
              {user.name}
              </StyledTableCell>
              
              <StyledTableCell align="right">
              <Link
                  className="btn btn-primary mr-2"
                  to={"/users/view/" + user.userId}
                >
                  View
                </Link>
              </StyledTableCell>
              <StyledTableCell align="right"><Link
                  className="btn btn-danger mr-2"
                  to={"/users/delete/" + user.userId}
                >
                  Delete
                </Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
