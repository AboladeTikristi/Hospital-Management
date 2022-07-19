import { Box, Grid, styled, Typography } from '@mui/material'
import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import hero from '../assets/d3.jpg'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MedicationIcon from '@mui/icons-material/Medication';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {PresentPatient} from '../actions/index'
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

const LeftBar = () => {
    let reduxState=useSelector(state=>state)
    let reduxPat=useSelector(state=>state.users.PresentPatient)
    const [userDetails, setuserDetails] = useState(reduxPat)
    return (
        <>
            <Grid container sx={{ border: 1, borderColor: '#efefef',height:'65rem'}}>
                <Grid item lg={12} sx={{ pt: { sm: "1rem", md: '3rem' }, pb: { sm: "1rem", md: '3rem' }, display: 'grid', alignItems: 'center', justifyContent: 'center',position:'fixed',left:'4.7vw' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        {
                            reduxPat.profile_picture==""?
                            // <i class="fa-solid fa-3x fa-hospital-user" sx={{ width: '60px', height: '70px', border: 1, borderRadius: '1rem' }}></i>
                            <AccountBoxIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '3.5rem' ,}} />
                            // <Box component='img' src={hero} />
                            :<Box component='img' src={hero} sx={{ width: '60px', height: '70px', border: 1, borderRadius: '1rem' }}/>
                        }
                        </Box>
                    <Typography variant="body1" color="initial" sx={{ display: 'flex', justifyContent: 'center', width: '100%', fontWeight: 500, fontSize: { sm: '1rem', md: '1.5rem' }, mt: { sm: '.5rem', md: '1rem' } }}>
                        {reduxPat.firstname} {reduxPat.lastname}
                    </Typography>
                    <Typography variant="body1" color="initial" sx={{ display: 'flex', justifyContent: 'center', width: '100%', fontWeight: 500, fontSize: { sm: '1rem', md: '1.1rem' } }}>
                        Patient
                    </Typography>
                </Grid>
                <Grid item lg={12} sx={{pl:2,pr:2, position:'fixed',top:'36vh',width:'18%'}}>
                    <Typography variant="body1" color="initial" sx={{ fontWeight: 500, fontSize: { sm: '1rem', md: '1.4rem' },ml:2 }}>
                        Main
                    </Typography>
                    <Mystyle to="/patdashboard" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <DashboardCustomizeIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Dashboard</LI>
                    </Mystyle>
                    <Mystyle to="/patappointments" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <LibraryBooksIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Appointments</LI>
                        <Select
                            // labelId="demo-simple-select-label"
                            // id="demo-simple-select"
                            placeholder='Appointments'
                            // value={age}
                            // label="Age"
                            // onChange={handleChange}
                         >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <MedicationIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Prescription</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <HistoryIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Medical Record</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <AccountBalanceWalletIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Billing</LI>
                    </Mystyle>
                    <Mystyle to="/chat" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <ChatIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Chat</LI>
                    </Mystyle>
                    <Mystyle to="/patsettings" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <SettingsIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Settings</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <LogoutIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem'}}>Logout</LI>
                    </Mystyle>
                </Grid>
            </Grid>
        </>
    )
}

export default LeftBar