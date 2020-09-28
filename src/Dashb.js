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
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from './SignIn';

import { Dashboard } from '@material-ui/icons';

function Dashb() {
  return (
    <React.Fragment>
      
      
      <ProductHero />
      <br/>
      <br/>
      <br/>
      
      <ProductValues />
      
      
      
      
      
      {/*<AppFooter />*/}
    </React.Fragment>
  );
}

export default Dashb;