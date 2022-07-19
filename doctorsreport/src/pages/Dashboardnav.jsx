// import { Link } from "react-router-dom"
// import { Outlet } from "react-router-dom"
// import DashboardLayout from "../Layouts/DashboardLayout"
// import Appointments from "./Appointments"
// import Dashboard from "./Dashboard"
// import PatientsLabs from "./PatientsLabs"
// import Profile from "./Profile"
// import Settings from "./Settings"
// import Todo from "./TodoList"

// const Dashboardnav = () => {

//     return (
//         <>
//             <div className="d-flex align-items-start w-100" id="dashnav">

//                 responsive nav bar
//                 <div className="navbar navbar-expand-md navbar-light bg-light shadow w-100" id="nav">
//                     <div className="container-fluid">
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" to="/dashboard">Home</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/profile">Profile</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/patientslabs">Patients Records</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/todo">To-do List</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/appointments">Appointments</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/settings">Settings</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     <main className="w-100">
//                         <div className="w-100">
//                             <Dashboard />
//                         </div>

//                         <div className="w-100">
//                             <Profile />
//                         </div>

//                         <div className="w-100">
//                             <PatientsLabs />
//                         </div>

//                         <div className="w-100">
//                             <Todo />
//                         </div>

//                         <div className="w-100">
//                             <Appointments />
//                         </div>

//                         <div className="w-100">
//                             <Settings />
//                         </div>

//                     </main>
//                 </div>


//                 <div className="nav flex-column nav-pills shadow" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//                     <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
//                     <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
//                     <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Patients records</button>
//                     <button className="nav-link" id="v-pills-todo-tab" data-bs-toggle="pill" data-bs-target="#v-pills-todo" type="button" role="tab" aria-controls="v-pills-todo" aria-selected="false">To-do List</button>
//                     <button className="nav-link" id="v-pills-appointments-tab" data-bs-toggle="pill" data-bs-target="#v-pills-appointments" type="button" role="tab" aria-controls="v-pills-appointments" aria-selected="false">Appointments</button>
//                     <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>

//                 </div>

//                 <div className="tab-content" id="v-pills-tabContent">
//                     <nav className="navbar navbar-expand navbar-light bg-light mx-2 shadow pb-2" id="genNav">
//                         <div className="container-fluid">
//                             <a className="navbar-brand">Welcome, Dr Who</a>
//                             <form className="d-flex w-75">
//                                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                                 <button className="btn btn-outline-primary" type="submit">Search</button>
//                             </form>
//                         </div>
//                     </nav>
//                     <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
//                         <Dashboard />
//                     </div>

//                     <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
//                         <Profile />
//                     </div>

//                     <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
//                         <PatientsLabs />
//                     </div>

//                     <div className="tab-pane fade" id="v-pills-todo" role="tabpanel" aria-labelledby="v-pills-todo-tab">
//                         <Todo />
//                     </div>

//                     <div className="tab-pane fade" id="v-pills-appointments" role="tabpanel" aria-labelledby="v-pills-appointments-tab">
//                         <Appointments />
//                     </div>

//                     <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
//                         <Settings />
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }
// export default Dashboardnav


import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dashboard from './Dashboard';
import Profile from './Profile';
import PatientsLabs from './PatientsLabs';
import Todo from './TodoList';
import Appointments from './Appointments';
import SettingsApp from './SettingsApp';
import CalenderApp from "./CalenderApp"
import {Home, Person, Folder, Toc, CalendarViewMonth, Settings, CallToAction} from '@mui/icons-material';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
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
                id="drNav"
            >
                <Tab icon={<Home fontSize="small" />} iconPosition="start"  label="Home" {...a11yProps(0)} />
                <Tab icon={<Person fontSize="small"  />} iconPosition="start" label="Profile" {...a11yProps(1)} />
                <Tab icon={<Folder  fontSize="small" />} iconPosition="start"   label="Patients Records" {...a11yProps(2)} />
                <Tab icon={<Toc fontSize="small"  />} iconPosition="start" label="To-do list" {...a11yProps(3)} />
                <Tab icon={<CalendarViewMonth  fontSize="small" />} iconPosition="start" label="Appointments" {...a11yProps(4)} />
                <Tab icon={<CallToAction fontSize="small"  />} iconPosition="start"  label="Calender" {...a11yProps(5)} />
                <Tab icon={<Settings fontSize="small"  />} iconPosition="start" label="Settings" {...a11yProps(6)} />
            </Tabs>

            <Tabs
                orientation="vertical"
                // variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
                style={{ height: "100vh" }}
                id="drNav2"
            >
                <Tab style={{width:"100%"}} id="resTab" icon={<Home fontSize="small" />} iconPosition="start" {...a11yProps(0)} />
                <Tab style={{width:"100%"}} id="resTab" icon={<Person fontSize="small" />} iconPosition="start" {...a11yProps(1)} />
                <Tab style={{width:"100%"}} id="resTab" icon={<Folder fontSize="small" />} iconPosition="start"  {...a11yProps(2)} />
                <Tab style={{width:"100%"}} id="resTab" icon={<Toc fontSize="small" />} iconPosition="start"  {...a11yProps(3)} />
                <Tab style={{width:"100%"}} id="resTab" icon={<CalendarViewMonth fontSize="small" />} iconPosition="start"  {...a11yProps(4)} />
                <Tab style={{width:"100%"}} id="resTab" icon={<CallToAction fontSize="small" />} iconPosition="start"   {...a11yProps(5)} />
                <Tab style={{width:"100%"}} id="resTab" icon={<Settings fontSize="small" />} iconPosition="start" {...a11yProps(6)} />
            </Tabs>


            <div className="w-100" id="navDiv">
                <nav className="navbar navbar-expand navbar-light bg-light mx-2 shadow pb-2" id="genNav">
                    <div className="container-fluid">
                        <a className="navbar-brand">Welcome, Dr Who</a>
                        <form className="d-flex w-75">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div>
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
                        <Todo />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Appointments />
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <CalenderApp />
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        <SettingsApp />
                    </TabPanel>
                </div>
            </div>
        </Box>
    );
}
