import Axios from 'axios'
import  React, { Component }  from 'react'
import withRoot from './modules/withRoot';
// --- Post bootstrap -----

import history from './history';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Field } from 'react-final-form';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import { NavLink } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import AppForm from './modules/views/AppForm';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



import { Alert } from 'react-bootstrap';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import TextField from '@material-ui/core/TextField';
import Home from './Home';
//import PersistentDrawer from './PersistentDrawer.js';
import Dashb from './Dashb';

import ViewUser from './ViewUsers';//DONE
import ViewExam from './ViewExams';//DONe
import AddExam from "./AddExam";//DONE
import EditExam from "./EditExam";//DONE
import DeleteExam from "./DeleteExam";//DONE
import NavDash from "./NavDash.js"//DONE
import ManageExam from "./ManageExam";//done
import ManageUser from "./ManageUser";//done
import DeleteUser from "./DeleteUser";//DONE






class Admin extends Component{
    constructor(props){
        super(props)

        this.state={
            posts: []
        }
    
    }

    
    componentDidMount(){
      const username  = this.props.location.username;
      Axios.get('http://localhost:9000/admin-service/admin/'+username)
      .then(response => {
          this.setState({ posts : response.data })
          console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

    render(){
      let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

      const { posts } = this.state
        return(
          <div>
            
    
  
            <Card>
      <CardContent>
        <Typography textAlign="left" variant="h3">{posts ? <div>Welcome,{posts.adminName}</div>: null} </Typography>
        <br/>
        <br/>
        <Typography textAlign="center" variant="h5">{posts ? <div>ADMIN ID:{posts.adminId}</div> : null}</Typography>
        <br/>
        <br/>
        <Typography textAlign="center" variant="h5">{posts ? <div>ADMIN NAME:{posts.adminName}</div> : null}</Typography>
        <br/>
        <br/>
        <Typography textAlign="center" variant="h5">{posts ? <div>PHONE NUMBER:{posts.adminPhone}</div> : null}</Typography>
        <br/>
        
       <Router>
       <NavDash />


       <Route exact path="/manageexam/:id" component={ManageExam} />
        <Route exact path="/exams/view/:id" component={ViewExam} />
        <Route exact path="/exams/edit/:id" component={EditExam} />
        <Route exact path="/exams/delete/:id" component={DeleteExam} />
        <Route exact path="/exams/add" component={AddExam} />
        <Route exact path="/manageuser/:id" component={ManageUser} />
        <Route exact path="/users/view/:id" component={ViewUser} />
        <Route exact path="/users/delete/:id" component={DeleteUser} />




      
       
       </Router>
    {/*<NavLink to="/" activeClassName="active"> LOGOUT</NavLink>*/}
    </CardContent>
    </Card>
        </div>
        
        );
      }
    }

export default Admin;



/*import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router';
import Axios from 'axios';

// YOUR OTHER IMPORT GOES HERE

class Admin extends React.Component {
  constructor(){
    super()
    this.state={
        admins:[]
    }

}
    componentDidMount() {
        console.log(this.props);
        const username  = this.props.location.username;
        Axios.get('http://localhost:9000/admin-service/admin/'+ username)
        .then(response => {
            this.setState({ admins : response.data })
            console.log(response);
        })
    }
    render() {
        const username  = this.props.location.username
        return (
            <div>
                <NavLink to="/" activeClassName="active"> LOGOUT</NavLink>
                <br /><br />
                <Button>hello</Button>
                <h2> Username </h2> {username}
                <h2>List of Admins:</h2>
                <table className="table table-dark table-bordered table-hover">
                    <tr><th>ADMIN ID</th><th>ADMIN NAME</th><th>ADMIN PIN</th><th>ADMIN PHONE</th></tr>
                   <tbody> {this.state.admins.map(admin => <tr><td>{admin.adminId}</td><td key={admin.adminId}>{admin.adminName}</td><td>{admin.adminPhone}</td></tr>)}</tbody></table>
            </div>
        )
    }
}

export default withRouter(Admin);*/


