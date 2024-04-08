import Accordion from "./components/Accordion"
import Header from "./components/Header"
import { principios } from "../../data/principios"
import SectionTemas from "./components/SectionTemas"
import Carossel from "./components/Carossel"
import Image from "next/image"
import { ButtonPrimary } from "./components/Buttons"
import MenuLink from "./components/MenuLink"
import Chart from "./components/Chart"
import Footer from "./components/Footer"

export default function Dev() {
  return (
    <>
      <Header />
      <main className="grid w-full gap-16 mt-16 place-items-center">
        <section
          id="principios"
          className="flex flex-col w-11/12 max-w-[1160px] pt-[130px] -mt-[130px]"
        >
          <h2 className="text-4xl font-bold text-purple">PRINCÍPIOS</h2>
          <h3 className="mb-2 text-xl font-medium leading-tight">
            Princípios de uma universidade como espaço/tempo de aprendizagem
          </h3>
          <div className="flex">
            <Accordion items={principios} />
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
            <Image
              src="/descubra.png"
              width={1160}
              height={670}
              alt="descubra"
            />
            <p className="text-lg leading-none">
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
              <p className="px-8 py-1 text-white rounded-full bg-purple">
                <span className="pr-4 text-white">1.</span>
                Foi escolhido um dos sete princípios que orientam a Unifesspa.
              </p>
              <p className="px-8 py-1 text-white rounded-full bg-purple">
                <span className="pr-4 text-white">2.</span>
                Selecionou um tema do cotidiano da universidade com
                considerações realmente relevante.
              </p>
              <p className="px-8 py-1 text-white rounded-full bg-purple">
                <span className="pr-4 text-white">3.</span>
                Sugeriu uma ação específica relacionada ao tema escolhido,
                alinhada ao princípio selecionado.
              </p>
              <h3 className="text-xl font-medium leading-tight text-balance">
                Ao final, os dados geridos iria passar por análise e seria
                discutido para elaboração de um plano de ação baseado nos
                princípios da universidade como espaço/tempo de aprendizagem.
              </h3>
              <div className="flex flex-col w-full p-4 bg-white rounded-md shadow">
                <h2 className="mb-6 text-4xl font-bold text-purple text-balance">
                  Gráfico de Escutas X Princípios mais sugeridos
                </h2>
                <div className="flex md:p-8">
                  <Chart />
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
