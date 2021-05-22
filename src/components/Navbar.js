import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


const Navbar = () => {
   return ( 
      <React.Fragment>
         <AppBar>
            <Toolbar>
               <Typography>
                  Pokedex
               </Typography>
            </Toolbar>
         </AppBar>
      </React.Fragment>
    );
}
 
export default Navbar;