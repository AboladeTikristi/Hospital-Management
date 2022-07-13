import React from "react";
import drJuice from "../assets/JuiceWRLD.jpg"
const Profile = () => {

    return (
        <>
            <main className="w-100 d-flex align-items-center justify-content-center mt-3">
                <div className="card d-flex align-items-center justify-content-center " style={{ width: "90%" }}>
                    <div className="w-100 d-flex p-3">
                        <div style={{ width: "80%" }}>
                            <h6>Name: Dr Who</h6>
                            <div>
                                <h6>Qualification:</h6>
                                <div className="ms-4"> 
                                    <h6>B.sc Chemistry</h6>
                                    <h6>M.B.B.S</h6>
                                    <h6>PhD</h6>
                                </div>
                            </div>
                            <h6>Age: 40</h6>
                            <h6>Sex: Male</h6>
                            <h6>Pronouns: He/Him</h6>
                            <h6>Religion: Atheist</h6>
                        </div>
                        <div style={{ width: "20%" }}>
                            <img src={drJuice} alt="" style={{ width: "100%", height: "150px" }} />
                        </div>

                    </div>

                </div>

            </main>
        </>
    )
}

export default Profile