import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./bigChartBox.scss";


const data = [
     {
       name: "Sun",
       mobile: 3000,
       laptop: 2400,
       tablet: 2400,
     },
     {
       name: "Mon",
       mobile: 3000,
       laptop: 1398,
       tablet: 2210,
     },
     {
       name: "Tue",
       mobile: 2780,
       laptop: 3908,
       tablet: 2000,
     },
     {
       name: "Wed",
       mobile: 2000,
       laptop: 9800,
       tablet: 2290,
     },
     {
       name: "Thu",
       mobile: 1890,
       laptop: 4800,
       tablet: 2181,
     },
     {
       name: "Fri",
       mobile: 2390,
       laptop: 3800,
       tablet: 2500,
     },
     {
       name: "Sat",
       mobile: 2300,
       laptop: 1300,
       tablet: 1100,
     },
];


const BogChartBox = () => {
     return ( 
          <div className="bigChartBox">
               <h1>Revenue Analytics</h1>
               <div className="chart">
               <ResponsiveContainer width="99%" height="100%">
                    <AreaChart
                         data={data}
                         margin={{
                         top: 10,
                         right: 30,
                         left: 0,
                         bottom: 0,
                         }}
                    >

                         <XAxis dataKey="name" />
                         <YAxis />
                         <Tooltip />
                         <Area type="monotone" dataKey="tablet" stackId="1" stroke="#8884d8" fill="#8884d8" />
                         <Area type="monotone" dataKey="laptop" stackId="1" stroke="#00C49F" fill="#00C49F" />
                         <Area type="monotone" dataKey="mobile" stackId="1" stroke="orange" fill="orange" />
                    </AreaChart>
               </ResponsiveContainer>
               </div>
          </div>
      );
}
 
export default BogChartBox;