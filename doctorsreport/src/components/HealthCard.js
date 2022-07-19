import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import blood from '../assets/blood.png'
import bloodpressure from '../assets/bloodpressure.png'
import bloodcount from '../assets/bloodcount.jpg'
import glucoselevel from '../assets/glucoselevel.png'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const HealthCard = ({Parameter,Amount,img}) => {
    return (
        <>
         
                    <Grid container>
                        <Grid item xs={3} sm={12} lg={3} sx={{ display:{sm:'flex'}, justifyContent: 'center' }}>
                            {
                                img=="blood"?
                                <Box component='img' src={blood} alt='' sx={{ width: '5rem', height: '6rem' }} />:
                                img=="bloodpressure"?
                                <Box component='img' src={bloodpressure} alt='' sx={{ width: '5rem', height: '6rem' }} />:
                                img=="glucoselevel"?
                                <Box component='img' src={glucoselevel} alt='' sx={{ width: '5rem', height: '6rem' }} />:
                                img=="bloodcount"?
                                <Box component='img' src={bloodcount} alt='' sx={{ width: '5rem', height: '6rem' }} />:
                                ''
                            }
                            
                        </Grid>
                        <Grid item xs={9} sm={12} lg={9} sx={{mt:{sm:1,md:1,lg:0}}}>
                        <Box >
                                <Typography variant="h5" color="initial" sx={{display:{xs:'flex',sm:'grid'},justifyContent:{xs:'end',sm:'center',lg:'end'}, fontSize: '1.8rem', fontWeight: 500 }}>
                                  {Parameter}
                                </Typography>
                                <Typography variant="h5" color="initial" sx={{display:{xs:'flex',sm:'grid'},justifyContent:{xs:'end',sm:'center',lg:'end'}, fontSize: '2.5rem', fontWeight: 500, color:'rgb(26,118,66)' }}>
                                   {Amount}
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