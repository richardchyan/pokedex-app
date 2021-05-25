import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles'

const imageURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png';

// const useStyles = makeStyles({
//    container: {
//       flexGrow : '2',
//    }
// })




const List = ({ pokemon }) => {

   const { name, url } = pokemon;

   return ( 
      <React.Fragment>
         {/* <Container>
            <Grid container spacing={5} direction="row">
               <Grid item xs={12} sm={6} md={4}> */}
                  <Card>
                     <CardContent>
                        <Typography>
                           {name}
                        </Typography>
                        <Typography>
                           {url}
                        </Typography>
                     </CardContent>
                  </Card>
               {/* </Grid>
            </Grid>
         </Container> */}
         
      </React.Fragment>
    );
}
 
export default List;