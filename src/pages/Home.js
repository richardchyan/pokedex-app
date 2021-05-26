import { Card, Container, Grid, CardContent, Typography, CircularProgress} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Navbar from '../components/Navbar';
import List from '../components/List';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
const useStyles = makeStyles({

   pagination: {
      maxWidth: '80%',
      margin: '20px',
      padding: '20px',
      textAlign: 'center',
   }
   
})

const Home = () => {

   const [loading, setLoading ] = useState(false);
   const [pokemon, setPokemon] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [cardsPerPage, setCardsPerPage] = useState(12);
   const classes = useStyles();
   
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

   const indexOfLastCard = currentPage * cardsPerPage;
   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
   const currentCards = pokemon.slice(indexOfFirstCard, indexOfLastCard);

   const currentButton = document.getelementby

   const handlePagination = (pageNumber) => {
      setCurrentPage(pageNumber);
   }

   return ( 
      <React.Fragment>
         <Navbar />
         <Container maxWidth="lg">
            <Grid container spacing={3}>
               { pokemon ? currentCards.map((pokemon, index) => (
                     <Grid item xs={12} sm={6} md={4} key={index}> 
                        <List pokemon={pokemon} />
                     </Grid>
                  )) : <CircularProgress />
               }
            </Grid>
            <Pagination 
               className={classes.pagination} 
               count={13} 
               color="primary"
               size="large"
               shape="rounded"
               onClick={e => handlePagination(e.target.innerText)}
            />
         </Container>
        
      </React.Fragment>
    );
}
 
export default Home;