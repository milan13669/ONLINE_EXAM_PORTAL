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

export default function AdminSignUp() {
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
  //const [status, setStatus] = useState(true);
  const classes = useStyles();
  let demo;

  const [admininfo, setAdmininfo] = useState({
    adminId: "",
    adminName: "",
    adminPin: "",
    adminPhone: "",
    })


  const { adminId, adminName, adminPin, adminPhone } = admininfo;

  

  const handleChange = (event) => {
    setAdmininfo({...admininfo, [event.target.name]: event.target.value});
}

  function validateForm() {
    if(adminName.length>0 && adminPin.length==6 )
    return 1;
    
  }

  function validateuser() {
    if(adminId.length===0)
        {
          return null
        }
        
        else if(adminId.length<3)
        {
          return("UserId must be 3 digits long");
        }
        
    
  }
function validatepassword(){
    
    if(adminPin.length===0 )
    {
      return null
    }
    
    else if(adminPin.length<6 )
    {
      return("Password must be 6 chars long")
    }
  }
 function validatepass(){
   if(adminPhone.length===0)
        {
          return null
        }
        
    
    else if(adminPhone.length<10)
    {
      return("Not a valid Number")
    }
    
    
  }

 

 


  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
        adminId: adminId,
        adminName: adminName,
        adminPin: adminPin,
        adminPhone: adminPhone,
    };

    axios.post("http://localhost:9000/admin-service/admin", user)
       .then(response => {
           if(response.data != null){
                history.push('/Signin');
               alert("ADMIN REGISTRATION SUCCESS!!!")
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
            Admin Registration
          </Typography>
        </React.Fragment>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="adminId"
            label="AdminId"
            value={adminId}
            name="adminId"
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
            id="adminname"
            label="Admin Name"
            value={adminName}
            name="adminName"
            onChange={handleChange}
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="adminpin"
            label="Admin Pin"
            value={adminPin}
            type="password"
            name="adminPin"
            onChange={handleChange}
          />
          <div style={{ fontSize: 11, color: "red"}}>
            {validatepassword()}
            </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="adminPhone"
            label="Admin Phone"
            type="adminPhone"
            id="adminphone"
            value={adminPhone}
            autoComplete="current-password"
            onChange={handleChange}
          />
          <div style={{ fontSize: 11, color: "red"}}>
            {validatepass()}
            </div>
         

          <FormButton
            type="submit"
            className={classes.button}
            disabled={!validateForm()}
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