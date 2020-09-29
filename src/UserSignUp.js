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
import axios from 'axios';
import AppForm from './modules/views/AppForm';
import Button from '@material-ui/core/Button';
import { Alert } from 'react-bootstrap';
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

export default function UserSignUp() {
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
  //const [status, setStatus] = useState(true);
  const classes = useStyles();
  let demo;

  const [userinfo, setUserinfo] = useState({
    userId: "",
    name: "",
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    useridError: "",
    })


  const { userId, name, email, password } = userinfo;

  

  const handleChange = (event) => {
    setUserinfo({...userinfo, [event.target.name]: event.target.value});
}

  function validateForm() {
    if(name.length>0 && password.length==6 )
    return 1;
    
  }

 const validate = () =>{
  let emailError="";
 // let passwordError: "",
  //let  useridError: "",

     if(userinfo.email.includes('@')){
        emailError = 'invalid email';
     }

     if(emailError) {
       setUserinfo({emailError});
       return false;
     }

     return true;
          
  };
   function validateuser() {
    if(userId.length===0)
        {
          return null
        }
        
        else if(userId.length<3)
        {
          return("UserId must be 3 digits long");
        }
        
    
  }
function validatepassword(){
    
    if(password.length===0 )
    {
      return null
    }
    
    else if(password.length<6 )
    {
      return("Password must be 6 chars long")
    }
  }
 function validatepass(){
   if(email.length===0)
        {
          return null
        }
        
    
    if(email.includes('@'))
    {
      return null
    }
    
    else if(!email.includes('@') )
    {
      return("Not a valid email")
    }
  }

 


  const handleSubmit = async (event) => {
    event.preventDefault();
//  const isValid = validate();
//  if(isValid)
 // console.log(userinfo);
    const user = {
        userId: userId,
        email: email,
        name: name,
        password: password,
    };

    axios.post("http://localhost:8600/user-service/user", user)
       .then(response => {
           if(response.data != null){
                history.push('/userSignin');
               alert("USER REGISTRATION SUCCESS!!!")
           }
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
            User Registration
          </Typography>
        </React.Fragment>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userId"
            label="UserId"
            value={userId}
            name="userId"
            onChange={handleChange}
          />
          <div style={{ fontSize: 11, color: "red"}}>
            {validateuser()}
            </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="FirstName"
            value={name}
            name="name"
            onChange={handleChange}
        />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <div style={{ fontSize: 11, color: "red"}}>
            {validatepass()}
            </div>
         {/* <div style={{ fontSize: 12, color: "red"}}>
            {userinfo.emailError}
          </div>
          */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            autoComplete="current-password"
            onChange={handleChange}
          />
         <div style={{ fontSize: 11, color: "red"}}>
            {validatepassword()}
            </div>
          <FormButton
            type="submit"
            className={classes.button}
            //disabled={!validateForm()}
            size="large"
            color="secondary"
            fullWidth
          >
            Sign Up
              </FormButton>
        </form>
        


        <Typography align="center">
          <Link underline="always" href="http://localhost:3000/">
            BACK
          </Link>
        </Typography>
      </AppForm>
      

    </React.Fragment>


  );
}