import React from 'react'
import { Grid, Typography } from '@mui/material'

const Canva = () => {
  return (
   <>
   <Grid container sx={{mt:3}}>
       <Grid item xs={12} sm={5.75} md={5.7} lg={5.65} sx={{height:'35rem',backgroundColor:'white',mb:{xs:3,sm:0}}}>
           
       </Grid>
       <Grid item xs={12} sm={5.75} md={5.7} lg={5.65} sx={{height:'35rem',backgroundColor:'white',ml:{xs:0,sm:3},mt:{xs:0,md:0}}}>
          
       </Grid>
   </Grid>
   </>
  )
}

export default Canva