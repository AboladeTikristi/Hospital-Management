import DrSideBar from "../components/DrSideBar"
const PatientsLabs = () => {

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
                    <main className="row d-flex flex-row justify-content-center align-items-center pt-2" id="signupMain">
                        <div className="col-sm-6 card bg-light py-4 my-0" id="signupDiv1">

                            <h2 className="text-center text-dark">Enter Patient's ID</h2>

                            <form action="">
                                <input name="" type="text" className={"form-control my-2"} placeholder="Patient's ID" />


                                <button className="btn btn-info " type="submit">Sign in</button>
                            </form>
                        </div>
                    </main>
                </div>
            </main>

        </>
    )
}
export default PatientsLabs