import React from 'react'
import pic1 from '../assets/doct.jpg'
const Appointments = () => {

    return (
        <>
            <div className="container vh-100" style={{ backgroundColor: '#efefef', padding: '2%'}}>
                <div className="row vh-100 ">
                    <div className="card">
                        All Appointments | Appointments | All Appointments <br /><br /><br />
                        <div className="card-body " style={{ backgroundColor: 'white', borderRadius: '10px'}}>
                            <nav class="navbar navbar-light bg-light" style={{justifyContent:'center'}}>
                                <div class="container-fluid">
                                    <form class="d-flex justify-content-center">
                                        <div className="d-flex" style={{backgroundColor:'#efefef'}}>
                                           <p style={{fontSize:'20pt'}}>Appointment</p>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input class="form-control" style={{justifyContent:'end'}} type="search" placeholder="Search..." aria-label="Search" />
                                        </div>
                                    </form>
                                </div>
                            </nav>
                            <table style={{width:'100%',height:'10vh',padding:'10px',justifyContent:'center'}}>
                                <thead>
                                    <th><input type="checkbox" /></th>
                                    <th>Image</th>
                                    <th>Patient Name</th>
                                    <th>DateTime</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Disease</th>
                                </thead>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><img src={pic1} alt="" style={{width:'60px',borderRadius:'50px',height:'6vh'}}/></td>
                                    <td>Dan Lol</td>
                                    <td>12/2/2022</td>
                                    <td>danlol@gmail.com</td>
                                    <td>09122334512</td>
                                    <td>Syphllis</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
   


{/* export default DocAppoint */}
            {/* <main className="row d-flex flex-column justify-content-center align-items-center">
                <div className="card mt-3" style={{ width: "90%" }} >
                    <h5 className="text-center">Welcome Dr Who. These are your appointments for today</h5>
                    <div className="w-100 d-flex justify-content-center align-items-center" id="appointDiv">
                        <div className="w-50 card mx-2  py-2 my-4" id="appointSubDiv">
                            <h6 className="text-center">Physical Appointments</h6>
                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                        </div>


                        <div className="w-50 card mx-2 py-2 my-4" id="appointSubDiv">
                            <h6 className="text-center">Online Appointments</h6>
                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                        </div>

                    </div>
                </div>
            </main> */}
        </>
    )
}
export default Appointments