import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserSignUp from '../../UserSignUp';
import AdminSignUp from '../../AdminSignUp';
import User from '../../User';
import { Home } from '@material-ui/icons';

const backgroundImage =
  'https://thumbs.dreamstime.com/z/female-boss-online-conference-meeting-woman-crossed-hands-office-desk-front-laptop-student-teaches-exam-139215819.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your knowledge
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Test Your Skills.
      </Typography>
      <Router>
      <Link to="/signup">
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        User Registeration
      </Button>
      </Link>
      <Switch>
          <Route exact path="/signup">
            <UserSignUp />
          </Route>
          </Switch>
          </Router>
          <br/>
          <Router>
      <Link to="/asignup">
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        Admin Registeration
      </Button>
      </Link>
      <Switch>
          <Route exact path="/asignup">
            <AdminSignUp />
          </Route>
          </Switch>
          </Router>
          
      <Typography variant="body2" color="inherit" className={classes.more}>
        Be Digital
      </Typography>
    </ProductHeroLayout>
  );
}



ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
