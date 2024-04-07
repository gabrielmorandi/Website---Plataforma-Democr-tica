import Accordion from "../components/Accordion"
import Header from "../components/Header"
import { principios } from "../../../data/principios"
import SectionTemas from "../components/SectionTemas"

export default function Dev() {
  return (
    <>
      <Header />
      <main className="grid w-full gap-16 mt-16 place-items-center">
        <section className="flex flex-col w-11/12 max-w-[1160px]">
          <h2 className="text-4xl font-bold text-purple">PRINCÍPIOS</h2>
          <h3 className="mb-2 text-xl font-medium leading-tight">
            Princípios de uma universidade como espaço/tempo de aprendizagem
          </h3>
          <div className="flex justify-end">
            <Accordion items={principios} />
          </div>
        </section>
        <SectionTemas />
        <div className="size-48"></div>
      </main>
    </>
  )
}
