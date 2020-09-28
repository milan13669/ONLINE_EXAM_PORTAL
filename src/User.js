import Axios from 'axios'
import  React, { Component }  from 'react'
import withRoot from './modules/withRoot';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
// --- Post bootstrap -----
import { Field } from 'react-final-form';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import { NavLink } from "react-router-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './NavigationBar';
import LoginPage from "./LoginPage.js";
import AttemptExam from "./AttemptExam";
import Scores from "./Scores";
import Dashboard from "./Dashboard";
import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';






class User extends Component{
    constructor(props){
        super(props)

        this.state={
            posts: []
        }
    
    }

    
    componentDidMount(){
      const username  = this.props.location.username;
      Axios.get('http://localhost:8600/user-service/userbyid/'+username)
      .then(response => {
          this.setState({ posts : response.data })
          console.log(response);
          console.log(username);
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
             <Navbar   collapseOnSelect expand="lg" bg="light">
            <Avatar src="https://www.w3schools.com/w3images/avatar2.png" />
  <Navbar.Brand href="#">{posts ? <div>{posts.name}</div>: null}</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link href="#pricing">{posts ? <div>User ID:{posts.userId}</div> : null}</Nav.Link>
      <Nav.Link href="#pricing">{posts ? <div>EMAIL:{posts.email}</div> : null}</Nav.Link>
      
        
    </Nav>
    <Nav>
      <Nav.Link href="http://localhost:3000/">LOGOUT</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

    
          
            
            
       
        <br/>
        <Router>
        <NavBar />
        <Route exact path="/dashboard/:id" ><Dashboard title={this.props.location.username} /></Route>
        {/*<Route exact path="/dashboard/:id"  component={() => <Dashboard title={this.props.location.username} />} />*/}
        <Route exact path="/attemptexam/:id/exam/:qid" component={AttemptExam}/>
        <Route exact path="/scores/:id"><Scores title={this.props.location.username} /></Route>
      </Router>
    
    <br/>
    <br/>
        </div>
        );
      }
    }

export default User;



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


