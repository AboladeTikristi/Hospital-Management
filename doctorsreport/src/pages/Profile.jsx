import drJuice from "../JuiceWRLD.jpg"
import DrSideBar from "../components/DrSideBar"
const Profile = () => {

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
                    <main className="w-100 d-flex align-items-center justify-content-center mt-3 container" style={{ height: "86vh" }} id="mainProfile">
                        <div className="card mx-3 " style={{ width: "30%", borderRadius: "10px", height: "100%" }} id="subProfile1">
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", borderRadius: "10px" }} className="py-3 bg bg-primary">
                                <img src={drJuice} alt="" style={{ width: "50%", height: "160px", borderRadius: "100%" }} />
                            </div>
                            <div className="w-100 d-flex p-3">
                                <div style={{ width: "80%" }} className="text-center">
                                    <h6>Name: Dr Who</h6>
                                    <h6>Age: 40</h6>
                                    <h6>Sex: Male</h6>
                                    <h6>Address: No 1 Woo street, off Huncho avenue</h6>
                                    <h6>Contact info: 423-324-234 </h6>
                                    <h6>Email: drwho@gmail.com</h6>
                                </div>


                            </div>

                        </div>
                        <div className="card mx-3" style={{ width: "70%", borderRadius: "10px", height: "100%" }} id="subProfile2">
                            <h5 className="my-3 text-center">About me</h5>
                            <p className="text-center mx-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Facilis dicta reprehenderit ducimus ratione fuga veritatis aliquid minima deleniti vel qui,
                                dolore ullam dolores voluptates eveniet atque quas. Magnam neque nostrum odit,
                                accusamus expedita odio fugit debitis dicta ab placeat alias nam ex rerum voluptas earum,
                                ducimus itaque commodi corrupti sunt illum corporis, aperiam ipsa?
                                Suscipit explicabo facere nobis dolor tempore distinctio aliquid sequi vel repudiandae,
                                cumque iste soluta doloremque saepe non, dignissimos dicta nihil quae delectus quia aliquam debitis incidunt ea voluptatibus quo?
                                Nesciunt, quis beatae deserunt repellat fugiat provident molestiae nam mollitia odit quibusdam tenetur eos sunt voluptas rem!
                            </p>
                            <h6 className="ms-3">Qualifications</h6>
                            <p className="ms-3">B.Sc Chemistry</p>
                            <p className="ms-3">M.B.B.S</p>
                            <p className="ms-3">M.Sc Theoretical chemistry</p>
                            <p className="ms-3">PhD Pharmaceutical chemistry</p>
                        </div>

                    </main>
                </div>
            </main>

        </>
    )
}

export default Profile