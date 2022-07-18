import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import blood from '../assets/blood.png'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const HealthCard = () => {
    return (
        <>
         
                    <Grid container>
                        <Grid item xs={3} sm={12} lg={3} sx={{ display:{sm:'flex'}, justifyContent: 'center' }}>
                            <Box component='img' src={blood} alt='' sx={{ width: '5rem', height: '6rem' }} />
                        </Grid>
                        <Grid item xs={9} sm={12} lg={9} sx={{mt:{sm:1,md:1,lg:0}}}>
                        <Box >
                                <Typography variant="h5" color="initial" sx={{display:{xs:'flex',sm:'grid'},justifyContent:{xs:'end',sm:'center',lg:'end'}, fontSize: '1.8rem', fontWeight: 500 }}>
                                    Blood Pressure
                                </Typography>
                                <Typography variant="h5" color="initial" sx={{display:{xs:'flex',sm:'grid'},justifyContent:{xs:'end',sm:'center',lg:'end'}, fontSize: '2.5rem', fontWeight: 500, color:'rgb(26,118,66)' }}>
                                    100/88
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'start',mt:{xs:1.5,lg:2} }}>
                            <Box sx={{ display: 'flex',alignItems:'center'}}>
                                <TrendingUpIcon />
                                <p style={{fontWeight:600}}>
                                    10% Higher Then Last Month
                                </p>
                            </Box>
                        </Grid>
                        
                    </Grid>
                    
        </>
    )
}

export default HealthCard