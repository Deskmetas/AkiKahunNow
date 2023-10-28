import { Grid } from '@mui/material'
import React from 'react'
import Cardbody from './Cardbody'

const centerStyle = {
    display: 'grid',
    placeItems: 'center',
  };

function Card() {
    return (
            <Grid style={centerStyle}> 
                <Cardbody />
            </Grid>
    );
  }
  
  export default Card;
  