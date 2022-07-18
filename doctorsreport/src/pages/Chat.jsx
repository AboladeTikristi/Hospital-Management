import { Grid } from '@mui/material'
import React from 'react'
import DashTop from '../components/DashTop'
import LeftBar from '../components/LeftBar'
import OnlineUsers from '../components/OnlineUsers'
import PatientsNavbar from '../components/PatientsNavbar'

const Chat = () => {
    return (
        <>
            <PatientsNavbar />
            <Grid container mt={8.2}>
                <Grid item lg={2.2} sx={{ display: { xs: 'none', lg: 'flex' } }}>
                    <LeftBar />
                </Grid>
                <Grid item xs={12} lg={9.8} sx={{ backgroundColor: 'rgb(237, 240, 250)', pr: { xs: 1, sm: 1, md: 3 }, pl: { xs: 1, md: 3 } }}>
                    <DashTop />
                    <Grid container>
                        <Grid item xs={12} sm={4} lg={3} sx={{ backgroundColor: 'white',mr:{xs:0,sm:2,lg:4},p:2,borderRadius:2 }}>
                            <input placeholder='search' style={{padding:4,width:'100%',marginBottom:'2rem'}}/>
                            <OnlineUsers/>
                            <OnlineUsers/>
                            <OnlineUsers/>
                            <OnlineUsers/>
                            <OnlineUsers/>
                        </Grid>
                        <Grid item sm={7.7} md={7.8} lg={8.5} sx={{ backgroundColor: 'white' }}>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Chat