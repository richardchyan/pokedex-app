import { Container } from '@material-ui/core';
import Navbar from '../components/Navbar';
import List from '../components/List';
import React, { useState, useEffect } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=200'

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
         setPokemon(pokemon);
      } catch (error) {
         
      }
   }

   useEffect(() => {
      fetchPokemon();
   },[])

   return ( 
      <React.Fragment>
         <Navbar />
         <List pokemon={pokemon}/>
      </React.Fragment>
      
    );
}
 
export default Home;