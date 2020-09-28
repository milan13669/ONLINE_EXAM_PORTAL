import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Router, Route, Link } from 'react-router-dom';
import SignIn from './SignIn';
import UserSignIn from './UserSignIn.js';
import Dashb from './Dashb';
import { Dashboard } from '@material-ui/icons';
import history from './history';
import Admin from './Admin';
import User from './User';

function Index() {
  return (
    <React.Fragment>
      
      <Router history={history}>
      <AppAppBar exact path=""/>
      <Route exact path="/" component={Dashb} />
      <Route exact path="/Signin" component={SignIn} />
      <Route exact path="/userSignin" component={UserSignIn} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/user" component={User} />
      </Router>
      
      
      
      
      
      
      {/*<AppFooter />*/}
    </React.Fragment>
  );
}

export default withRoot(Index);