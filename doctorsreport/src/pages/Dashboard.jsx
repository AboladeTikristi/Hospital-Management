import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import Drchart from "./Drchart"
import "./Dashboard.scss"
const Dashboard = () => {

    return (
        <>
            <main className="w-100 container-fluid" id="dashboardBody">
                <main className="d-flex w-100 justify-content-between" id="dashBody">
                    <div className="card m-2 shadow-lg" style={{ height: "150px", width: "33%" }} id="dashCon">
                        <h5 className="text-center  ">Number of cases for the day</h5>

                    </div>
                    <div className="card m-2 shadow-lg" style={{ height: "150px", width: "33%" }} id="dashCon">
                        <h5 className="text-center  ">Pending Cases</h5>

                    </div>
                    <div className="card m-2 shadow-lg" style={{ height: "150px", width: "33%" }} id="dashCon">
                        <h5 className="text-center  ">Resolved cases</h5>
                    </div>
                </main>
                <main className="w-100 m-2 d-flex"  id="graphDiv">
                    <div className="w-25 shadow-lg card m-2 d-flex align-items-center justify-content-center" style={{ minHeight: "100%" }}  id="graphDiv1">
                        <div className="d-flex align-items-center justify-content-center m-3" style={{ width: "200px", height: "220px" }}>
                            <CircularProgressbar value={70} text={"70%"} />
                        </div>
                        <h6>Percentage of resolved cases</h6>
                    </div>
                    <div className="w-75 card shadow-lg m-2">
                        <Drchart />
                    </div>
                </main>

            </main>
        </>
    )
}
export default Dashboard