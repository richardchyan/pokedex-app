import React from 'react';
import { AppBar, Box, CssBaseline, Toolbar, Typography, TextField, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   search: {
      justifyContent: 'space-between',
   }, 
   toolbar: {
      justifyContent: 'space-between',
   }
})

const Navbar = () => {

   const classes = useStyles();

   return ( 
      <React.Fragment>
         <CssBaseline />
         <Box mb={10}> 
            <AppBar >
               <Toolbar className={classes.toolbar}>
                  <Typography gutterBottom>
                     Pokedex
                  </Typography>
                 
               </Toolbar>
            </AppBar>
         </Box>
      </React.Fragment>
    );
}
 
export default Navbar;