import { React, useState } from 'react'
import { IconButton, SwipeableDrawer,Typography, Box,Grid, styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/medicallogo.png'
import { NavLink } from 'react-router-dom'
import hero from '../assets/d3.jpg'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MedicationIcon from '@mui/icons-material/Medication';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const LI = styled('li')({
    listStyleType: 'none',
    width:'100%'
})
const Mystyle = styled(NavLink)({
    backgroundColor:'white',
    "&:hover":{
        backgroundColor: 'rgb(237, 240, 250)',
        borderLeft: 'thick solid ',
    },
    borderRadius:'1rem',
})

const Drawer = ({none}) => {
  const [open, setopen] = useState(false)
  return (
    <>
      <IconButton edge='start' aria-label='open drawer' onClick={() => setopen(true)} sx={{display:{xs:'block',lg:'none'}}}>
        <MenuIcon sx={{fontSize:'3rem',display:{xs:none,sm:'block',lg:'none'}}} />
      </IconButton>
      <SwipeableDrawer anchor='left' open={open} onClose={() => setopen(false)} onOpen={() => { }} sx={{ backgroundColor: 'white',width:{sm:'30%',lg:'18%'}}}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',paddingTop:'1rem' }}>
          <Box component='img' src={logo} sx={{ width: { xs: '50px', md: '60px',marginLeft:'7rem' } }} />
          <Typography variant="h3" color="initial" sx={{ fontSize: { xs:'1.5rem',sm: '1rem', md: '2rem', color: '#0066CC' }, fontWeight: 500,mr:'9rem' }}>
            Medicare
          </Typography>
        </Box>
        <Grid container sx={{ border: 1, borderColor: '#efefef',height:'65rem',width:'100%'}}>
                <Grid item lg={12} sx={{ pt: { xs: "3rem", md: '3rem' }, pb: { xs: "3rem", md: '3rem' }, display: 'grid', alignItems: 'center', justifyContent: 'center',position:'fixed',left:{xs:'9rem',sm:'11vw',lg:'6.7vw'} }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <Box component='img' src={hero} sx={{ width: '60px', height: '70px', border: 1, borderRadius: '1rem' }} />
                    </Box>
                    <Typography variant="body1" color="initial" sx={{ display: 'flex', justifyContent: 'center', width: '100%', fontWeight: 500, fontSize: { sm: '1rem', md: '1.5rem' }, mt: { sm: '.5rem', md: '1rem' } }}>
                        Ella Jones
                    </Typography>
                    <Typography variant="body1" color="initial" sx={{ display: 'flex', justifyContent: 'center', width: '100%', fontWeight: 500, fontSize: { sm: '1rem', md: '1.1rem' } }}>
                        Patient
                    </Typography>
                </Grid>
                <Grid item lg={12} sx={{pl:2,pr:2, position:'fixed',top:{xs:'20rem',sm:'20vh',md:'18vh',lg:'36vh'},width:{sm:'30%',lg:'18%'}}}>
                    <Typography variant="body1" color="initial" sx={{ fontWeight: 500, fontSize: { sm: '1rem', md: '1.4rem' },ml:2 }}>
                        Main
                    </Typography>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <DashboardCustomizeIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Dashboard</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <LibraryBooksIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Appointments</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <MedicationIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Prescription</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center'}} sx={{mt:1.3}}>
                        <HistoryIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Medical Record</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <AccountBalanceWalletIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Billing</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <ChatIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Chat</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <SettingsIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Settings</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <LogoutIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem'}}>Logout</LI>
                    </Mystyle>
                </Grid>
            </Grid>
      </SwipeableDrawer>
    </>
  )
}

export default Drawer