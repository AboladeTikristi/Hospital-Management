import React from 'react'
import doc from '../assets/doct.jpg'
import logo from '../assets/medicallogo.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {allDoctors} from '../actions/index'
function DoctorPatient() {
    const navigate=useNavigate()
    // const token=localStorage.token
    let dispatch = useDispatch()
    let reduxState=useSelector(state=>state)
    let reduxDoc=useSelector(state=>state.doctors.allDoctors)
  return (
    <>
          <div className="w-100 container-fluid" id="dashboardBody">
            <div className=" mt-4 w-100 ms-2 grid grid-cols-3 md:grid-cols-3 gap-4 h3 text-center text-uppercase">
                <div className=""><hr /></div>
                <div className="">Patients</div>
                <div className=""><hr /></div>
            </div>
                {reduxDoc.Patients.length===0?
                <div className='text-center py-5  my-5'>
                    <span className='text-center h2'>
                    <i class="fa-solid fa-4x fa-user-slash mb-3"></i>
                       <br />
                        NO PATIENTS YET
                    </span>
                </div>:
               
                <div class="grid  grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card  shadow-sm">
                      <div class="row w-100 p-3">
                            <div className="col-3">
                                <img src={doc} style={{width:"100%",height:"70%"}} className='rounded-circle' alt="" />
                            </div>
                            <div className="col-4 p-1">
                            <div className='fw-bold fs-5 text-success'>Wale Adeyinka</div>
                            <div className='mt-1'>Patients ID: 0A12</div>
                            </div>
                            <div className="col-5 p-2">
                            <div className='fw-bold'>10:30 - 11:00 AM</div>
                            <div className='mt-1'>Monday, August 2022</div>
                            </div>
                        </div>  
                      <hr style={{marginTop:'-2%'}}></hr> 
                        <div className="row p-3  w-100">
                            <div className='fs-5'>
                            <i className="fa-solid fa-location-dot"></i>
                            <span className='ms-3'>Ayenkorin, Ilorin Road, Kwara State</span>
                            
                            </div>
                            <div className='mt-2'>
                                <i className="fa-solid fa-phone-flip"> </i>
                                <span className='ms-3'>+123 809 234 4567</span>
                            </div>
                        </div>
                      <hr style={{marginTop:'0%'}}></hr> 
                        <div className="row p-3  w-100">
                                <div className='fs-5'>
                                <span className=''>Bloog Group : <span>O+</span></span>
                                
                                </div>
                                <div className='mt-2'>
                                    <span className='fs-5'>Reports :
                                    <i className="fa-solid fa-file-pdf ms-2 text-danger"></i>
                                    </span>
                                </div>
                        </div>
                     <hr style={{marginTop:'0%'}}></hr>
                        <div className="text-center">
                            <button className='btn btn-primary'>Read More</button>
                        </div> 
                    </div>
                    <div style={{}}className="card ms-2 shadow-sm">
                      <div class="row w-100 p-3">
                            <div className="col-3">
                                <img src={doc} style={{width:"100%",height:"70%"}} className='rounded-circle' alt="" />
                            </div>
                            <div className="col-4 p-1">
                            <div className='fw-bold fs-5 text-success'>Wale Adeyinka</div>
                            <div className='mt-1'>Patients ID: 0A12</div>
                            </div>
                            <div className="col-5 p-2">
                            <div className='fw-bold'>10:30 - 11:00 AM</div>
                            <div className='mt-1'>Monday, August 2022</div>
                            </div>
                        </div>  
                      <hr style={{marginTop:'-2%'}}></hr> 
                        <div className="row p-3  w-100">
                            <div className='fs-5'>
                            <i className="fa-solid fa-location-dot"></i>
                            <span className='ms-3'>Ayenkorin, Ilorin Road, Kwara State</span>
                            
                            </div>
                            <div className='mt-2'>
                                <i className="fa-solid fa-phone-flip"> </i>
                                <span className='ms-3'>+123 809 234 4567</span>
                            </div>
                        </div>
                      <hr style={{marginTop:'0%'}}></hr> 
                        <div className="row p-3  w-100">
                                <div className='fs-5'>
                                <span className=''>Bloog Group : <span>O+</span></span>
                                
                                </div>
                                <div className='mt-2'>
                                    <span className='fs-5'>Reports :
                                    <i className="fa-solid fa-file-pdf ms-2 text-danger"></i>
                                    </span>
                                </div>
                        </div>
                     <hr style={{marginTop:'0%'}}></hr>
                        <div className="text-center mb-2">
                            <button className='btn btn-primary'>Read More</button>
                        </div> 
                    </div>
                    <div style={{}}className="card shadow-sm">
                      <div class="row w-100 p-3">
                            <div className="col-3">
                                <img src={doc} style={{width:"100%",height:"70%"}} className='rounded-circle' alt="" />
                            </div>
                            <div className="col-4 p-1">
                            <div className='fw-bold fs-5 text-success'>Wale Adeyinka</div>
                            <div className='mt-1'>Patients ID: 0A12</div>
                            </div>
                            <div className="col-5 p-2">
                            <div className='fw-bold'>10:30 - 11:00 AM</div>
                            <div className='mt-1'>Monday, August 2022</div>
                            </div>
                        </div>  
                      <hr style={{marginTop:'-2%'}}></hr> 
                        <div className="row p-3  w-100">
                            <div className='fs-5'>
                            <i className="fa-solid fa-location-dot"></i>
                            <span className='ms-3'>Ayenkorin, Ilorin Road, Kwara State</span>
                            
                            </div>
                            <div className='mt-2'>
                                <i className="fa-solid fa-phone-flip"> </i>
                                <span className='ms-3'>+123 809 234 4567</span>
                            </div>
                        </div>
                      <hr style={{marginTop:'0%'}}></hr> 
                        <div className="row p-3  w-100">
                                <div className='fs-5'>
                                <span className=''>Bloog Group : <span>O+</span></span>
                                
                                </div>
                                <div className='mt-2'>
                                    <span className='fs-5'>Reports :
                                    <i className="fa-solid fa-file-pdf ms-2 text-danger"></i>
                                    </span>
                                </div>
                        </div>
                     <hr style={{marginTop:'0%'}}></hr>
                        <div className="text-center mb-2">
                            <button className='btn btn-primary'>Read More</button>
                        </div> 
                    </div>
                  
                </div> 
                }
                <div className="d-flex ps-4 p-2 row mt-4 w-100 justify-content-center">
                   
                </div>
                
            </div>
    </>
  )
}

export default DoctorPatient