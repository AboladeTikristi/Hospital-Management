import "./DrSideBar.scss"
import { Link } from "react-router-dom"
import { Home, AccountCircle, List, Article, People, BookOnline, CalendarMonth, Settings } from '@mui/icons-material';
const AdminSideBar = () => {

    return (
        <>
            <div id="sidebar">
                <div id="firstLogo">
                    <span>MEDICARE</span>
                </div>
                <div id="center">
                    <ul>

                        <Link to="/admindashboard" id="item">
                            <Home className="icons" />
                            <span id="navText">Home</span>
                        </Link>
                        <Link to="/adminappointment" id="item">
                            <BookOnline className="icons" />
                            <span id="navText">Appointments</span>
                        </Link>
                        <Link to="/adminpatient" id="item">
                            <People className="icons" />
                            <span id="navText">Patients</span>
                        </Link >
                        <Link to="/admincalender" id="item">
                            <CalendarMonth className="icons" />
                            <span id="navText">Calendar</span>
                        </Link>
                        <Link to="/admintodo" id="item">
                            <List className="icons" />
                            <span id="navText">To-do List</span>
                        </Link>
                        <Link to="/adminsettings" id="item">
                            <Settings className="icons" />
                            <span id="navText">Settings</span>
                        </Link>
                        {/* <Link to="/#" id="item">
                            <AccountCircle className="icons" />
                            <span id="navText">Profile</span>
                        </Link>
                        <Link to="/#" id="item">
                            <Article className="icons" />
                            <span id="navText">Patients Records</span>
                        </Link> */}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default AdminSideBar