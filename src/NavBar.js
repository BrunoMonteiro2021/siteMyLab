// import React, { useState } from 'react';
// import Typography from '@material-ui/core/Typography';
// import AppBar from '@material-ui/core/AppBar';
// import { makeStyles } from '@material-ui/core/styles';
// import { CssBaseline, Slide, useScrollTrigger, Toolbar, Tabs, Tab, useMediaQuery, useTheme } from '@material-ui/core';
// import PropTypes from 'prop-types';

// import DrawerComponent from './components/DrawerComponent';

// const useStyles = makeStyles((theme) => ({
//   root: {

//   },
//   appBar: {
//     backgroundColor: "primary",
//   },
// }));

// //appbar semifixo
// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   window: PropTypes.func,
// };
// //fim appbar semifixo

// export default function NavBar(props) {
//   const classes = useStyles();
//   const [value, setValue] = useState(0);

//   const handleClickTab = (e, newValue) => {
//     setValue(newValue);
//   }

//   //clique navbar
//   const handleClickHome = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };
//   const handleClickFooter = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#footer');

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   //breakpoints
//   const theme = useTheme();

//   const isMatch = useMediaQuery(theme.breakpoints.down('xs'));

//   return (
//     <div className={classes.root}>
//       <React.Fragment>
//         <CssBaseline />
//         <HideOnScroll {...props}>
//           <AppBar className={classes.appBar} position="fixed">
//             <Toolbar>
//               <Typography variant="h5" color="#fff" >
//                 DevCompilers
//               </Typography>

//               {isMatch ? <DrawerComponent /> : (
//                 <div>
//                   <Tabs onChange={handleClickTab} indicatorColor='secondary' value={value}>
//                     <Tab disableRipple onClick={handleClickHome} label='Home' />
//                     <Tab disableRipple label='Serviços' />
//                     <Tab disableRipple label='Sobre' />
//                     <Tab disableRipple onClick={handleClickFooter} label='Contato' />
//                   </Tabs>
//                 </div>
//               )}

//             </Toolbar>
//           </AppBar>
//         </HideOnScroll>
//       </React.Fragment>
//     </div>
//   );
// }