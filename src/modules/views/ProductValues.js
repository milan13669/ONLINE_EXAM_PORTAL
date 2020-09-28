import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="data:image/png;base64,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"
                alt="java"
              />
              <Typography variant="h6" className={classes.title}>
                JAVA
              </Typography>
              <Typography variant="h5">
                {'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.'},
                {'It is a general-purpose programming language intended to let application developers write once, run anywhere.'},
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="data:image/png;base64,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"
                alt="c++"
              />
              <Typography variant="h6" className={classes.title}>
                C++
              </Typography>
              <Typography variant="h5">
                {'C++ is a cross-platform language that can be used to create high-performance applications.'}

{'C++ was developed by Bjarne Stroustrup, as an extension to the C language.'}
                
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="data:image/png;base64,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"
                alt="react"
              />
              <Typography variant="h6" className={classes.title}>
                React
              </Typography>
              <Typography variant="h5">
                {'React is an open-source JavaScript library for building user interfaces or UI components.'}
                {'It is maintained by Facebook and a community of individual developers and companies.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
