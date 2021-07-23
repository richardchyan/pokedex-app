import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button, Pagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({

   image: {
      maxWidth : '50%',
      margin: '0 auto',
   }, 
   button: {
      marginBottom: '20px',
   }

})

const List = ({ pokemon }) => {

   const { name, url } = pokemon;
   const pokemonIndex = url.split('/')[6];
   // console.log(pokemonIndex);
   const classes = useStyles();
   const history = useHistory();
   const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

   const capitalizeName = (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1);
   }

   return ( 
      <React.Fragment>
         <Card>
            <CardMedia 
               className={classes.image}
               component="img"
               image={imageURL}
            />
            <CardContent>
               <Typography>
                  {capitalizeName(name)}
               </Typography>
               <Typography>
                  {pokemonIndex}
               </Typography>
            </CardContent>
            <Button 
               onClick={() => history.push(`/details/${pokemonIndex}`)}
               className={classes.button}
               color="secondary" 
               variant="contained"
            >
               Pokedex Details
            </Button>
         </Card>
      </React.Fragment>
    );
}
 
export default List;