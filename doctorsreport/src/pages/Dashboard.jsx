import React,{useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
function Dashboard() {
  const navigate = useNavigate()
  const url = 'http://localhost:5008/dashboard'
  const token = localStorage.token
  useEffect(()=>{
    axios.get(url,{headers:
        {
        'Authorization':`Bearer ${token}`,
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
}).then((res)=>{
    if(res.data.status){
        console.log(res.data.userDetails)
    }else{
        localStorage.removeItem('token')
        navigate('/login')
    }
})
},[token])
  return (
    <>
      <div>Dashboard</div>
    </>
  )
}

export default Dashboard