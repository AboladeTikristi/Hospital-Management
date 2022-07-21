import DrSideBar from "../components/DrSideBar"
const Appointments = () => {

    return (
        <>
               <main className="w-100 d-flex">
                <div>
                    <DrSideBar />
                </div>
                <div id="dahsbar" className="w-100">
                    <nav className="navbar navbar-expand navbar-light bg-light mx-2 shadow pb-2" id="genNav">
                        <div className="container-fluid">
                            <a className="navbar-brand">Welcome, Dr Who</a>
                            <form className="d-flex w-75">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <main className="row d-flex flex-column justify-content-center align-items-center">
                <div className="card mt-3" style={{ width: "90%" }} >
                    <h5 className="text-center">Welcome Dr Who. These are your appointments for today</h5>
                    <div className="w-100 d-flex justify-content-center align-items-center" id="appointDiv">
                        <div className="w-50 card mx-2  py-2 my-4" id="appointSubDiv">
                            <h6 className="text-center">Physical Appointments</h6>
                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                        </div>


                        <div className="w-50 card mx-2 py-2 my-4" id="appointSubDiv">
                            <h6 className="text-center">Online Appointments</h6>
                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>

                            <div className="form-check my-2 mx-2" id="appointmentList">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Lorem ipsum dolor sit amet.
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                        </div>

                    </div>
                </div>
            </main>
                </div>
            </main>
        </>
    )
}
export default Appointments