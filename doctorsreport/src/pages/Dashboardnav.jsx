import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Appointments from "./Appointments"
import Dashboard from "./Dashboard"
import PatientsLabs from "./PatientsLabs"
import Profile from "./Profile"
import Todo from "./TodoList"

const Dashboardnav = () => {

    return (
        <>
            <div className="d-flex align-items-start w-100">
                <div className="nav flex-column nav-pills shadow" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Patients records</button>
                    <button className="nav-link" id="v-pills-todo-tab" data-bs-toggle="pill" data-bs-target="#v-pills-todo" type="button" role="tab" aria-controls="v-pills-todo" aria-selected="false">To-do List</button>
                    <button className="nav-link" id="v-pills-appointments-tab" data-bs-toggle="pill" data-bs-target="#v-pills-appointments" type="button" role="tab" aria-controls="v-pills-appointments" aria-selected="false">Appointments</button>
                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>

                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <nav className="navbar navbar-expand navbar-light bg-light w-100 shadow pb-2">
                        <div className="container-fluid">
                            <a className="navbar-brand">Welcome, Dr Who</a>
                            <form className="d-flex w-75">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <Dashboard />
                    </div>

                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <Profile />
                    </div>

                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <PatientsLabs />
                    </div>

                    <div className="tab-pane fade" id="v-pills-todo" role="tabpanel" aria-labelledby="v-pills-todo-tab">
                        <Todo />
                    </div>

                    <div className="tab-pane fade" id="v-pills-appointments" role="tabpanel" aria-labelledby="v-pills-appointments-tab">
                        <Appointments />
                    </div>

                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        ...
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboardnav