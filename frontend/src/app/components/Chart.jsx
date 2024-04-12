"use client";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { chartData } from "@/../data/chartData";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { fullName, uv } = payload[0].payload;
    return (
      <div className="p-1 bg-white border rounded border-purple max-w-52">
        <p className="text-sm text-purple text-balance">{`${fullName}: ${uv}`}</p>
      </div>
    );
  }
  return null;
};

const Chart = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = () => {
      const filteredData = chartData.find((item) => item.Dados === id);

      setData(filteredData ? filteredData.data : null);
    };

    loadData();
  }, [id]);

  const totalUv = data ? data.reduce((acc, cur) => acc + cur.uv, 0) : 0;

  const maxUv = data ? Math.max(...data.map((d) => d.uv)) : null;

  const colors = {
    Princípios: {
      fill: "#5A007A",
      stroke: "#5A007A",
    },
    Temas: {
      fill: "#FFD500",
      stroke: "#FFD500",
    },
    Diretrizes: {
      fill: "rgba(90, 0, 122, 0.5)",
      stroke: "#5A007A",
    },
  };

  return (
    <div className="w-full h-64 md:h-96">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="overflow-visible px-50"
      >
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 5,
            left: -25,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#5A007A" />
          <XAxis dataKey="name" stroke="#5A007A" />
          <YAxis stroke="#5A007A" domain={[0, maxUv * 1.2]} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(90, 0, 122, 0.1)" }}
          />
          <Bar
            dataKey="uv"
            fill={colors[id].fill}
            stroke={colors[id].stroke}
            strokeWidth={2}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-center ">
        <p className="py-2 text-sm text-purple">Total de Escutas: {totalUv}</p>
      </div>
    </div>
  )
};

export default Chart;
