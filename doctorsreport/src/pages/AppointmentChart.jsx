import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
const AppointmentChart = () => {
    const data = [
        {
            name: 'Page A',
            Male: 4000,
            Female: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            Male: 3000,
            Female: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            Male: 2000,
            Female: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            Male: 2780,
            Female: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            Male: 1890,
            Female: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            Male: 2390,
            Female: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            Male: 3490,
            Female: 4300,
            amt: 2100,
        },
    ];


    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Male" fill="#8884d8" />
                    <Bar dataKey="Female" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}
export default AppointmentChart