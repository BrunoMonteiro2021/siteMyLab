import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import './App.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'© ' + new Date().getFullYear() + ', '}
      <Link color="inherit" href="https://github.com/andreyroberto/site-mylab">
        Dev Compilers,
      </Link>{' '}
      {' todos os direitos reservados.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    border: '1px solid red',
    minWidth: '100%',
    marginBottom: '50px',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  social: {




  },

  //   social:hover: {
  //     color: "#608dfd",
  //     background: "#fff",
  //   },

  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>


      <footer className="rodape"  >
        <Container maxWidth="sm">
          <Link rel="stylesheet" href="https://github.com/CoderHamilton/MyLab">

            <div className="git">
              <GitHubIcon default props />
            </div>
          </Link>

          <div className="copyright">
            <Copyright />
          </div>

        </Container>
      </footer>
    </div >
  );
}