import React,{useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {allDoctors} from '../actions/index'
import Dashboardnav from "./Dashboardnav"
const Dashboard = () => {
    const url='http://localhost:5008/doctor'
    const url2='http://localhost:5008/alldocs'
    const navigate=useNavigate()
    const token=localStorage.token
    let dispatch = useDispatch()
    let reduxState=useSelector(state=>state)
    let reduxCount=useSelector(state=>state.doctors.allDoctors)
    const [userDetails, setuserDetails] = useState('')
//    console.log(reduxCount)
    const [count, setcount] = useState("")
    useEffect(() => {
        axios.get(url,
            {
            headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type':'application/json',
            'Accept':'application/json'
            }
        }).then((res)=>{
            if (res.data.status) {
                dispatch(allDoctors(res.data.userDetails))
                setuserDetails(reduxCount)
            }
            else{
                localStorage.removeItem('token')
                navigate('/doclogin')
            }
            
        })
    }, [reduxCount])
    
 
    return (
        <>
       {/* <Dashboardnav></Dashboardnav> */}
        {/* <Dashboardnav/> */}
            <main className="w-100" id="dashboardBody">
                <main className="d-flex w-100 justify-content-between" id="dashBody">
                    <div className="card m-2 py-3 shadow-sm" style={{ height: "150px", width:"33%" }} id="dashCon">
                        <h5 className="text-center">Number of cases for the day</h5>
                        {Object.keys(reduxCount).length===0?<div><span className="text-center">none</span></div>:
                         reduxCount.Cases.length>0?
                        <div className="text-center py-3">
                            <span className="text-center fw-bold h4">100</span>
                        </div>:<div className="text-center py-3">
                            <span className="text-center fw-bold h4">{reduxCount.Cases.length}</span>
                        </div>}

                    </div>
                    <div className="card m-2 py-3 shadow-sm" style={{ height: "150px", width:"33%" }} id="dashCon">
                        <h5 className="text-center  ">Pending Cases</h5>
                        {Object.keys(reduxCount).length===0?<div><span className="text-center">none</span></div>:
                         reduxCount.Cases.length>0?
                        <div className="text-center py-3">
                            <span className="text-center fw-bold h4">100</span>
                        </div>:<div className="text-center py-3">
                            <span className="text-center fw-bold h4">{reduxCount.Cases.length}</span>
                        </div>}

                    </div>
                    <div className="card m-2 shadow-sm py-3" style={{ height: "150px", width:"33%" }} id="dashCon">
                        <h5 className="text-center  ">Resolved cases</h5>
                        {Object.keys(reduxCount).length===0?<div><span className="text-center">none</span></div>:
                         reduxCount.Cases.length>0?
                        <div className="text-center py-3">
                            <span className="text-center fw-bold h4">100</span>
                        </div>:<div className="text-center py-3">
                            <span className="text-center fw-bold h4">{reduxCount.Cases.length}</span>
                        </div>}
                    </div>
                </main>

            </main>
        </>
    )
}
export default Dashboard