import { Card, Container, Grid, CardContent, Typography, CircularProgress, TextField} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Navbar from '../components/Navbar';
import List from '../components/List';
import React, { useState, useEffect } from 'react';
import { makeStyles, fade} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
const useStyles = makeStyles(theme => ({

   pagination: {
      maxWidth: '80%',
      padding: '20px',
   },
   pageControls: {
      marginBottom: '30px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   }
}));

const Home = () => {

   const [loading, setLoading ] = useState(false);
   const [pokemon, setPokemon] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [cardsPerPage, setCardsPerPage] = useState(12);
   const classes = useStyles();
   const [filter, setFilter] = useState('');
   
   const fetchPokemon = async() => {

      setLoading(true);

      try {
         
         const response = await fetch(url);
         const data = await response.json();
         const pokemon  = data.results;
         setLoading(false);
         setPokemon(pokemon);
      } catch (error) {
         console.log(error);
         setLoading(false);
      }
   }

   const handleSearch = (search) => {
      setFilter(search);
   }

   useEffect(() => {
      fetchPokemon();
   },[])

   const indexOfLastCard = currentPage * cardsPerPage;
   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
   const currentCards = pokemon.slice(indexOfFirstCard, indexOfLastCard);

   const handlePagination = (value) => {
      if(value !== currentPage){
         setCurrentPage(value);
      }
   }

   if(loading){
      return <CircularProgress />
   }

   return ( 
      <React.Fragment>
         <Navbar />
         <Container maxWidth="lg" className={classes.pageControls}>
            <Pagination 
               className={classes.pagination} 
               count={13} 
               color="primary"
               size="large"
               shape="rounded"
               hidePrevButton
               hideNextButton
               onChange={(e) => handlePagination(e.target.innerText)}
            />
            <TextField
                  variant="outlined"
                  label="Search Pokemon"
                  onChange={(e) => handleSearch(e.target.value)}
            />
         </Container>
         <Container maxWidth="lg">
            <Grid container spacing={3}>
               { pokemon ? currentCards.map((pokemonCard, index) => (
                     pokemon[index].name.includes(filter) &&
                     <Grid item xs={12} sm={6} md={3} key={index}> 
                        <List pokemon={pokemonCard} />
                     </Grid>
                  )) : <CircularProgress />
               }
            </Grid>
         </Container>
        
      </React.Fragment>
    );
   }
 
export default Home;