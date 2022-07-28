import AdminSideBar from "../components/AdminSideBar"
import AdminPatientsCharts from "./AdminPatientsCharts"
const AdminPatients = () => {
    return (
        <>
            <main className="w-100 d-flex container-fluid">
                <div>
                    <AdminSideBar />
                </div>
                <div id="dahsbar" className="w-100" style={{}}>
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
                        <div className="w-100 mx-2" style={{ overflowY: "scroll" }}>
                            <h5 className="text-center my-2"></h5>
                            <div className="w-100 card" id="appointSubDiv" style={{ height: "250px", overflowY: "scroll" }}>
                                <h6 className="text-center">These are the list of patients in the hospital</h6>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">S/N</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Ailment</th>
                                            <th scope="col">NOK</th>
                                            <th scope="col">NOK contact info</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark Twain</td>
                                            <td>Male</td>
                                            <td>25</td>
                                            <td>Ogbomosho</td>
                                            <td>123-456-789</td>
                                            <td>Malaria</td>
                                            <td>Mrs Twain</td>
                                            <td>123-456-789</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark Twain</td>
                                            <td>Male</td>
                                            <td>25</td>
                                            <td>Ogbomosho</td>
                                            <td>123-456-789</td>
                                            <td>Malaria</td>
                                            <td>Mrs Twain</td>
                                            <td>123-456-789</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark Twain</td>
                                            <td>Male</td>
                                            <td>25</td>
                                            <td>Ogbomosho</td>
                                            <td>123-456-789</td>
                                            <td>Malaria</td>
                                            <td>Mrs Twain</td>
                                            <td>123-456-789</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark Twain</td>
                                            <td>Male</td>
                                            <td>25</td>
                                            <td>Ogbomosho</td>
                                            <td>123-456-789</td>
                                            <td>Malaria</td>
                                            <td>Mrs Twain</td>
                                            <td>123-456-789</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark Twain</td>
                                            <td>Male</td>
                                            <td>25</td>
                                            <td>Ogbomosho</td>
                                            <td>123-456-789</td>
                                            <td>Malaria</td>
                                            <td>Mrs Twain</td>
                                            <td>123-456-789</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark Twain</td>
                                            <td>Male</td>
                                            <td>25</td>
                                            <td>Ogbomosho</td>
                                            <td>123-456-789</td>
                                            <td>Malaria</td>
                                            <td>Mrs Twain</td>
                                            <td>123-456-789</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <section className="w-75 card my-3" style={{ height: "300px" }}>
                                <h6 className="text-center">Admitted Patients' Gender</h6>
                                <AdminPatientsCharts />
                            </section>
                        </div>

                    </div>

                </div>
            </main>
        </>
    )
}
export default AdminPatients