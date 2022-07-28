import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
const AdminChart2 = () => {
    const data = [
        {
            name: 'Page A',
            TotalCases: 4000,
            ResolvedCases: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            TotalCases: 3000,
            ResolvedCases: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            TotalCases: 2000,
            ResolvedCases: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            TotalCases: 2780,
            ResolvedCases: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            TotalCases: 1890,
            ResolvedCases: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            TotalCases: 2390,
            ResolvedCases: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            TotalCases: 3490,
            ResolvedCases: 4300,
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
                    <Bar dataKey="TotalCases" fill="#8884d8" />
                    <Bar dataKey="ResolvedCases" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}
export default AdminChart2