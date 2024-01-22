import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../styles/graph.css";
const PieChartComp = () => {
  const COLORS = ["#82ca9d", "#FF8042", "#FFBB28"];

  const pieData = [
    {
      name: "Correct Questions",
      value: 6,
    },
    {
      name: "Incorrect Questions",
      value: 3,
    },
    {
      name: "Skipped Questions",
      value: 1,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#000",
            padding: "2px 5px",
            border: "1px solid #cccc",
            color: "#ffffff",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };

  return (
    <PieChart width={730} height={400}>
      <Pie
        data={pieData}
        color="#000000"
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <br />
      <br />
      <br />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
    </PieChart>
  );
};

export default PieChartComp;
