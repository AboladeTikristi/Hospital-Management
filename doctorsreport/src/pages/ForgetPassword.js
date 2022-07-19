import axios from 'axios'
import React,{useState} from 'react'
import pic from "../assets/medicallogo.png"
import {Routes,Route,Navigate,useNavigate,Link,useLocation} from 'react-router-dom'
import EmailSent from './EmailSent'
function ForgetPassword({state}) {
    const locate=useLocation()
    var who=locate.state.who
    console.log(who)
    const url="http://localhost:5008/forgetPassword"
    const navigate=useNavigate()
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')
    const sendLink=()=>{
        axios.post(url,{email:email,who:who}).then((res)=>{
        if(!res.data.status){
          alert(res.data.message)
          
        }
        else{
            setmessage(res.data.message)
            setemail(res.data.email)
            navigate("/sendemail",{state:{email:email,token:res.data.message,who:who}})
        }
        })
       
    }
  return (
   <>
   <div className="container-fluid">
    <div className="row h-50">
    <div className="col-md-6 rounded shadow  mx-auto col-lg-5 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center mb-4 pb-1">
                        <img className="w-25 w-sm-75 w-md-75 h-75 h-sm-75 h-md-75 rounded-circle"  src={pic} alt="" />
                        <span className='h3 text-success fw-bold'>Medicare</span>
                    </div>
                     <input className='form-control mt-5' placeholder='Input your email'onChange={(e)=>setemail(e.target.value)} type="text" />
                     <button className='btn btn-primary mx-auto w-100 text-center mt-5' onClick={()=>sendLink()}>Send Login link</button>
                     
                     <div className='text-center justify-content-center mx-auto align-items-center'>
                        or
                     </div>
                     <br />
                     <div className='text-center'>
                        <Link to='/' className='text-center text-decoration-none'>Create another account</Link>
                        </div>
                       <hr />
                    <div className='text-center'>
                            <Link to='/login' className='text-center text-decoration-none'>Back to login</Link>
                    </div>  
                  
                    </div>
                   
                   
        </div>
    </div>
   </div> 
   </>
  )
}

export default ForgetPassword