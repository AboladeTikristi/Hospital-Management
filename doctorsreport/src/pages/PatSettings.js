import React from 'react'

function PatSettings() {
  return (
  <>
    <div style={{backgroundColor:'aliceblue'}} className="vh-100">
    <div  className="row">
    <div className='h4 mt-3 text-uppercase text-center'>Settings</div>
    <div style={{backgroundColor:'white',marginTop:"5%",}} className="col-9 p-4 rounded mx-auto ">
        <div className='h4 mt-3 text-uppercase'><b>Security </b> Settings</div>
        <div className='text-center'>
            <input className='form-control form-control-lg h-75 mt-5' placeholder='Username' type="text" />
            <input className='form-control form-control-lg h-50 mt-5' placeholder='Currrent Password' type="password" />
            <input className='form-control form-control-lg h-50 mt-5' placeholder='New Password' type="text" />
            <button className='btn btn-info mb-2 mt-5'>Save</button>
        </div>
    </div>
    </div>
    <div  className="row">
    <div style={{backgroundColor:'white',marginTop:"5%",}} className="col-9 p-4 rounded mx-auto ">
        <div className='h4 mt-3 text-uppercase'><b>Account </b> Settings</div>
        <div className='text-center'>
            <input className='form-control form-control-lg h-75 mt-5' placeholder='Email Address' type="text" />
            <input className='form-control form-control-lg h-50 mt-5' placeholder='First name' type="password" />
            <input className='form-control form-control-lg h-50 mt-5' placeholder='Last name' type="text" />
            <button className='btn btn-info mb-2 mt-5'>Save Changes</button>
        </div>
    </div>
    </div>

   </div>
  </>
  )
}

export default PatSettings