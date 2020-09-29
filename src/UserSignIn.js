import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { useState } from 'react';
import history from './history';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Field } from 'react-final-form';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import Axios from 'axios';
import AppForm from './modules/views/AppForm';
import Button from '@material-ui/core/Button';
import { Alert } from 'react-bootstrap';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import TextField from '@material-ui/core/TextField';
import Home from './Home';
import Dashb from './Dashb';



const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

const UserSignIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(true);
  const classes = useStyles();
  let demo;
  function validatepass(){
    
    if(password.length===0 )
    {
      return null
    }
    
    else if(password.length<6 )
    {
      return("Password must be 6 character long")
    }
  }
  function validateForm() {
    if(username.length===0)
        {
          return null
        }
        
        else if(username.length<3)
        {
          return("UserId must be 3 digit long");
        }
        
    
  }

  function setIncorrect() {
    setStatus(false);
  }



  function setCorrect() {
    setStatus(true);
  }


 


  async function handleSubmit(event) {
    event.preventDefault()
  
    let user = await Axios.get(
      'http://localhost:8600/user-service/user/check/' +
        username +
        '/' +
        password
    )
      .then(response => {
        demo = response.data
        if (demo == true) {
          props.history.push({
            pathname: '/user',
            username
          });
          
          console.log('####')
          
        } else{
          console.log('not true')
          Functions();
      }
      })
      .catch(error => {
        console.log(error.response.data)
        setIncorrect()
      })
  }

  function Functions() {
    alert("PLEASE ENTER CORRECT CREDENTIALS!!!!!!!!!!")
}

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            User Sign In
          </Typography>
        </React.Fragment>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User-Id"
            name="username"
            autoFocus
            onChange={e => { setUsername(e.target.value); setCorrect() }}
          />
          <div style={{ fontSize: 11, color: "red"}}>
          <Alert severity="error">  {validateForm()}</Alert>
            </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => { setPassword(e.target.value); setCorrect() }}
          />
          <div style={{ fontSize: 11, color: "red"}}>
          <Alert severity="error">  {validatepass()}</Alert>
            </div>
          {(!status) && <Alert severity="error">Incorrect credentials. Please try again</Alert>}

          <FormButton
            type="submit"
            className={classes.button}
            //disabled={!validateForm()}
            size="large"
            color="secondary"
            fullWidth
          >
            Sign In
              </FormButton>
        </form>
        


        <Typography align="center">
          
        </Typography>
      </AppForm>
      

    </React.Fragment>


  );
}

export default UserSignIn;