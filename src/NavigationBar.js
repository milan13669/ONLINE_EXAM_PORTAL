import React, { Component } from "react";
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

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

const NavigationBar = () => {
  const classes = useStyles();
  return (
  <div>
    <br/>
      <br/>
    <div style={{display: 'flex',flexdirection: 'row'}} >
      <br/>
      <br/>
      <div style={{paddingLeft:'320px'}}>
      <div class="card"  style={{width: '18rem'}}>
      <img class="bd-placeholder-img card-img-top" width="100%" height="180" alt="user" src="data:image/png;base64,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"  />

  <div class="card-body">
    <h5 class="card-title">EXAM</h5>
    <p class="card-text">A quick way to attempt an exam but once you attempt an exam,you can't attempt it Again.</p>
    <Button>
    <Link class="nav-link" to="/dashboard/2">
               Attempt Exam
            </Link>
            </Button>
            </div>
  </div>
  <br/>
  <br/>
  
</div>
<div style={{paddingLeft:'30px'}}>
<div class="card" style={{width: '18rem'}}>
  <img class="bd-placeholder-img card-img-top" width="100%" height="180" alt="user" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/progress-report-2-772075.png"  />

  <div class="card-body">
    <h5 class="card-title">PROGRESS</h5>
    <p class="card-text">A quick way to see your scores for all exams you have attempted with correct answers.</p>
    <Button>
            <Link class="nav-link" to="/scores/2">
              Progress Report
            </Link>
            </Button>
            </div>
  </div>
  
</div>
  </div>
    
      
            {/*<Button><a href="http://localhost:3000/">LOGOUT</a></Button>*/}
            
    </div>
    
  );
};

export default NavigationBar;
