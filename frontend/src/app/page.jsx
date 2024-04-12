"use client"

import Accordion from "./components/Accordion"
import Header from "./components/Header"
import { InfosPDTC } from "../../data/InfosPTDC"
import SectionTemas from "./components/SectionTemas"
import Carossel from "./components/Carossel"
import Image from "next/image"
import { ButtonPrimary } from "./components/Buttons"
import MenuLink from "./components/MenuLink"
import Chart from "./components/Chart"
import Footer from "./components/Footer"
import { useState } from "react"
import Select from "./components/Select"
import CardCompromissoAnimated from "./components/CardCompromissoAnimated"

export default function Page() {
  const [chart, setChart] = useState("Princípios")
  const options = [
    { title: "Princípios" },
    { title: "Temas" },
    { title: "Diretrizes" },
  ]
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <Header />
      <main className="grid w-full gap-16 mt-16 place-items-center">
        <section
          id="principios"
          className="w-full grid place-items-center pt-[130px] -mt-[130px] relative"
        >
          <div className="flex flex-col w-11/12 max-w-[1160px]">
            <h2 className="text-4xl font-bold text-purple">PRINCÍPIOS</h2>
            <h3 className="mb-2 text-xl font-medium leading-tight">
              Princípios de uma universidade como espaço/tempo de aprendizagem
            </h3>
            <Accordion items={InfosPDTC.principio} />
          </div>
        </section>
        <SectionTemas />
        <section
          id="diretrizes"
          className="grid w-full place-items-center pt-[130px] -mt-[130px]"
        >
          <div className="flex flex-col w-11/12 max-w-[1160px]">
            <h2 className="text-4xl font-bold text-purple">DIRETRIZES</h2>
            <h3 className="text-xl font-medium leading-tight text-balance">
              Os compromissos, elaborados a partir das escutas e da intersecção
              de temas e princípios, foram cuidadosamente analisados para
              atender às necessidades acadêmicas, resultando na criação de
              diretrizes específicas.
            </h3>
          </div>
          <Carossel />
        </section>
        <section
          id="compromissos"
          className="grid w-full place-items-center pt-[130px] -mt-[130px]"
        >
          <div className="flex flex-col w-11/12 max-w-[1160px] z-40">
            <h2 className="text-3xl font-bold text-purple text-balance xs:text-4xl">
              CONHEÇA NOSSOS COMPROMISSOS
            </h2>
            <h3 className="text-xl font-medium leading-tight text-balance">
              Descubra como os princípios e temas se unem para moldar o futuro
              da nossa universidade! 🎓
            </h3>
            <div className="flex flex-col items-center justify-between mt-10 sm:flex-row">
              <div className="flex -mb-[50px] ml-5 sm:ml-0">
                <CardCompromissoAnimated />
              </div>
              <div className="flex md:pb-10 max-h-[545px]">
                <picture>
                  <source
                    srcset="/descubra.png"
                    alt="Descubra"
                    media="(min-width: 768px)"
                  />
                  <img
                    src="/descubra2.png"
                    alt="Descubra"
                    className="max-h-[545px]"
                  />
                </picture>
              </div>
            </div>
            <p className="text-lg leading-none sm:mt-10">
              Veja todos os compromissos agora! Clique para acessar e conhecer
              detalhadamente.
            </p>
            <div className="flex mt-4">
              <ButtonPrimary href="/" text="ACESSAR OS COMPROMISSOS" />
            </div>
          </div>
        </section>
        <section
          id="escutas"
          className="grid w-full place-items-center pt-[130px] -mt-[130px]"
        >
          <div className="flex flex-col w-11/12 max-w-[1160px]">
            <h2 className="text-4xl font-bold text-purple text-balance">
              AS ESCUTAS
            </h2>
            <h3 className="text-xl font-medium leading-tight text-balance">
              O questionário elaborado para as escutas dos alunos consistiu em
              diversas etapas, incluindo a coleta de dados quantitativos que
              forneceram informações valiosas sobre as percepções e opiniões da
              comunidade estudantil.
            </h3>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium leading-tight text-balance">
                Foi elaborado um questionário entre os alunos com os seguintes
                etapas para este processo:
              </h3>
              <p className="flex items-start gap-4 py-1 pl-4 font-bold text-purple">
                <span className="text-white relative rounded-[100%] after:content-[''] after:size-6 after:bg-purple after:absolute after:top-0 after:left-0 after:-z-10 after:rounded-[100%] after:-translate-x-[32.5%]">
                  1
                </span>
                Foi escolhido um dos sete princípios que orientam a Unifesspa.
              </p>
              <p className="flex items-start gap-4 py-1 pl-4 font-bold text-purple">
                <span className="text-white relative rounded-[100%] after:content-[''] after:size-6 after:bg-purple after:absolute after:top-0 after:left-0 after:-z-10 after:rounded-[100%] after:-translate-x-[32.5%]">
                  2
                </span>
                Selecionou um tema do cotidiano da universidade com
                considerações realmente relevante.
              </p>
              <p className="flex items-start gap-4 py-1 pl-4 font-bold text-purple">
                <span className="text-white relative rounded-[100%] after:content-[''] after:size-6 after:bg-purple after:absolute after:top-0 after:left-0 after:-z-10 after:rounded-[100%] after:-translate-x-[32.5%]">
                  3
                </span>
                Sugeriu uma ação específica relacionada ao tema escolhido,
                alinhada ao princípio selecionado.
              </p>
              <h3 className="text-xl font-medium leading-tight text-balance">
                Ao final, os dados geridos iria passar por análise e seria
                discutido para elaboração de um plano de ação baseado nos
                princípios da universidade como espaço/tempo de aprendizagem.
              </h3>
              <div className="flex flex-col w-full p-4 bg-white rounded-md shadow-sm">
                <div className="flex flex-col items-start justify-between gap-4 py-2 mb-6 sm:items-center sm:flex-row">
                  <h2 className="text-4xl font-bold leading-none text-purple text-balance">
                    Gráfico de Escutas X Princípios mais sugeridos
                  </h2>
                  <Select
                    selected={chart}
                    setSelected={setChart}
                    isPurple={true}
                    options={options}
                    isActive={isActive}
                    setIsActive={setIsActive}
                  />
                </div>
                <div className="flex">
                  <Chart id={chart} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid w-full place-items-center">
          <div className="flex flex-col w-11/12 max-w-[1160px]">
            <h2 className="text-4xl font-bold text-purple text-balance">FAQ</h2>
            <h3 className="text-xl font-medium leading-tight ">
              Se você tem dúvidas, nós temos respostas!
            </h3>
            <MenuLink text={"O que são princípios?"} href={"#principios"} />
            <MenuLink text={"O que são temas?"} href={"#temas"} />
            <MenuLink text={"O que são diretrizes?"} href={"#diretrizes"} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
