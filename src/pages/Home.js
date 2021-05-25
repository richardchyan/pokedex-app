import { Card, Container, Grid, CardContent, Typography } from '@material-ui/core';
import Navbar from '../components/Navbar';
import List from '../components/List';
import React, { useState, useEffect } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10'

const Home = () => {

   const [loading, setLoading ] = useState(false);
   const [pokemon, setPokemon] = useState([]);
   
   const fetchPokemon = async() => {

      setLoading(true);

      try {
         
         const response = await fetch(url);
         const data = await response.json();
         const pokemon  = data.results;
         console.log(pokemon);
         setLoading(false);
         setPokemon(pokemon);
      } catch (error) {
         console.log(error);
         setLoading(false);
      }
   }

   useEffect(() => {
      fetchPokemon();
   },[])


   return ( 
      <React.Fragment>
         <Navbar />
         <Container maxWidth="md">
            <Grid container spacing={3}>
               { pokemon ? pokemon.map(pokemon => (
                     <Grid item xs={12} sm={6} md={4}> 
                        <List pokemon={pokemon} key={pokemon.name}/>
                     </Grid>
                  )) : <h1> Loading... </h1>
               }
               {/* {[0,1,2,3,4,5,6,7,8,9,10].map(item=> (
                  <Grid item xs={12} sm={6} md={4}>
                     <Card>
                        <CardContent>
                           <Typography>
                              {item}
                           </Typography>
                        </CardContent>
                     </Card>
                  </Grid>
               ))} */}
               
            </Grid>
         </Container>
         
      </React.Fragment>
    );
}
 
export default Home;