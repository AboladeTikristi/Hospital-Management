import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
const AdminChart = () => {
    const data = [
        {
            name: 'Page A',
            NewPatients: 4000,
            OldPatients: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            NewPatients: 3000,
            OldPatients: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            NewPatients: 2000,
            OldPatients: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            NewPatients: 2780,
            OldPatients: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            NewPatients: 1890,
            OldPatients: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            NewPatients: 2390,
            OldPatients: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            NewPatients: 3490,
            OldPatients: 4300,
            amt: 2100,
        },
    ];


    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="OldPatients" stroke="#8884d8" />
                    <Line type="monotone" dataKey="NewPatients" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}
export default AdminChart