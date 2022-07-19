import { Box, Container, Typography } from '@mui/material';
// import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsNotifications } from '../components/settings/settings-notifications';
import { SettingsPassword } from '../components/settings/settings-password';
const SettingsApp = () => {

    return (
        <>
            {/* <Head>
                <title>
                    Settings | Material Kit
                </title>
            </Head> */}
            <main className="w-100 card my-2 overflow-scroll"  style={{height:"80vh"}}>
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
        </>
    )
}
export default SettingsApp