import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'

const OnlineUsers = () => {
  return (
    <>
      <Grid container sx={{p:1 ,"&:hover":{backgroundColor:'rgb(237, 240, 250)'}}}>
        <Grid item xs={2} sx={{ mr: 1 }}>
          <Avatar />
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={12}>
              <b style={{ fontWeight: 500 }}>
                William Smith
              </b>
            </Grid>
            <Grid item xs={12} sx={{display:'flex',justifyContent:'start'}}>
            <div style={{height:'7px',width:'7px',borderRadius:'50%', backgroundColor:'orange',marginTop:'.5rem',marginRight:'.5rem'}}>
            </div>
            <div>
              <p style={{fontSize:'1.2rem'}}>left 10min ago</p>
            </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </>
  )
}

export default OnlineUsers