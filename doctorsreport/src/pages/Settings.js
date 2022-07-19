import { Box, Button, Grid, TextField, Typography, MenuItem } from '@mui/material'
import { React, useState,useRef } from 'react'
import DashTop from '../components/DashTop'
import LeftBar from '../components/LeftBar'
import PatientsNavbar from '../components/PatientsNavbar'
import {useFormik} from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {PresentPatient} from '../actions/index'



const bloodGroudList = [
    {
        value: 'A-',
        label: 'A+',
    },
    {
        value: 'B-',
        label: 'B+',
    },
    {
        value: 'AB-',
        label: 'AB+',
    },
    {
        value: 'O-',
        label: 'O+',
    },
];


const Settings = () => {
    const [bloodGroup, setbloodGroup] = useState('A-');
    const passwordRef = useRef(null);
    const confirmRef = useRef(null);
    const oldpassRef = useRef(null);
    const handleChange = (event) => {
        setbloodGroup(event.target.value);
    };
    let reduxState=useSelector(state=>state)
    let reduxPat=useSelector(state=>state.users.PresentPatient)
    const [userDetails, setuserDetails] = useState(reduxPat)
    const url = "http://localhost:5008/resetpassword2"
    const url2 = "http://localhost:5008/checkpassword"
    // const navigate = useNavigate()
    const [message, setmessage] = useState("")
    const [status, setstatus] = useState("")
    const [oldpass, setoldpass] = useState("")
    const navigate = useNavigate()
    const checkOldPassword=(e)=>{
        var pass=e.target.value
        var info={
            oldpass:pass,
            id:reduxPat._id
        }
        console.log(info)
        axios.post(url2,info).then((res)=>{
            console.log(res.data)
            setoldpass(res.data.message)
        })
    }
    const formik = useFormik({
        initialValues:{
        id:reduxPat._id,
        password:'',
        newpassword:'',

        },
        onSubmit:(values,event)=>{
        
        if (values.password!==values.newpassword){
            alert("Your password don't match")
        }
        else{
            console.log(values)
            const userDetails = values;
       
            axios.post(url,userDetails).then((res) => {
                console.log(res)
                if (res.data.status === true) {
                setmessage(res.data.message)
                alert('Password reset successful')
                setoldpass('')
                passwordRef.current.value=""
                confirmRef.current.value=""
                oldpassRef.current.value=""
                }
                else{
                    alert(res.data.message)
                }
            })
         }
        },
        validationSchema: yup.object({
        password: yup.string().required('Required field').min(6,'at least six character'),
        newpassword: yup.string().required('Required field (don)'),
    })
    })
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
                        <Grid item xs={12} sx={{ backgroundColor: 'white', width: '100%', p: 2, borderRadius: 4 }}>
                            <Typography variant="h4" color="initial">
                                Change Password
                            </Typography>
                            <form name="password-form" onSubmit={formik.handleSubmit}>
                                <TextField 
                                id="outlined-basic"
                                label="Old Password" 
                                inputRef={oldpassRef}
                                type="text"
                                variant="outlined"
                                name='oldpassword'
                                onKeyUp={(e)=>checkOldPassword(e)}
                                defaultValue=""
                                helperText={oldpass!=""?<span class="text-success h6">{oldpass}</span>:''} 
                                sx={{ width: '100%', mt: 4 }} 
                                InputProps={{ style: { fontSize: 15 } }} required />

                                <TextField 
                                id="outlined-basic" 
                                label="New Password"
                                inputRef={passwordRef} 
                                type="password"
                                variant="outlined" 
                                onBlur={formik.handleBlur} 
                                onChange={formik.handleChange}
                                name='password'
                                defaultValue=""
                                helperText={formik.touched.password?<span class="text-danger h6">{formik.errors.password}</span>:''} 
                                sx={{ width: '100%', mt: 4 }} 
                                InputProps={{ style: { fontSize: 15 } }} />

                                <TextField 
                                id="outlined-basic" 
                                type="password"
                                inputRef={confirmRef}
                                label="Confirm Password"
                                onBlur={formik.handleBlur} 
                                onChange={formik.handleChange}
                                name='newpassword'
                                defaultValue=""
                                helperText={formik.touched.newpassword?<span class="text-danger h6">{formik.errors.newpassword}</span>:''}  
                                variant="outlined" sx={{ width: '100%', mt: 4 }} 
                                InputProps={{ style: { fontSize: 15 } }} />
                                <Button type='submit' variant='contained' sx={{ mt: 3, fontSize: '1.5rem', pl: 2, pr: 2 }}>Save</Button>
                            </form>
                        </Grid>
                        <Grid item xs={12} sx={{ backgroundColor: 'white', width: '100%', p: 2, borderRadius: 4, mt:5, mb:{xs:2,sm:5} }}>
                            <Typography variant="h4" color="initial">
                                Patient's Details
                            </Typography>
                            <Box sx={{ display: { xs: 'grid', sm: 'flex' }, justifyContent: { xs: 'none', sm: 'space-between' }, mt:{xs:2,sm:4} }}>
                                <TextField
                                    disabled
                                    id="filled-disabled"
                                    label="First Name"
                                    defaultValue="Toheeb"
                                    variant="filled"
                                    InputProps={{ style: { fontSize: 16 } }}
                                    sx={{ width: { xs: '100%', sm: '48%' },mt:{xs:3,sm:0} }}
                                />
                                <TextField
                                    disabled
                                    id="filled-disabled"
                                    label="First Name"
                                    defaultValue="Toheeb"
                                    variant="filled"
                                    InputProps={{ style: { fontSize: 16, color: "black" } }}
                                    sx={{ width: { xs: '100%', sm: '48%' },mt:{xs:3,sm:0} }}
                                />
                            </Box>
                            <Box sx={{ display: { xs: 'grid', sm: 'flex' }, justifyContent: { xs: 'none', sm: 'space-between' }, mt:{xs:0,sm:5} }}>
                                <TextField
                                    disabled
                                    id="filled-disabled"
                                    label="Email"
                                    defaultValue="Teebabg@yopmail.com"
                                    variant="filled"
                                    InputProps={{ style: { fontSize: 16 } }}
                                    sx={{ width: { xs: '100%', sm: '30%' },mt:{xs:3,sm:0} }}
                                />
                                <TextField
                                    disabled
                                    id="filled-disabled"
                                    label="Phone"
                                    defaultValue="+234 8091527899"
                                    variant="filled"
                                    InputProps={{ style: { fontSize: 16, color: "black" } }}
                                    sx={{ width: { xs: '100%', sm: '30%' },mt:{xs:3,sm:0} }}
                                />
                                <TextField
                                    id="Blood Group"
                                    select
                                    label="Select"
                                    value={bloodGroup}
                                    onChange={handleChange}
                                    helperText="Please select your bloood group"
                                    variant="filled"
                                    sx={{ width: { xs: '100%', sm: '30%' },mt:{xs:3,sm:0} }}
                                    InputProps={{ style: { fontSize: 16} }}
                                    disabled
                                >
                                    {bloodGroudList.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <Box sx={{ display: { xs: 'grid', sm: 'flex' }, justifyContent: { xs: 'none', sm: 'space-between' },  mt:{xs:0,sm:5} }}>
                                <TextField
                                    disabled
                                    id="filled-disabled"
                                    label="Date of birth"
                                    defaultValue="12/23/1909"
                                    variant="filled"

                                    InputProps={{ style: { fontSize: 16 } }}
                                    sx={{ width: { xs: '100%', sm: '30%' },mt:{xs:3,sm:0} }}
                                />
                                <TextField
                                    disabled
                                    id="filled-disabled"
                                    label="Street Address"
                                    defaultValue="Sqi College of Ict"
                                    variant="filled"
                                    InputProps={{ style: { fontSize: 16, color: "black" } }}
                                    sx={{ width: { xs: '100%', sm: '60%' },mt:{xs:3,sm:0} }}
                                />
                            </Box>
                            <Box sx={{ display: { xs: 'grid', sm: 'flex' }, justifyContent: { xs: 'none', sm: 'space-between' }, mt:{xs:0,sm:5} }}>
                                <TextField
                                    disabled
                                    id="filled-disabled"
                                    label="City"
                                    defaultValue="Ogbomosho"
                                    variant="filled"
                                    InputProps={{ style: { fontSize: 16 } }}
                                    sx={{ width: { xs: '100%', sm: '30%' },mt:{xs:3,sm:0} }}
                                />
                                <TextField
                                    disabled
                                    id="filled-disabled"
                                    label="State"
                                    defaultValue="Oyo"
                                    variant="filled"
                                    InputProps={{ style: { fontSize: 16, color: "black" } }}
                                    sx={{ width: { xs: '100%', sm: '30%' },mt:{xs:3,sm:0} }}
                                />
                                <TextField
                                    disabled
                                    id="filled-disabled"
                                    label="Country"
                                    defaultValue="Nigeria"
                                    variant="filled"
                                    InputProps={{ style: { fontSize: 16, color: "black" } }}
                                    sx={{ width: { xs: '100%', sm: '30%' },mt:{xs:3,sm:0} }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Settings