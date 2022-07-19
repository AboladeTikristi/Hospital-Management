import React,{useState} from 'react'
import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {PresentPatient} from '../actions/index'
import logo from '../assets/medicallogo.png'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Drawer from './Drawer';

const PatientsNavbar = () => {
    let reduxState=useSelector(state=>state)
    let reduxPat=useSelector(state=>state.users.PresentPatient)
    const [userDetails, setuserDetails] = useState(reduxPat)
    return (
        <>
            <AppBar sx={{ backgroundColor: 'white' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{display: { xs: 'none', sm: 'flex',justifyContent:'space-between',width:'100%' }}}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Box component='img' src={logo} sx={{ width: { sm: '50px', md: '60px' } }} />
                        <Typography variant="h3" color="initial" sx={{ fontSize: {sm: '1rem', md: '2rem', color: '#0066CC' }, fontWeight: 500 }}>
                            Medicare
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: "center" }}>
                        <DocumentScannerIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem', mr: { sm: '3rem', md: '2rem' } }} />
                        <NotificationsActiveIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem', mr: { sm: '3rem', md: '2rem' } }} />
                        <LocationOnIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem', mr: { sm: '3rem', md: '2rem' } }} />
                        <Typography variant="body1" color="initial" sx={{ fontWeight: 500, fontSize: { sm: '1rem', md: '1.4rem' }, mr: { sm: '3rem', md: '2rem' } }}>
                            {reduxPat.firstname} {reduxPat.lastname}
                        </Typography>
                        <Avatar />
                    </Box>
                    </Box>
                    
                    <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center',justifyContent:'space-between',width:'100%'}}>
                    <Drawer  />
                        <Box sx={{display:'flex',alignItems: 'center'}}>
                            <Box component='img' src={logo} sx={{ width: { xs: '40px'} }} />
                            <Typography variant="h3" color="initial" sx={{ fontSize: { xs: '2rem',color: '#0066CC' }, fontWeight: 500 }}>
                                Medicare
                            </Typography>
                        </Box>
                       <Avatar/>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default PatientsNavbar