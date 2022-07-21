import { Box, Container, Typography } from '@mui/material';
// import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsNotifications } from '../components/settings/settings-notifications';
import { SettingsPassword } from '../components/settings/settings-password';
import DrSideBar from "../components/DrSideBar"
const SettingsApp = () => {

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
                    {/* <Head>
                <title>
                    Settings | Material Kit
                </title>
            </Head> */}
                    <main className="w-100 card my-2 overflow-scroll" style={{ height: "80vh" }}>
                        <Box
                            component="main"
                            sx={{
                                flexGrow: 1,
                                py: 8
                            }}
                        >
                            <Container maxWidth="lg">
                                <Typography
                                    sx={{ mb: 3 }}
                                    variant="h4"
                                >
                                    Settings
                                </Typography>
                                <SettingsNotifications />
                                <Box sx={{ pt: 3 }}>
                                    <SettingsPassword />
                                </Box>
                            </Container>
                        </Box>
                    </main>
                </div>
            </main>
        </>
    )
}
export default SettingsApp

