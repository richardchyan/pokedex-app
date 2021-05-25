import React from 'react';
import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@material-ui/core';


const Navbar = () => {
   return ( 
      <React.Fragment>
         <CssBaseline />
         <Box mb={10}> 
            <AppBar >
               <Toolbar>
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