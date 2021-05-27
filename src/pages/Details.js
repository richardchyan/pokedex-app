import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import {Card, CardContent, CardMedia, Typography, Button, Grid, Container, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

const detailsURL = 'https://pokeapi.co/api/v2/pokemon/';
const useStyles = makeStyles({
   name : {
      fontSize: '3rem',
   }, 
   card: {
      maxWidth: "50%",
      margin: '0 auto',
      marginTop: '50px',
      borderRadius: '5%',
      border: '0.5px solid black',
   },
   sprite: {
      width: '60%',
      margin: '0 auto',
      flexGrow: '1',
   },
   button: {
      marginBottom: '20px',
   }


})

const Details = () => {

   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [pokemon, setPokemon] = useState({});
   const classes = useStyles();
   const history = useHistory();

   useEffect(() => {

      const fetchData = async () => {
         setLoading(true);
         const response = await fetch(`${detailsURL}${id}`);
         const data = await response.json();
         if(data){
            
            setPokemon(data);
            setLoading(false);
         }
      }

      fetchData();
   }, [id])

   const capitalizeName = (name) => {
      if(name){
         return name.charAt(0).toUpperCase() + name.slice(1);
      }
   }

   const { id: number, height, name, weight, sprites, types, game_indices} = pokemon;
   console.log(pokemon.types);

   if(loading){
      return <CircularProgress />
   }

   return (  
      <React.Fragment>
         <Container>
            <Card className={classes.card}>
               <CardContent>
                  {sprites ? (
                     <CardMedia 
                        component="img"
                        image={sprites.front_default}
                        className={classes.sprite}
                     />
                  ): null}
                  <Typography>
                     #{number}
                  </Typography>
                  <Typography className={classes.name} color="primary">
                     {capitalizeName(name)}
                  </Typography>
                  <Typography className={classes.height}>
                     Height: {height}
                  </Typography>
                  <Typography className={classes.weight}>
                     Weight: {weight}
                  </Typography>
                  {/* {types.map(typeDetails => {
                     const { type } = typeDetails;
                     const { name } = type;
                     return <Typography key={name}> Type: {`${name}`} </Typography>
                  })} */}
                  {/* <Typography>
                     {game_indices.version}
                  </Typography> */}
               </CardContent>
               <Button
                  onClick={(e) => history.goBack()}
                  color="secondary"
                  variant="contained"
                  className={classes.button}
               >  
                  Back to home
               </Button>
            </Card>
         </Container>
      </React.Fragment>
   );
}
 
export default Details;