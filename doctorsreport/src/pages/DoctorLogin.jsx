import { Grid } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import illustrator from '../assets/hostpital.png'
import { Box, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import{Link} from 'react-router-dom'
import { Button, AppBar, Toolbar } from '@mui/material'

const myStyle = {
    background: 'rgb(116,200,189)',
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: ' blur(10px)',
    border: '1px solid rgba(26,100,213,0.25)'
}
const myStyle2 ={
    background: "rgba(116,210,204,0.55)",
  "-webkit-backdrop-filter": "blur(8px)",
  backdropFilter: "blur(8px)",
  border: '1px solid rgba(116,210,204,0.275)'
}

const DoctorLogin = () => {
    return (
        <>
            <Navbar />
            <Grid container  style={{ backgroundColor: `${myStyle}`,}} sx={{display:{xs:'none',sm:'flex'}}}>
                <Grid item sm={6} sx={{ backgroundImage: `url(${illustrator})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: { sm: '55rem', lg: '60rem' }, width: '100%', borderBottomRightRadius: '100px' }} >

                </Grid>
                <Grid item sm={6} sx={{ backgroundImage: `url(${illustrator})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: { sm: '55rem', lg: '60rem' }, width: '100%' ,borderTop:1}}>
                    <Grid container sx={{ backgroundColor: 'white', width: '100%', height: '100%', borderTopLeftRadius: '100px', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item sm={8} style={myStyle} sx={{p:5}}>
                            <Typography variant="h3" color="initial" sx={{ display: 'flex', justifyContent: 'center', width: '100%', fontWeight: 500 }}>
                                DOCTOR'S LOGIN
                            </Typography>
                            <form >
                                <TextField
                                    id="standard-error-helper-text"
                                    label="Email"
                                    defaultValue=""
                                    helperText="Incorrect entry."
                                    variant="standard"
                                    sx={{width:'100%'}}
                                    inputProps={{style: {fontSize: 20,color:'white'}}}
                                    InputLabelProps={{style: {fontSize: 20,color:'white'}}}
                                />
                                <TextField
                                    id="standard-error-helper-text"
                                    label="Password"
                                    defaultValue=""
                                    helperText="Incorrect entry."
                                    variant="standard"
                                    sx={{width:'100%'}}
                                    inputProps={{style: {fontSize: 20,color:'white'}}}
                                    InputLabelProps={{style: {fontSize: 20,color:'white'}}}
                                />
                               <button style={{width:'100%',marginTop:'2rem',paddingTop:'.5rem',paddingBottom:'.5rem'}}>Login</button>
                            </form>
                           <Typography variant="body1" color="initial" sx={{fontSize:'1.3rem', mt:1}}>Forgot password ?</Typography>
                          <Link to='/docsignup'> <Typography variant="body1" color="initial" sx={{fontSize:'1.3rem', mt:1}}>Don't have an account? SignUp</Typography></Link>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
             {/* <Grid container sx={{backgroundImage: `url(${illustrator})`,backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width:'100%',height:{xs:'50rem',md:'none'},display:{xs:'flex',md:'none'},justifyContent:"center",alignItems:'center'}}>
                <Grid item xs={12} sm={8} sx={{backgroundColor:`${myStyle2}`}}>
                    <Typography variant="subtitle1" color="initial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur
                    </Typography>
                </Grid>
            </Grid> */}
        </>
    )
}

export default DoctorLogin