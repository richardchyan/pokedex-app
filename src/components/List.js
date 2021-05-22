import React from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@material-ui/core';

const List = ({ pokemon }) => {
   return ( 
      <React.Fragment>
         <Container>
            <Grid container spacing={3} >
               {pokemon.map(pokemon => (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                     <Card>
                        <CardContent>
                           {pokemon.name}
                        </CardContent>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Container>
      </React.Fragment>
    );
}
 
export default List;