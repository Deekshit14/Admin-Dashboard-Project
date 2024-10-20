// import "./chartBox.scss";
// import { Link } from "react-router-dom";
// import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";


// type Props = {
//      color: string;
//      icon: string;
//      title: string;
//      dataKey: string;
//      number: number | string;
//      percentage: number;
//      chartData: object[];
// }


// const ChartBox = (props: Props) => {
//      return ( 
//           <div className = "chartBox">
//                <div className="boxInfo">
//                     <div className="title">
//                          <img src={props.icon} alt="" />
//                          <span>{props.title}</span>
//                     </div>
//                     <h1>{props.number}</h1>
//                     <Link to = "/" style = {{color: props.color}}>View all</Link>
//                </div>
//                <div className="chartInfo">
//                     <div className="chart">
//                     <ResponsiveContainer width="99%" height="100%">
//                          <LineChart data={props.chartData}>
//                               <Tooltip 
//                                    contentStyle={{background: "transparent", border: "none"}}
//                                    labelStyle={{display: "none"}}     
//                                    position={{x:20, y:30}}
//                               />
//                               <Line type="monotone" 
//                                    dataKey={props.dataKey} 
//                                    stroke={props.color}
//                                    strokeWidth={2} 
//                                    dot = {false}
//                               />
//                          </LineChart>
//                     </ResponsiveContainer>
//                     </div>
//                     <div className="texts">
//                          <span className="percentage" style = {{color: props.percentage<0 ? "tomato" : "limegreen"}}>{props.percentage}</span>
//                          <span className="duration">This month</span>
//                     </div>
//                </div>
//           </div>
//       );
// }
 

// export default ChartBox;





import "./chartBox.scss";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { useState, useEffect } from "react";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
     const [tooltipX, setTooltipX] = useState(20); // Default value for tooltip X position
     const [tooltipY, setTooltipY] = useState(20); // Default value for tooltip Y position

     // Function to adjust tooltip position based on screen size
     const handleResize = () => {
          if (window.innerWidth > 1300) {
               setTooltipX(-23); 
               setTooltipY(80);
          }
          else if (window.innerWidth > 768){
               setTooltipX(-50); 
               setTooltipY(25);
          } 
          else {
               setTooltipX(20); 
               setTooltipY(50);
          }
     };


  // Use effect to detect window resize and adjust the tooltip position
  useEffect(() => {
    handleResize(); // Set initial value based on current screen size
    window.addEventListener("resize", handleResize);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: tooltipX, y: tooltipY }} // Tooltip x-position based on screen size
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
