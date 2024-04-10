"use client"

import React, { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

const data = [
  {
    Dados: "Princípios_X_Escutas",
    data: [
      {
        name: "P1",
        fullName:
          "P1 - Universidade popular com diversidade social e interculturalidade",
        uv: 230,
      },
      {
        name: "P2",
        fullName:
          "P2 - Universidade como espaço de aprendizado, com ações indissociáveis de ensino-pesquisa-extensão e pautada em problemas socialmente relevantes",
        uv: 319,
      },
      {
        name: "P3",
        fullName: "P3 - Universidade Democrática e Autônoma",
        uv: 101,
      },
      {
        name: "P4",
        fullName: "P4 - Unifesspa com Integração Multicampi",
        uv: 91,
      },
      {
        name: "P5",
        fullName: "P5 - Universidade com protagonismo estudantil",
        uv: 114,
      },
      {
        name: "P6",
        fullName:
          "P6 - Universidade com gestão transparente, inclusiva e participativa",
        uv: 151,
      },
      {
        name: "P7",
        fullName:
          "P7 - Universidade com Acolhimento, Saúde e Qualidade de Vida",
        uv: 202,
      },
    ],
  },
  {
    Dados: "Temas_X_Escutas",
    data: [
      {
        name: "T1",
        fullName: "T1 - Acessibilidade",
        uv: 30,
      },
      {
        name: "T2",
        fullName: "T2 - Acesso à Universidade",
        uv: 70,
      },
      {
        name: "T3",
        fullName: "T3 - Administração",
        uv: 113,
      },
      {
        name: "T4",
        fullName: "T4 - Cultura",
        uv: 46,
      },
      {
        name: "T5",
        fullName: "T5 - Diversidade",
        uv: 65,
      },
      {
        name: "T6",
        fullName: "T6 - Ensino de graduação",
        uv: 157,
      },
      {
        name: "T7",
        fullName: "T7 - Ensino de pós-graduação",
        uv: 73,
      },
      {
        name: "T8",
        fullName: "T8 - Esporte",
        uv: 10,
      },
      {
        name: "T9",
        fullName: "T9 - Extensão",
        uv: 61,
      },
      {
        name: "T10",
        fullName: "T10 - Gestão de Pessoas",
        uv: 74,
      },
      {
        name: "T11",
        fullName: "T11 - Infraestrutura",
        uv: 90,
      },
      {
        name: "T12",
        fullName: "T12 - Inovação",
        uv: 11,
      },
      {
        name: "T13",
        fullName: "T13 - Laboratórios",
        uv: 66,
      },
      {
        name: "T14",
        fullName: "T14 - Lazer",
        uv: 13,
      },
      {
        name: "T15",
        fullName: "T15 - Meio Ambiente",
        uv: 23,
      },
      {
        name: "T16",
        fullName: "T16 - Permanência",
        uv: 100,
      },
      {
        name: "T17",
        fullName: "T17 - Pesquisa",
        uv: 81,
      },
      {
        name: "T18",
        fullName: "T18 - Planejamento, orçamento e finanças",
        uv: 102,
      },
      {
        name: "T19",
        fullName: "T19 - Tecnologias de informação e comunicação",
        uv: 23,
      },
    ],
  },
  {
    Dados: "Diretrizes_X_Escutas",
    data: [
      {
        name: "D1",
        fullName: "D1 - Acolhimento, Inclusão Social e Diversidade",
        uv: 275,
      },
      {
        name: "D2",
        fullName: "D2 - Gestão Democrática e Participativa",
        uv: 199,
      },
      {
        name: "D3",
        fullName: "D3 - Gestão Ecológica e Humanizada dos Espaços",
        uv: 13,
      },
      {
        name: "D4",
        fullName: "D4 - Integração: arte, cultura, esporte, lazer e ciência",
        uv: 88,
      },
      {
        name: "D5",
        fullName: "D5 - Política Institucional com Transparência",
        uv: 150,
      },
      {
        name: "D6",
        fullName: "D6 - Retomar a Expansão com Planejamento e Diálogo",
        uv: 128,
      },
      {
        name: "D7",
        fullName: "D7 - Suporte eficiente ao ensino, à pesquisa e à extensão",
        uv: 108,
      },
      {
        name: "D8",
        fullName: "D8 - Trabalho Digno com Saúde e Qualidade de Vida",
        uv: 60,
      },
      {
        name: "D9",
        fullName:
          "D9 - Vivências Formativas e a Indissociabilidade Ensino, Pesquisa e Extensão",
        uv: 187,
      },
    ],
  },
];

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
  const [data, setData] = useState(null)

  useEffect(() => {
    if (id == "Princípios") {
      setData(dataUm)
    }
  }, [id])

  const maxUv = data ? Math.max(...data.map((d) => d.uv)) : null

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
  );
};

export default Chart;
