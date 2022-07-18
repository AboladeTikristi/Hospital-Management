import { Grid } from '@mui/material'
import React from 'react'
import DashTop from '../components/DashTop'
import LeftBar from '../components/LeftBar'
import OnlineUsers from '../components/OnlineUsers'
import PatientsNavbar from '../components/PatientsNavbar'

const Patientpastappoint = () => {
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
                    <div className="container vh-100" style={{  justifyContent:"end" }}>
                 <div className="row vh-100 ">
                    <div className="card">
                            Past| Appointments | Past Appointment <br /><br /><br />
                        <div className="card-body " style={{ backgroundColor: 'white', borderRadius: '10px'}}>
                            <nav class="navbar navbar-light bg-light" >
                                <div class="container-fluid">
                                    <form class="d-flex justify-content-center">
                                    <div className="d-flex" style={{}}>
                                           <p style={{fontSize:'20pt'}}>Past Appointment</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input class="form-control" style={{width:'30%',justifyContent:'end'}} type="search" placeholder="Search..." aria-label="Search" />
                                        </div>
                                    </form>
                                </div>
                            </nav>
                            <table style={{width:'100%',height:'10vh',padding:'10px',justifyContent:'center'}}>
                                <thead>
                                    <th><input type="checkbox" /></th>
                                    <th>Image</th>
                                    <th>Doctor Name</th>
                                    <th>Appo. Date</th>
                                    <th>Appo. Time</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Injury</th>
                                    <th>Action</th>
                                </thead>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td></td>
                                    <td>Dr. Herry</td>
                                    <td>12/2/2022</td>
                                    <td>11:20pm</td>
                                    <td>danlol@gmail.com</td>
                                    <td>09122334512</td>
                                    <td>Cancer</td>
                                    <td>
                                        <button className='btn btn-danger'>X</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
                    </Grid>
                </Grid>
            </Grid>
            
        </>
    )
}

export default Patientpastappoint