import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { Tooltip } from "recharts";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const genres = [
    "React",
    "JavaScript",
    "Node",
    "jQuery",
    "AngularJS",
    "AngularJS-Remote",
  ];

  const getData = () => {
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) =>
        summary.split(" ").includes(genre)
      ).length;
      return { name: genre, value };
    });
    return data;
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload.name} : ${payload[0].value}%`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          outerRadius={130}
        />
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
