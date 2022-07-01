import React from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/material'
import logo from '../assets/medicallogo.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography, Box, InputBase} from '@mui/material';
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Mydiv = styled('div')({
    display: 'flex',
    alignItems: 'center',
})

const LI = styled('li')({
    listStyleType: 'none',
    marginRight: '1rem',
    "&:hover": {
        backgroundColor: 'rgba(128, 128, 128, 0.37)',
    }
})
const SecondBox = styled(Box)({
    // position:'absolute',
    // left:'41vw',
    border: "thin solid gray",
    borderRadius: '10px',
    backgroundColor: '#efefef',
    display: 'flex',
    alignItems: 'center',
    height: '2rem',
})

const Navbar = () => {
  return (
    <>
        <Grid sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', height: '9rem' }} className="nav">
                <Grid container md={3} lg={3}>
                    <Grid item sx={{ display: 'flex' }}>
                        <Box component='img' src={logo} alt='' sx={{ width: '7rem' }} />
                        <Mydiv>
                            <Typography variant="body1" color="initial" sx={{ fontSize: '2rem', color: '#0066CC', fontWeight: 500 }}>
                                Medicare
                            </Typography>
                        </Mydiv>
                    </Grid>
                </Grid>
                <Grid container md={8} lg={8} sx={{ mt: 1, display: 'flex', justifyContent: 'space-between' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon sx={{ fontSize: '6rem', color: '#0066CC', mr: '.5rem' }} />
                        <Typography variant="body2" color="initial" sx={{ fontSize: '1.5rem' }}>
                            Monday-Sunday 00.00  <br />
                            Available 247
                        </Typography>
                    </Box>


                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PhoneIphoneIcon sx={{ fontSize: '6rem', color: '#0066CC', }} />
                        <Typography variant="body2" color="initial" sx={{ fontSize: '1.5rem' }}>
                            +234 -01 77777 <br />
                            office@medicare.com
                        </Typography>
                    </Box>


                    <Mydiv sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOnIcon sx={{ fontSize: '6rem', color: '#0066CC', mr: { md: '.3rem', lg: '.3rem' } }} />
                        <Typography variant="body2" color="initial" sx={{ fontSize: '1.5rem' }}>
                            SQI COLLEGE OF ICT <br />
                            Ogbomos,Oyo
                        </Typography>

                    </Mydiv>
                </Grid>
            </Grid>

            <Grid container sx={{ display: { xs: 'none', md: 'flex' }, height: '6rem', alignItems: 'center', justifyContent: 'center', borderTop: 2, borderColor: '#efefef', backgroundColor: 'white' }} data-spy="affix" data-offset-top="70">
                <Grid item md={6} lg={6} sx={{ display: 'flex' }}>
                    <NavLink to="" style={{ textDecoration: "none", color: 'black' }}><LI sx={{ p: '1.1rem' }}><b >HOME</b></LI></NavLink>
                    <NavLink to="" style={{ textDecoration: "none", color: 'black' }}><LI sx={{ p: '1.1rem' }}><b >ABOUT US</b></LI></NavLink>
                    <NavLink to="" style={{ textDecoration: "none", color: 'black' }}><LI sx={{ p: '1.1rem' }}><b >PAGES</b></LI></NavLink>
                    <NavLink to="" style={{ textDecoration: "none", color: 'black' }}><LI sx={{ p: '1.1rem' }}><b >BLOG/NEWS</b></LI></NavLink>
                </Grid>
                <Grid item md={5} lg={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <SecondBox sx={{ p: 1 }}>
                        <InputBase placeholder='Looking for...' sx={{ width: '20rem', height: "10rem" }} />
                        <SearchIcon style={{ color: 'gray' }} />
                    </SecondBox>
                    <Mydiv sx={{ ml: '7rem' }}>
                        <NavLink to="" style={{ textDecoration: "none", color: 'black' }}><TwitterIcon sx={{ fontSize: '2rem', mr: 2 }} /></NavLink>
                        <NavLink to="" style={{ textDecoration: "none", color: 'black' }}><FacebookIcon sx={{ fontSize: '2rem', mr: 2 }} /></NavLink>
                        <NavLink to="" style={{ textDecoration: "none", color: 'black' }}><LinkedInIcon sx={{ fontSize: '2rem' }} /></NavLink>
                    </Mydiv>
                </Grid>
            </Grid>
    </>
  )
}

export default Navbar