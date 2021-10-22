/* eslint-disable no-undef */
import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Image from './assets/lab.png'
import { Box, Container, Grid, Card, CardMedia, CardActionArea, CardContent, Divider, Zoom, useScrollTrigger, CssBaseline, Fab, ThemeProvider } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PropTypes from 'prop-types';
import {BrowserRouter as Router } from 'react-router-dom';

import Home from './components/home/Home';

import Servicos from './components/servicos/Servicos';
import Sobre from './components/sobre/Sobre';
import Navbar2 from './components/navbar/Navbar2';
import Footer from './components/footer/Footer';
// import Footer from './footer';
 import Banner from './components/banner/banner';
 import Explorar from './components/explorar/Explorar';
 import Objetivos from './components/objetivos/Objetivos';
 import Divisao from './components/divisao/Divisao';
 import Contato from './components/contato/Contato';
 import Footer2 from './components/footer2/footer2';



const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://media-exp1.licdn.com/dms/image/C4E16AQFyL14FnPKs5w/profile-displaybackgroundimage-shrink_350_1400/0/1629848461767?e=1636588800&v=beta&t=k8C_rS-Z_8qYPvknft-pOKZpmFl3gNXdgf7opjSt62w')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 500,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    textAlign: "center"
  },
  blogText: {
    fontWeight: 500,
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
    textAlign: "center"
  },
  card: {
    maxWidth: "100%",
    textAlign: "justify",
  },
  media: {
    height: 240,
  },
  mediaLab: {
    height: 440,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  textMylab: {
    fontSize: "3em",
    textAlign: "center",
    padding: theme.spacing(5),
  },
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),

    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navegacao: {
    fontWeight: 'bold',
    color: "white",
    display: 'row',
    float: 'left',
    justifyContent: 'end',
    alignItems: 'end',
    textAlign: 'end',
  }
}));

//rolar para topo da page
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

//fim da rolagem

function App(props) {
  const classes = useStyles();
  

  return (
    <div className="App">

      <Router>

        <Fragment>
          <Navbar2 />
          <Home />
          <Servicos />
          <Sobre />
          <Banner />
          <Explorar />
          <Objetivos />
          <Divisao />

        </Fragment>

      </Router>

      {/* <ThemeProvider theme={theme}>
      
      </ThemeProvider> */}


      {/* <Box className={classes.hero} id="back-to-top-anchor">
        <Box>Dev Compilers</Box>
      </Box> */}
      <Container maxWidth="lg" className={classes.blogsContainer}>
        {/* <Typography variant="h3" className={classes.blogTitle} >
          Inovação, Crescimento e Resultado
        </Typography> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                {/* <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                  title="Innovation"
                /> */}
                {/* <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Inovação
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Exploramos sempre novas ideias com o objetivo de oferecer para nossos clientes o melhor que a tecnologia pode nos proporcionar.
                  </Typography>
                </CardContent> */}
              </CardActionArea>
              {/* <CardActions className={classes.cardActions}>
              </CardActions> */}
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                {/* <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                  title="Business Growth"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Crescimento
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Processo resultante do trabalho bem desenvolvido por nossos colaboradores que se empenham ao máximo para fornecer a solução ideal para nossos clientes.
                  </Typography>
                </CardContent> */}
              </CardActionArea>
              {/* <CardActions className={classes.cardActions}>
              </CardActions> */}
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              {/* <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80"
                  title="Result"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Resultado
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Efeito de nossas ações. Finalização de um problema. A cada problema que finalizamos, produzimos soluções satisfatórias.
                  </Typography>
                </CardContent>
              </CardActionArea> */}
              {/* <CardActions className={classes.cardActions}>
              </CardActions> */}
            </Card>
          </Grid>
        </Grid>
        {/* <Typography variant="h3" className={classes.blogText} >
          Nosso principal serviço
        </Typography> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaLab}
                  image={Image}
                  title="Lab"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} container>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.textMylab} gutterBottom variant="h4" component="h2">
                  MyLab
                  <Divider />
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  O sistema de Apoio e Gerenciamento para Laboratórios (MyLab) - É uma solução tecnológica para proprietáritos e usuários de laboratórios de escolas, universidades e faculdades.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box pt={5} id="footer">
          <Footer />
        </Box>

        <React.Fragment>
          <CssBaseline />
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </React.Fragment>

      </Container>
      <Router>
        <Fragment>
        <Contato />
        <Footer2 />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
