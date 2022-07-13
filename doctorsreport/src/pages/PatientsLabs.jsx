import React from "react"
const PatientsLabs = () => {

    return (
        <>
            <main className="row d-flex flex-row justify-content-center align-items-center pt-2" id="signupMain">
                <div className="col-sm-6 card bg-light py-4 my-0" id="signupDiv1">

                    <h2 className="text-center text-dark">Enter Patient's ID</h2>

                    <form action="">
                        <input name="" type="text" className={"form-control my-2"} placeholder="Patient's ID" />


                        <button className="btn btn-info " type="submit">Sign in</button>
                    </form>
                </div>
            </main>
        </>
    )
}
export default PatientsLabs