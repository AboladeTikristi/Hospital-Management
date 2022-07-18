import React from 'react'
import { Tab, Box, Grid, Avatar, Button, Typography } from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
const MuiTabs = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Grid container sx={{mt:3}}>
                <Grid item xs={11.7} lg={11.6} sx={{border:1, backgroundColor:"white", borderColor:'#efefef'}}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Upcoming Appointments" value="1" sx={{fontWeight:500,fontSize:'1.3rem'}} />
                                <Tab label="Past Appointments" value="2" sx={{fontWeight:500,fontSize:'1.3rem'}} />
                            </TabList>
                        </Box>
                        <TabPanel value="1" className='table-responsive'>

                            <table className='table table-striped'>
                                <tbody>
                                    <tr>
                                        <td style={{display:'flex'}}><Avatar sx={{mr:2}} /><Box sx={{display:'grid'}}><b>Toheeb Ogunleti</b>socialist</Box></td>
                                        <td><Box sx={{display:'grid'}}><b>12 June '20</b>09.00-10.00</Box></td>
                                        <td><Box sx={{display:'grid'}}><b>12 June '20</b>09.00-10.00</Box></td>
                                        <td><Box sx={{display:'grid'}}><b>12 June '20</b>+1 640 235  4780</Box></td>
                                        <td>
                                            <Button variant='text' style={{color:'green'}}><CheckIcon sx={{fontSize:'3rem'}}/></Button>
                                            <Button variant='text' style={{color:'red'}}><ClearIcon sx={{fontSize:'3rem'}}/></Button>
                                        </td>
                                    </tr>
                                    <tr style={{marginBottom:'1rem'}}>
                                        <td style={{display:'flex'}}><Avatar sx={{mr:2}} /><Box sx={{display:'grid'}}><b>Toheeb Ogunleti</b>socialist</Box></td>
                                        <td><Box sx={{display:'grid'}}><b>12 June '20</b>09.00-10.00</Box></td>
                                        <td><Box sx={{display:'grid'}}><b>12 June '20</b>09.00-10.00</Box></td>
                                        <td><Box sx={{display:'grid'}}><b>12 June '20</b>+1 640 235  4780</Box></td>
                                        <td>
                                            <Button variant='text' style={{color:'green'}}><CheckIcon sx={{fontSize:'3rem'}}/></Button>
                                            <Button variant='text' style={{color:'red'}}><ClearIcon sx={{fontSize:'3rem'}}/></Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                    </TabContext>
                </Grid>
                {/* <Grid item sm={6} sx={{ml:3, backgroundColor:'white',p:2}}>
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
                </Grid> */}
            </Grid>
        </>
    )
}

export default MuiTabs