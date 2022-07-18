import React from 'react'
import { Typography,Grid } from '@mui/material'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Drawer from './Drawer';

const DashTop = () => {
  return (
   <>
    <Grid container>
        <Grid item xs={12} sx={{height:{xs:'5rem',sm:'8rem',md:'8.5rem'},display:'flex',justifyContent:'start',alignItems:'center'}}>
            <Drawer none={'none'} />
            <Typography variant="h3" color="initial" sx={{fontSize:'2rem',fontWeight:500}}>
                Dashboard
            </Typography>
            <ArrowForwardIosIcon sx={{fontWeight:900}}/>
           <DashboardCustomizeIcon style={{fontWeight:900}}/>
           <ArrowForwardIosIcon sx={{fontSize:'1rem'}}/>
           <Typography variant="h5" color="initial">
                Dashboard
            </Typography>
        </Grid>
    </Grid>
   </>
  )
}

export default DashTop