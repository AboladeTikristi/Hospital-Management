import Dashboardnav from "../pages/Dashboardnav"


const DashboardLayout = ({ children }) => {
    return (
        <main>
            < Dashboardnav/>
            {children}
        </main>
    )
}
export default DashboardLayout