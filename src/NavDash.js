import React from 'react';

import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Navbar } from 'react-bootstrap';
import { Nav, NavDropdown, NavItem } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function SignUp() {
  
  return (
    <div>
      <br/>
      <br/>
    <div style={{display: 'flex',flexdirection: 'row'}} >
      <br/>
      <br/>
      <div style={{paddingLeft:'300px'}}>
      <div class="card"  style={{width: '18rem'}}>
      <img class="bd-placeholder-img card-img-top" width="100%" height="180" alt="user" src="https://www.flaticon.com/svg/static/icons/svg/1642/1642473.svg"  />

  <div class="card-body">
    <h5 class="card-title">EXAM</h5>
    <p class="card-text">A quick way to add exam,edit and delete it.Exams Deleted will no longer be available to user.</p>
    <Button>
            <Link class="nav-link" to="/manageexam/:id">
              Manage Exam
            </Link>
            </Button>
            </div>
  </div>
  <br/>
  <br/>
  
</div>
<div style={{paddingLeft:'30px'}}>
<div class="card" style={{width: '18rem'}}>
  <img class="bd-placeholder-img card-img-top" width="100%" height="180" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3iyWiS5Tu20L5S91HBmKnuRTNT8DffM8MCg&usqp=CAU"  />

  <div class="card-body">
    <h5 class="card-title">USER</h5>
    <p class="card-text">A quick way to see all users and their respective marks and even remove an user if required.</p>
    <Button>
            <Link class="nav-link" to="/manageuser/:id">
              Manage User
            </Link>
            </Button>
            </div>
  </div>
  
</div>
  
    
      
            {/*<Button><a href="http://localhost:3000/">LOGOUT</a></Button>*/}
            
    </div>
    </div>
  );
}

export default SignUp;
