import React from 'react';

import { Link } from "react-router-dom";
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

function SignUp() {
  const classes = useStyles();
  return (
    
    <div className={classes.root} align="center">
      <ButtonGroup variant="contained" color="blue" aria-label="contained primary button group">
            <Button>
            <Link class="nav-link" to="/manageexam/:id">
              Manage Exam
            </Link>
            </Button>
            <br/>
            <br/>
            
            <Button>
            <Link class="nav-link" to="/manageuser/:id">
              Manage User
            </Link>
            </Button>
            <Button><a href="http://localhost:3000/">LOGOUT</a></Button>
            </ButtonGroup>
    </div>
  );
}

export default SignUp;
