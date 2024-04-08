"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import React from "react"

const data = [
  {
    name: "P1",
    fullName:
      "P1 - Universidade popular com diversidade social e interculturalidade",
    uv: 300,
  },
  {
    name: "P2",
    fullName:
      "P2 - Universidade como espaço de aprendizado, com ações indissociáveis de ensino-pesquisa-extensão e pautada em problemas socialmente relevantes",
    uv: 400,
  },
  { name: "P3", fullName: "P3 - Universidade Democrática e Autônoma", uv: 200 },
  { name: "P4", fullName: "P4 - Unifesspa com Integração Multicampi", uv: 278 },
  {
    name: "P5",
    fullName: "P5 - Universidade com protagonismo estudantil",
    uv: 300,
  },
  {
    name: "P6",
    fullName:
      "P6 - Universidade com gestão transparente, inclusiva e participativa",
    uv: 400,
  },
  {
    name: "P7",
    fullName: "P7 - Universidade com Acolhimento, Saúde e Qualidade de Vida",
    uv: 200,
  },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { fullName, uv } = payload[0].payload
    return (
      <div className="p-1 bg-white border rounded border-purple max-w-52">
        <p className="text-sm text-purple text-balance">{`${fullName}: ${uv}`}</p>
      </div>
    )
  }

  return null
}

const Chart = () => {
  const maxUv = Math.max(...data.map((d) => d.uv))

  return (
    <div className="w-full h-64 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: -20,
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
          <Bar dataKey="uv" fill="#FFD500" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
