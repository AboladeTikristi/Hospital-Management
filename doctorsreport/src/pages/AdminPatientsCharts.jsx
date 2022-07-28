import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
const AdminPatientsChart = () => {
    const data = [
        {
            name: 'Page A',
            Female: 4000,
            Male: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            Female: 3000,
            Male: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            Female: 2000,
            Male: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            Female: 2780,
            Male: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            Female: 1890,
            Male: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            Female: 2390,
            Male: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            Female: 3490,
            Male: 4300,
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
                    <Line type="monotone" dataKey="Male" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Female" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}
export default AdminPatientsChart