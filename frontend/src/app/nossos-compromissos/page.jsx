"use client"
import { useState } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Select from "../components/Select"
import SearchBar from "../components/SearchBar"
import Card from "../components/Card"
import { principios } from "@/../data/principios"
import { temas } from "@/../data/temas"
import { diretrizes } from "@/../data/diretrizes"
import { compromissos } from "@/../data/compromissos"

export default function Page() {
  const [principioSelected, setPrincipioSelected] = useState(
    "Todos os Princípios"
  )
  const [temaSelected, setTemaSelected] = useState("Todos os Temas")
  const [diretrizSelected, setDiretrizSelected] = useState(
    "Todas as Diretrizes"
  )
  const [activeSelect, setActiveSelect] = useState("")
  const handleSetActiveSelect = (title) => {
    setActiveSelect(activeSelect !== title ? title : "")
  }
  const [busca, setBusca] = useState("")

  return (
    <>
      <Nav inCompromissos={true} />
      <main className="grid w-full gap-16 mt-12 place-items-center">
        <div className="flex flex-col w-11/12 max-w-[1160px] gap-6">
          <h2 className="text-4xl font-bold text-purple">
            Nossos Compromissos
          </h2>
          <div className="grid mt-6 gap-x-6 gap-y-4 sm:grid-cols-2">
            <Select
              title="Selecionar Princípio"
              selected={principioSelected}
              setSelected={setPrincipioSelected}
              options={principios}
              optionDefault="Todos os Princípios"
              isActive={activeSelect === "Selecionar Princípio"}
              setIsActive={handleSetActiveSelect}
            />
            <Select
              title="Selecionar Tema"
              selected={temaSelected}
              setSelected={setTemaSelected}
              options={temas}
              optionDefault="Todos os Temas"
              isActive={activeSelect === "Selecionar Tema"}
              setIsActive={handleSetActiveSelect}
            />
            <Select
              title="Selecionar Diretriz"
              selected={diretrizSelected}
              setSelected={setDiretrizSelected}
              options={diretrizes}
              optionDefault="Todas as Diretrizes"
              isActive={activeSelect === "Selecionar Diretriz"}
              setIsActive={handleSetActiveSelect}
            />
            <SearchBar
              placeholder="Buscar Palavra-chave"
              value={busca}
              onChange={(ev) => setBusca(ev.target.value)}
            />
          </div>
          <div className="flex">
            <h3 className="text-xl font-semibold border-b-2 border-purple">
              {compromissos.length} Compromissos encontrados no total
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {compromissos.map((c, index) => (
              <Card key={index} compromisso={c.compromisso} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
