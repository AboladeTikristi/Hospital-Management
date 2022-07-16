import React,{useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {allDoctors} from '../actions/index'
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
            <main className="w-100" id="dashboardBody">
                <main className="d-flex w-100 justify-content-between" id="dashBody">
                    <div className="card m-2 shadow-sm" style={{ height: "150px", width:"33%" }} id="dashCon">
                        <h5 className="text-center  ">Number of cases for the day</h5>
                        <div>{userDetails.firstname}</div>

                    </div>
                    <div className="card m-2 shadow-sm" style={{ height: "150px", width:"33%" }} id="dashCon">
                        <h5 className="text-center  ">Pending Cases</h5>

                    </div>
                    <div className="card m-2 shadow-sm" style={{ height: "150px", width:"33%" }} id="dashCon">
                        <h5 className="text-center  ">Resolved cases</h5>
                    </div>
                </main>

            </main>
        </>
    )
}
export default Dashboard