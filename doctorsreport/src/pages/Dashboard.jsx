const Dashboard = () => {

    return (
        <>
            <main className="w-100" id="dashboardBody">
                <main className="d-flex w-100 justify-content-between">
                    <div className="card m-2 shadow-sm" style={{ height: "150px", width:"33%" }}>
                        <h5 className="text-center  ">Number of cases for the day</h5>

                    </div>
                    <div className="card m-2 shadow-sm" style={{ height: "150px", width:"33%" }}>
                        <h5 className="text-center  ">Pending Cases</h5>

                    </div>
                    <div className="card m-2 shadow-sm" style={{ height: "150px", width:"33%" }}>
                        <h5 className="text-center  ">Resolved cases</h5>
                    </div>
                </main>

            </main>
        </>
    )
}
export default Dashboard