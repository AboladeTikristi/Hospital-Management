import React from 'react'
import { Grid,Typography,Box,Button } from '@mui/material'
import hero from '../assets/d3.jpg'
import patients from '../assets/patients.png'
import doc from '../assets/doctorlogo.png'
import quote1 from '../assets/quote1.png'
import quote2 from '../assets/quote2.png'
import './Landindpage.css'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Navbar from './Navbar'

const LandingPage = () => {
    return (
        <>
           <Navbar/>
            {/* <Box sx={{ backgroundImage: `url(${hero})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition: 'center',width: '100%',height:{md:'45vh',lg:'100vh'},linearGradient:'(135deg, #50A684 30%, #115E67 90%)'}}>
                
            </Box> */}
            <Box className='imgslider' sx={{ width: '100%', height: { xs: '30rem', sm: '40rem', md: '55rem', lg: '85vh' } }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Grid item sm={6} className='hero'>
                        <Typography variant="h1" color="initial" sx={{ fontWeight: 500 }}>YOU AND</Typography>
                        <Typography variant="h1" color="initial" sx={{ fontWeight: 500, color: '#0066CC' }}>YOUR DOCTOR</Typography>
                        <p style={{ color: 'black' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur
                        </p>
                        <Grid container>
                            <Grid item sm={6} sx={{ display: 'flex', }}>
                                <Box component="img" src={patients} sx={{ width: '50px', height: '50px' }} />
                                <Box sx={{ ml: 2 }}>
                                    <b style={{ color: 'black' }} className='docPat'>FOR PATIENTS</b>
                                    <p>Lorem ipsum dolor sit amet, consec</p>
                                    <Button variant="contained" sx={{ width: '100%', backgroundColor: 'white', mt: 1 }}>
                                        <b style={{ color: 'black' }}>
                                            Login
                                        </b>
                                    </Button>

                                    {/* <i>Already a member, please</i> <button>login</button> */}
                                </Box>
                            </Grid>
                            <Grid item sm={6} sx={{ display: 'flex', }}>
                                <Box component="img" src={doc} sx={{ width: '50px', height: '50px' }} />
                                <Box sx={{ ml: 2 }}>
                                    <b style={{ color: 'black' }} className='docPat'>FOR DOCTORS</b>
                                    <p>Lorem ipsum dolor sit amet, consec</p>
                                    <Button variant="contained" sx={{ width: '100%', backgroundColor: 'white', mt: 1 }}>
                                        <b style={{ color: 'black' }}>
                                            Login
                                        </b>
                                    </Button>

                                    {/* <i>Already a member, please</i> <button>login</button> */}
                                </Box>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item sm={5}>

                    </Grid>
                </Grid>
            </Box>
            <Grid container sm={12} sx={{ display: 'flex', justifyContent: 'center', position: 'relative', top: { sm: '-5rem', lg: '-3rem' } }}>
                <Grid item sm={2.75} sx={{ backgroundColor: '#0066CC', p: { sm: 1, md: 3, lg: 5 }, border: 1, borderColor: 'whitesmoke' }}>
                    <Typography variant="h3" sx={{ fontSize: { sm: '2rem', lg: '3rem', color: 'white' } }} style={{ marginBottom: 3 }}>
                        Affordable Price
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { sm: '1rem', lg: '1.5rem', color: 'white' } }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </Typography>
                    <Button variant="contained" sx={{ width: '100%', backgroundColor: 'white', mt: 3 }}>
                        <b style={{ color: 'black' }}>
                            View more
                        </b>
                    </Button>
                </Grid>
                <Grid item sm={2.75} sx={{ backgroundColor: '#0066CC', p: { sm: 1, md: 3, lg: 5 }, border: 1, borderColor: 'whitesmoke' }}>
                    <Typography variant="h3" sx={{ fontSize: { sm: '2rem', lg: '3rem', color: 'white' } }}>
                        Affordable Price
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { sm: '1rem', lg: '1.5rem', color: 'white' } }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </Typography>
                    <Button variant="contained" sx={{ width: '100%', backgroundColor: 'white', mt: 3 }}>
                        <b style={{ color: 'black' }}>
                            View more
                        </b>
                    </Button>
                </Grid>
                <Grid item sm={2.75} sx={{ backgroundColor: '#0066CC', p: { sm: 1, md: 3, lg: 5 }, border: 1, borderColor: 'whitesmoke' }}>
                    <Typography variant="h3" sx={{ fontSize: { sm: '2rem', lg: '3rem', color: 'white' } }}>
                        Affordable Price
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { sm: '1rem', lg: '1.5rem', color: 'white' } }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </Typography>
                    <Button variant="contained" sx={{ width: '100%', backgroundColor: 'white', mt: 3 }}>
                        <b style={{ color: 'black' }}>
                            View more
                        </b>
                    </Button>
                </Grid>
                <Grid item sm={2.75} sx={{ backgroundColor: '#0066CC', p: { sm: 1, md: 3, lg: 5 }, border: 1, borderColor: 'whitesmoke' }}>
                    <Typography variant="h3" sx={{ fontSize: { sm: '2rem', lg: '3rem', color: 'white' } }}>
                        Affordable Price
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { sm: '1rem', lg: '1.5rem', color: 'white' } }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </Typography>
                    <Button variant="contained" sx={{ width: '100%', backgroundColor: 'white', mt: 3 }}>
                        <b style={{ color: 'black' }}>
                            View more
                        </b>
                    </Button>
                </Grid>
            </Grid>
            <Grid container sm={12} sx={{ display: 'flex', justifyContent: 'center', mt: { lg: 4 } }} >
                <Grid item sm={2.5} sx={{ mr: { sm: 3, lg: 5 }, height: { sm: '29rem', lg: '40rem' } }}  >
                    <div className='secondCard' style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box component='img' src={hero} sx={{ width: '100px', height: '100px', position: 'relative', top: { md: '24rem', lg: '35rem' } }} className='smallImg' />
                    </div>
                    <Box className='thirdCard'>
                        <p className='cardP'> Lorem ipsum dolor sit</p>
                        <p className='cardP' style={{ fontWeight: 900 }}>
                            PSYCHATHRIAC
                        </p>
                        {/* <Typography color="initial" sx={{ pl: 1, pb: 1, fontSize:'1rem'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                        </Typography> */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                            Lorem ipsum dolor sit amet,
                        </p>
                    </Box>
                </Grid>
                <Grid item sm={2.5} sx={{ mr: { sm: 3, lg: 5 }, height: { sm: '29rem', lg: '40rem' } }} >
                    <div className='secondCard' style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box component='img' src={hero} sx={{ width: '100px', height: '100px', position: 'relative', top: { md: '24rem', lg: '35rem' } }} className='smallImg' />
                    </div>
                    <Box className='thirdCard' >
                        <p className='cardP'> Lorem ipsum dolor sit</p>
                        <p className='cardP' style={{ fontWeight: 900 }}>
                            PSYCHATHRIAC
                        </p>
                        {/* <Typography variant="body1" color="initial" sx={{ pl: 1, pb: 1 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                        </Typography> */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                            Lorem ipsum dolor sit amet
                        </p>
                    </Box>
                </Grid>
                <Grid item sm={2.5} sx={{ mr: { sm: 3, lg: 5 }, height: { sm: '29rem', lg: '40rem' } }} >
                    <div className='secondCard' style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box component='img' src={hero} sx={{ width: '100px', height: '100px', position: 'relative', top: { md: '24rem', lg: '35rem' } }} className='smallImg' />
                    </div>
                    <Box className='thirdCard' >
                        <p className='cardP'> Lorem ipsum dolor sit</p>
                        <p className='cardP' style={{ fontWeight: 900 }}>
                            PSYCHATHRIAC
                        </p>
                        {/* <Typography variant="body1" color="initial" sx={{ pl: 1, pb: 1 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                        </Typography> */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                            Lorem ipsum dolor sit amet
                        </p>
                    </Box>
                </Grid>
                <Grid item sm={2.5} sx={{ backgroundColor: '#efefef', pt: { sm: '8rem', lg: '8rem' }, pb: { sm: '8rem', lg: '8rem' } }} >
                    <Typography className='cardP' sx={{ fontWeight: 900, fontSize: { md: '1.5rem', lg: '2.5rem' } }}>
                        WORKING HOURS
                    </Typography>
                    <Typography className='cardP' sx={{ marginTop: '1rem', fontSize: { sm: '.8rem', md: '1rem', lg: '1.3rem' } }}>
                        Lorem ipsum dolor sit amet consectetur
                    </Typography>
                    <Typography className='cardP' sx={{ fontSize: { sm: '.8rem', md: '1rem', lg: '1.3rem' } }}> Lorem ipsum dolor sit amet</Typography>
                    <Grid container sx={{ mt: { sm: '1rem', lg: '1.5rem' } }}>
                        <Grid sm={12} item sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1 }}>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem', pb: 2, pt: 2 } }} className='typo'>
                                Monday
                            </Typography>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem', pb: 2, pt: 2 } }} className='typo'>
                                00.00-00.00 AM
                            </Typography>
                        </Grid>
                        <Grid sm={12} item sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1 }}>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem' } }} className='typo'>
                                Tuesday
                            </Typography>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem' } }} className='typo'>
                                00.00-00.00 AM
                            </Typography>
                        </Grid>
                        <Grid sm={12} item sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1 }}>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem' } }} className='typo'>
                                Wednesday
                            </Typography>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem' } }} className='typo'>
                                00.00-00.00 AM
                            </Typography>
                        </Grid>
                        <Grid sm={12} item sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1 }}>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem' } }} className='typo'>
                                Thursday
                            </Typography>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem' } }} className='typo'>
                                00.00-00.00 AM
                            </Typography>
                        </Grid>
                        <Grid sm={12} item sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1 }}>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem' } }} className='typo'>
                                Friday
                            </Typography>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem' } }} className='typo'>
                                00.00-00.00 AM
                            </Typography>
                        </Grid>
                        <Grid sm={12} item sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1 }}>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem' } }} className='typo'>
                                Saturday
                            </Typography>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem' } }} className='typo'>
                                00.00-00.00 AM
                            </Typography>
                        </Grid>
                        <Grid sm={12} item sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1 }}>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem' } }} className='typo'>
                                Sunday
                            </Typography>
                            <Typography variant="body1" color="initial" sx={{ fontSize: { sm: '.9rem', md: '1rem', lg: '1.5rem' } }} className='typo'>
                                00.00-00.00 AM
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 5 }}>
                <Grid item sm={7.5} sx={{ backgroundColor: '#efefef' }}>
                    <Grid container>
                        <Grid item sm={12}>
                            <Typography variant="h3" color="initial" sx={{ pt: { md: '3rem', lg: '4rem' }, fontWeight: 900, borderBottom: 1, display: 'flex', justifyContent: 'center' }}>
                                PATIENT'S TESTIMONY
                            </Typography>
                            <Grid container sx={{ pl: { md: '4rem', lg: '6rem' }, borderBottom: 1, mt: 1 }}>
                                <Grid item sm={3}>
                                    <Box alt sx={{ width: { md: '100px', lg: '150px' }, height: { sm: '100px', lg: '150px' }, border: 1, borderRadius: '50%' }} className='user'>
                                        <VerifiedUserOutlinedIcon sx={{ position: 'relative', top: { sm: '8.5rem', lg: '13.5rem' }, fontSize: { sm: '2.5rem', lg: '3rem' }, color: 'white', backgroundColor: '#0066CC', borderRadius: '50%' }} />
                                    </Box>
                                    <Typography sx={{ fontWeight: 800, fontSize: { sm: '1.2rem', lg: '2rem' }, mt: { sm: 1.5, lg: 2 } }}>Danielle Tyburski</Typography>
                                    <Box className='signature' sx={{ fontSize: { sm: '3rem', lg: '4rem' } }}>danielle</Box>
                                </Grid>
                                <Grid item sm={9} sx={{ height: { md: '15rem', lg: '25rem' }, display: 'flex', alignItems: 'center' }}>
                                    <Grid container>
                                        <Grid item sm={1} sx={{ backgroundImage: `url(${quote1})`, backgroundSize: '5rem', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', height: '100%' }}>
                                            <p style={{ color: 'transparent' }}> lorem lorem</p>
                                        </Grid>
                                        <Grid item sm={10}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                                            Lorem ipsum dolor sit amet
                                        </Grid>
                                        <Grid item sm={1} sx={{ backgroundImage: `url(${quote2})`, backgroundSize: '4rem', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', height: '100%' }}>
                                            <p style={{ color: 'transparent' }}> lorem lorem</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={12}>
                            <Grid container sx={{ pl: { md: '4rem', lg: '6rem' }, borderBottom: 1, mt: 1 }}>
                                <Grid item sm={3}>
                                    <Box alt sx={{ width: { md: '100px', lg: '150px' }, height: { sm: '100px', lg: '150px' }, border: 1, borderRadius: '50%' }} className='user'>
                                        <VerifiedUserOutlinedIcon sx={{ position: 'relative', top: { sm: '8.5rem', lg: '13.5rem' }, fontSize: { sm: '2.5rem', lg: '3rem' }, color: 'white', backgroundColor: '#0066CC', borderRadius: '50%' }} />
                                    </Box>
                                    <Typography sx={{ fontWeight: 800, fontSize: { sm: '1.2rem', lg: '2rem' }, mt: { sm: 1.5, lg: 2 } }}>Geana Brafford</Typography>
                                    <Box className='signature' sx={{ fontSize: { sm: '3rem', lg: '4rem' } }}>Brafford</Box>
                                </Grid>
                                <Grid item sm={9} sx={{ height: { md: '15rem', lg: '25rem' }, display: 'flex', alignItems: 'center' }}>
                                    <Grid container>
                                        <Grid item sm={1} sx={{ backgroundImage: `url(${quote1})`, backgroundSize: '5rem', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', height: '100%' }}>
                                            <p style={{ color: 'transparent' }}> lorem lorem</p>
                                        </Grid>
                                        <Grid item sm={10}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                                            Lorem ipsum dolor sit amet
                                        </Grid>
                                        <Grid item sm={1} sx={{ backgroundImage: `url(${quote2})`, backgroundSize: '4rem', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', height: '100%' }}>
                                            <p style={{ color: 'transparent' }}> lorem lorem</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item sm={4.5} sx={{ backgroundColor: '#0066CC' }}>
                    <Typography variant="h3" sx={{ pt: { md: '3rem', lg: '4rem' }, fontWeight: 900, color: 'white', borderBottom: 1, display: 'flex', justifyContent: 'center' }}>
                        WHY CHOOSE US
                    </Typography>
                    <Grid container md={12} sx={{ display: 'flex', justifyContent: "center", pt: { md: '3rem', lg: '4rem' } }}>
                        <Grid item md={10}>
                            <Typography variant="body1" sx={{ color: 'white', fontSize: { md: '1rem', lg: '1.4rem' }, display: 'flex', justifyContent: 'center' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', fontSize: { md: '1rem', lg: '1.4rem' }, display: 'flex', justifyContent: 'center' }}>
                                lit, sed do eiusmod tempor incididun  Lorem ipsum
                            </Typography>
                        </Grid>
                        <Grid item md={10} sx={{ mt: { md: '1.5rem', lg: '3rem' } }}>
                            <Grid container>
                                <Grid item md={2}>
                                    <ArchiveOutlinedIcon sx={{ fontSize: { md: '4rem', lg: '6rem' }, color: 'white' }} />
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' sx={{ color: 'white', fontSize: { md: '1.1rem', lg: '1.5rem' }, fontWeight: 700 }}>
                                        Safe Information
                                    </Typography>
                                    <Typography variant='body1' sx={{ color: 'white', fontSize: { md: '1rem', lg: '1.4rem' } }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={10} sx={{ mt: { md: '1.5rem', lg: '3rem' } }}>
                            <Grid container>
                                <Grid item md={2}>
                                    <SellOutlinedIcon sx={{ fontSize: { md: '4rem', lg: '6rem' }, color: 'white' }} />
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' sx={{ color: 'white', fontSize: { md: '1.1rem', lg: '1.5rem' }, fontWeight: 700 }}>
                                        Safe Information
                                    </Typography>
                                    <Typography variant='body1' sx={{ color: 'white', fontSize: { md: '1rem', lg: '1.4rem' } }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={10} sx={{ mt: { md: '1.5rem', lg: '3rem' } }}>
                            <Grid container>
                                <Grid item md={2}>
                                    <SupportAgentOutlinedIcon sx={{ fontSize: { md: '4rem', lg: '6rem' }, color: 'white' }} />
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' sx={{ color: 'white', fontSize: { md: '1.1rem', lg: '1.5rem' }, fontWeight: 700 }}>
                                        Customer Support 24/7
                                    </Typography>
                                    <Typography variant='body1' sx={{ color: 'white', fontSize: { md: '1rem', lg: '1.4rem' } }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={10} sx={{ mt: { md: '1.5rem', lg: '3rem' } }}>
                            <Grid container>
                                <Grid item md={2}>
                                    <ArchiveOutlinedIcon sx={{ fontSize: { md: '4rem', lg: '6rem' }, color: 'white' }} />
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' sx={{ color: 'white', fontSize: { md: '1.1rem', lg: '1.5rem' }, fontWeight: 700 }}>
                                        Safe Information
                                    </Typography>
                                    <Typography variant='body1' sx={{ color: 'white', fontSize: { md: '1rem', lg: '1.4rem' } }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className='location' sx={{ mt: { md: '3rem', lg: '5rem' }, width: '100%', height: { md: '30rem', lg: '40rem' }, justifyContent: 'center' }}>
                <Grid md={3} sx={{ backgroundColor: 'rgb(242,106,13)', width: '100%', height: '100%' }}>
                    <Typography variant="h3" sx={{ pt: { md: '3rem', lg: '4rem' }, fontWeight: 500, color: 'black', display: 'flex', justifyContent: 'center' }}>
                        CONTACT US
                    </Typography>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center' }} >
                        <Grid item md={11}>
                            <Grid container sx={{mt:4}}>
                                <Grid item md={2}>
                                    <LocationOnOutlinedIcon sx={{ fontSize: { md: '3rem', lg: '5rem' }, color: 'black' }} />
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' sx={{ color: 'black', fontSize: { md: '1.1rem', lg: '1.5rem' }, fontWeight: 700 }}>
                                        Location
                                    </Typography>
                                    <Typography variant='body1' sx={{ color: 'black', fontSize: { md: '1rem', lg: '1.4rem' } }}>
                                        6012 Fannin Drive, Arlington TX 76001
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{mt:4}}>
                                <Grid item md={2} sx={{}}>
                                    <AddIcCallOutlinedIcon sx={{ fontSize: { md: '3rem', lg: '5rem' }, color: 'black' }} />
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' sx={{ color: 'black', fontSize: { md: '1.1rem', lg: '1.5rem' }, fontWeight: 700 }}>
                                        Call
                                    </Typography>
                                    <Typography variant='body1' sx={{ color: 'black', fontSize: { md: '1rem', lg: '1.4rem' } }}>
                                       +234 01-77777
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{mt:4}}>
                                <Grid item md={2} sx={{}}>
                                    <EmailOutlinedIcon sx={{ fontSize: { md: '3rem', lg: '5rem' }, color: 'black' }} />
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' sx={{ color: 'black', fontSize: { md: '1.1rem', lg: '1.5rem' }, fontWeight: 700 }}>
                                        Email
                                    </Typography>
                                    <Typography variant='body1' sx={{ color: 'black', fontSize: { md: '1rem', lg: '1.4rem' } }}>
                                        office001@gmail.com
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid md={8}>

                </Grid>
            </Grid>
        </>
    )
}

export default LandingPage