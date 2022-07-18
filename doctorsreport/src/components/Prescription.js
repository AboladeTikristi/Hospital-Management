import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';

const Prescription = () => {
    return (
        <>
            <Grid container sx={{ mt: 3}}>
                <Grid item xs={12} sm={5.75} md={5.7} lg={5.65} sx={{ height: '35rem', backgroundColor: 'white' ,p:2,mb:{xs:3,sm:0}}}>
                <Typography variant="h5"  sx={{fontWeight:700}}>
                        Reports/Documents
                    </Typography>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',border:1, borderStyle:'dotted',p:1,mt:2}}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <PictureAsPdfIcon sx={{color:'#0066CC',fontSize:'2.5rem',mr:1}}/>
                            <span>Blood Test</span>
                        </div>
                        <div style={{display:'flex',alignItems:'center'}}>
                           <Button size='small' sx={{color:'red'}}><DeleteForeverOutlinedIcon/></Button>
                           <Button size='small' sx={{color:'black'}}><FileDownloadOutlinedIcon/></Button>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5.75} md={5.7} lg={5.65} sx={{ height: '35rem', backgroundColor: 'white',p:2, ml:{ xs: 0, sm: 3 },mt: { xs: 0, md: 0 } }}>
                <Typography variant="h5"  sx={{fontWeight:700}}>
                        Medications
                    </Typography>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',p:1,mt:2}}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <MedicationLiquidIcon sx={{color:'red',fontSize:'2.5rem',mr:1}}/>
                            <span>Econochlor (chloramphenicol-oral)</span>
                        </div>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                           <span>1 - </span>
                           <span>0 - </span>
                           <span>1</span>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Prescription