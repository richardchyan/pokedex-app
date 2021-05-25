import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({

   image: {
      maxWidth : '80%',
      margin: '0 auto',
   }
})


const List = ({ pokemon }) => {

   const { name, url } = pokemon;
   const pokemonIndex = url.split('/')[6];
   console.log(pokemonIndex);
   const classes = useStyles();

   const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

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
                  {name}
               </Typography>
               <Typography>
                  {pokemonIndex}
               </Typography>
            </CardContent>
         </Card>
      </React.Fragment>
    );
}
 
export default List;