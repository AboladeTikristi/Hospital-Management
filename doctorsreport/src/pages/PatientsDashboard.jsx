import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import DashTop from '../components/DashTop'
import LeftBar from '../components/LeftBar'
import PatientsNavbar from '../components/PatientsNavbar'
import patientIllustrator from '../assets/generated.jpg'
import HealthCard from '../components/HealthCard'
import Canva from '../components/Canva'
import MuiTabs from '../components/MuiTabs'
import Prescription from '../components/Prescription'

const PatientsDashboard = () => {
    return (
        <>
            <PatientsNavbar />
            <Grid container mt={8.2}>
                <Grid item lg={2.2} sx={{ display: { xs: 'none', lg: 'flex' } }}>
                    <LeftBar />
                </Grid>
                <Grid item xs={12} lg={9.8} sx={{ backgroundColor: 'rgb(237, 240, 250)', pr: { xs: 1, sm: 1, md: 0 }, pl: { xs: 1, md: 3 } }}>
                    <DashTop />
                    <Grid container sx={{ backgroundColor: 'white', p: { xs: .5, sm: 3, borderRadius: 7 } }}>
                        <Grid item xs={12} sm={3} sx={{ mr: { xs: 1, sm: 5 } }}>
                            <Box component='img' src={patientIllustrator} alt='' sx={{ display: { xs: 'none', sm: 'block' }, width: '100%', height: { sm: '17rem', lg: '19rem' }, borderRadius: '1rem' }} />
                            <Box sx={{ display: { xs: 'block', sm: 'none', height: '100%' } }}>
                                <img src={patientIllustrator} alt='' style={{ width: '100%', height: '100%' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8} sx={{ mt: { xs: 2, sm: 0 } }}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="h4" color="initial" sx={{ fontWeight: 500 }}>
                                        Welcome Back
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: { xs: .5, lg: 1 } }}>
                                    <Typography variant="h2" color="initial" sx={{ color: '#0066CC', fontWeight: 500 }}>
                                        Ella Jones!
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: { xs: .5, lg: 1 } }}>
                                    <Typography variant="body2" color="initial" sx={{ fontSize: { xs: '1.4rem', sm: '1.3rem', md: '1.60rem', lg: '1.8rem' }, mb: { xs: 2, sm: 0 } }}>
                                        We would like to take this opportunity to welcome you to our practice and to thank you for choosing our physicians to participate in your healthcare. We look forward to providing you with personalized, comprehensive health care focusing on wellness and prevention.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ mt: 3 }}>
                        <Grid item xs={12} sm={2.8} md={2.7} sx={{ p: { xs: 2, sm: 1.5, lg: 2.5 }, backgroundColor: 'white', borderRadius: 2 }}>
                            <HealthCard />
                        </Grid>
                        <Grid item xs={12} sm={2.8} md={2.7} sx={{ p: { xs: 2, sm: 1.5, lg: 2.5 }, backgroundColor: 'white', borderRadius: 2, ml: { sm: 2, md: 3 }, mt: { xs: 2, sm: 0 } }}>
                            <HealthCard />
                        </Grid>
                        <Grid item xs={12} sm={2.8} md={2.7} sx={{ p: { xs: 2, sm: 1.5, lg: 2.5 }, backgroundColor: 'white', borderRadius: 2, ml: { sm: 2, md: 3 }, mt: { xs: 2, sm: 0 } }}>
                            <HealthCard />
                        </Grid>
                        <Grid item xs={12} sm={2.8} md={2.7} sx={{ p: { xs: 2, sm: 1.5, lg: 2.5 }, backgroundColor: 'white', borderRadius: 2, ml: { sm: 2, md: 3 }, mt: { xs: 2, sm: 0 } }}>
                            <HealthCard />
                        </Grid>
                    </Grid>
                    <Canva/>
                    <MuiTabs/>
                    <Prescription/>
                </Grid>
            </Grid>
        </>
    )
}

export default PatientsDashboard