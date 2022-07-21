import "./DrSideBar.scss"
import { Link } from "react-router-dom"
import { Home, AccountCircle, List, Article, People, BookOnline, CalendarMonth, Settings } from '@mui/icons-material';


const DrSideBar = () => {

    return (
        <>
            <div id="sidebar">
                <div id="firstLogo">
                    <span>MEDICARE</span>
                </div>
                <div id="center">
                    <ul>

                        <Link to="/drdashboard" id="item">
                            <Home className="icons" />
                            <span id="navText">Home</span>
                        </Link>
                        <Link to="/profile" id="item">
                            <AccountCircle className="icons" />
                            <span id="navText">Profile</span>
                        </Link>
                        <Link to="/patientslabs" id="item">
                            <Article className="icons" />
                            <span id="navText">Patients Records</span>
                        </Link>
                        <Link to="/patientslist" id="item">
                            <People className="icons" />
                            <span id="navText">Patients</span>
                        </Link >
                        <Link to="/todo" id="item">
                            <List className="icons" />
                            <span id="navText">To-do List</span>
                        </Link>
                        <Link to="/appointments" id="item">
                            <BookOnline className="icons" />
                            <span id="navText">Appointments</span>
                        </Link>
                        <Link to="/calender" id="item">
                            <CalendarMonth className="icons" />
                            <span id="navText">Calendar</span>
                        </Link>
                        <Link to="/settings" id="item">
                            <Settings className="icons" />
                            <span id="navText">Settings</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default DrSideBar