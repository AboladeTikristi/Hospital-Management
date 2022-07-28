import AdminSideBar from "../components/AdminSideBar"
import AdminChart from "./AdminChart"
import { Face, ContentCut, Person, AttachMoney } from '@mui/icons-material';
import AdminChart2 from "./AdminChart2";

const AdminDashboard = () => {

    return (
        <>
            <main className="w-100 d-flex container-fluid">
                <div>
                    <AdminSideBar />
                </div>
                <div id="dahsbar" className="w-100">
                    <nav className="navbar navbar-expand navbar-light bg-light mx-2 shadow pb-2 w-100" id="genNav">
                        <div className="container-fluid">
                            <a className="navbar-brand">Welcome, Admin</a>
                            <form className="d-flex w-75">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <div className="w-100">
                        <section className="w-100 d-flex">
                            <div className="w-25 card my-2 mx-2">
                                <div className="w-100 d-flex justify-content-between px-2 py-2">
                                    <Face className="card bg-warning text-light" fontSize="large" />
                                    <h5>Total Appointments</h5>
                                </div>
                                <h4 className="text-end mx-2">700</h4>
                            </div>

                            <div className="w-25 card my-2 mx-2">
                                <div className="w-100 d-flex justify-content-between px-2 py-2">
                                    <ContentCut className="card bg-danger text-light" fontSize="large" />
                                    <h5>Total Sugeries</h5>
                                </div>
                                <h4 className="text-end mx-2">70</h4>
                            </div>

                            <div className="w-25 card my-2 mx-2">
                                <div className="w-100 d-flex justify-content-between px-2 py-2">
                                    <Person className="card bg-info text-light" fontSize="large" />
                                    <h5>Patients</h5>
                                </div>
                                <h4 className="text-end mx-2">300</h4>
                            </div>

                            <div className="w-25 card my-2 mx-2">
                                <div className="w-100 d-flex justify-content-between px-2 py-2">
                                    <AttachMoney className="card bg-success text-light" fontSize="large" />
                                    <h5>Daily Earnings</h5>
                                </div>
                                <h4 className="text-end mx-2">$700,000</h4>
                            </div>
                        </section>
                        <section className="w-100 d-flex mt-5">
                            <div className="card w-50 mx-2" style={{ height: "400px" }}>
                                <p className="text-center">Patient's Survey</p>
                                <AdminChart />
                            </div>
                            <div className="card w-50 mx-2" style={{ height: "400px" }}>
                                <p className="text-center">Cases Survey</p>
                                <AdminChart2 />
                            </div>
                        </section>

                    </div>

                </div>
            </main>
        </>
    )
}
export default AdminDashboard