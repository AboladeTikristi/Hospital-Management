// import React from "react"
// import { Link } from "react-router-dom"
// import { Outlet } from "react-router-dom"
// import logo from '../assets/medicallogo.png'
// import pro from '../assets/doct.jpg'
// import DashboardLayout from "../Layouts/DashboardLayout"
// import Appointments from "./Appointments"
// import Dashboard from "./Dashboard"
// import PatientsLabs from "./PatientsLabs"
// import DoctorPatient from "./DoctorPatient"
// import Profile from "./Profile"
// import Todo from "./TodoList"




import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {allDoctors} from '../actions/index'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dashboard from './Dashboard';
import Profile from './Profile';
import PatientsLabs from './PatientsLabs';
import DoctorPatient from "./DoctorPatient"
import Todo from './TodoList';
import Appointments from './Appointments';
import Settings from './PatSettings';
import CalenderApp from "./CalenderApp"

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
    //     <>
    //         <div className="d-flex  align-items-start w-100" id="dashnav">
                
    //             <div className="nav flex-column nav-pills  d-md-flex shadow" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    //                 {/* <div className="row mt-3">
    //                     <div className="col-7 mx-auto">
    //                         <div className="row me-4">
    //                             <div className="col-6">
    //                             <img className="ms-4 w-100" src={logo} alt="medicare" /> 
    //                             </div>
    //                             <div className="col-6">
    //                                 <span className="fw-bold mt-3 fs-4 me-5 float-start">Medicare</span>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                  */}
    //                     {/* <img className="h-25 border-light rounded shadow mt-5 border d-block mx-auto " src={pro} alt="" /> */}
                  
    //                     <button className="nav-link mt-1 active mt-4" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
    //                     <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    //                     <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Patients records</button>
    //                     <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-patient" type="button" role="tab" aria-controls="v-pills-patient" aria-selected="false">Patients</button>
    //                     <button className="nav-link" id="v-pills-todo-tab" data-bs-toggle="pill" data-bs-target="#v-pills-todo" type="button" role="tab" aria-controls="v-pills-todo" aria-selected="false">To-do List</button>
    //                     <button className="nav-link" id="v-pills-appointments-tab" data-bs-toggle="pill" data-bs-target="#v-pills-appointments" type="button" role="tab" aria-controls="v-pills-appointments" aria-selected="false">Appointments</button>
    //                     <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                 
    //             </div>
    //             <div className="tab-content" id="v-pills-tabContent">
    //                 <nav className="navbar navbar-expand navbar-light bg-light w-100 shadow pb-2">
    //                     <div className="container-fluid">
    //                         <a className="navbar-brand">Welcome, Dr Who</a>
    //                         <form className="d-flex w-75">
    //                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //                             <button className="btn btn-outline-primary" type="submit">Search</button>
    //                         </form>
    //                     </div>
    //                 </nav>
    //                 <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
    //                     <Dashboard />
    //                 </div>

    //                 <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
    //                     <Profile />
    //                 </div>

    //                 <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
    //                     <PatientsLabs />
    //                 </div>
    //                 <div className="tab-pane fade" id="v-pills-patient" role="tabpanel" aria-labelledby="v-pills-patient-tab">
    //                     <DoctorPatient />
    //                 </div>

    //                 <div className="tab-pane fade" id="v-pills-todo" role="tabpanel" aria-labelledby="v-pills-todo-tab">
    //                     <Todo />
    //                 </div>

    //                 <div className="tab-pane fade" id="v-pills-appointments" role="tabpanel" aria-labelledby="v-pills-appointments-tab">
    //                     <Appointments />
    //                 </div>

    //                 <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    //                     ...
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Dashboardnav() {
    const [value, setValue] = React.useState(0);
    let dispatch = useDispatch()
    let reduxState=useSelector(state=>state)
    let reduxDoc=useSelector(state=>state.doctors.allDoctors)
    const [userDetails, setuserDetails] = useState(reduxDoc)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
            <Tabs
                orientation="vertical"
                // variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
                style={{ height: "100vh", width: "20%" }}
                id="adminNav"
            >
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="Profile" {...a11yProps(1)} />
                <Tab label="Patients Records" {...a11yProps(2)} />
                <Tab label="Patients" {...a11yProps(3)} />
                <Tab label="To-do list" {...a11yProps(4)} />
                <Tab label="Appointments" {...a11yProps(4)} />
                <Tab label="Calender" {...a11yProps(6)} />
                <Tab label="Settings" {...a11yProps(7)} />
            </Tabs>
            <div className="w-100">
                <nav className="navbar navbar-expand navbar-light bg-light mx-2 shadow pb-2" id="genNav">
                    <div className="container-fluid">
                        <a className="navbar-brand">Welcome, Dr {reduxDoc.lastname}</a>
                        <form className="d-flex w-75">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <TabPanel value={value} index={0}>
                    <Dashboard />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Profile />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <PatientsLabs />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <DoctorPatient />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Todo />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Appointments />
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <CalenderApp />
                </TabPanel>
                <TabPanel value={value} index={7}>
                    <Settings />
                </TabPanel>
            </div>
        </Box>
    );
}
