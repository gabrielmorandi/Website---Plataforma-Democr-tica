"use client"
import { useState, useEffect } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Select from "../components/Select"
import SearchBar from "../components/SearchBar"
import Card from "../components/Card"
import { principios } from "@/../data/principios"
import { temas } from "@/../data/temas"
import { diretrizes } from "@/../data/diretrizes"
import { compromissos } from "@/../data/compromissos"
import ModalCompromisso from "../components/ModalCompromisso"

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
  const [codPrincipio, setCodPrincipio] = useState(0)
  const [codTema, setCodTema] = useState(0)
  const [codDiretriz, setCodDiretriz] = useState(0)
  const [compromissosFiltrados, setCompromissosFiltrados] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const filtrados = compromissos.filter((compromisso) =>
      compromisso.escutas.some((escuta) => {
        const filtroPrincipio = codPrincipio
          ? escuta.cod_principio === codPrincipio
          : true
        const filtroTema = codTema ? escuta.cod_tema === codTema : true
        const filtroDiretriz = codDiretriz
          ? escuta.cod_diretriz === codDiretriz
          : true
        const filtroTexto = busca
          ? compromisso.compromisso.toLowerCase().includes(busca.toLowerCase())
          : true
        return filtroPrincipio && filtroTema && filtroDiretriz && filtroTexto
      })
    )
    setCompromissosFiltrados(filtrados)
  }, [codPrincipio, codTema, codDiretriz, busca])

  useEffect(() => {
    if (isOpen) {
      document.querySelector("html").style.overflow = "hidden"
    } else {
      document.querySelector("html").style.overflow = "auto"
    }

    return () => {
      document.querySelector("html").style.overflow = "auto"
    }
  }, [isOpen])

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <>
      <Nav inCompromissos={true} />
      <main
        className="grid w-full gap-16 mt-6 place-items-start"
        style={{ "min-height": "calc(100vh - 440px)" }}
      >
        <div className="grid w-full place-items-center">
          <div className="flex flex-col w-11/12 max-w-[1160px] gap-6">
            <h2 className="text-3xl font-bold sm:text-4xl text-purple">
              Nossos Compromissos
            </h2>
            <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
              <Select
                title="Selecionar Princípio"
                selected={principioSelected}
                setSelected={setPrincipioSelected}
                options={principios}
                optionDefault="Todos os Princípios"
                setCod={setCodPrincipio}
                isActive={activeSelect === "Selecionar Princípio"}
                setIsActive={handleSetActiveSelect}
              />
              <Select
                title="Selecionar Tema"
                selected={temaSelected}
                setSelected={setTemaSelected}
                options={temas}
                optionDefault="Todos os Temas"
                setCod={setCodTema}
                isActive={activeSelect === "Selecionar Tema"}
                setIsActive={handleSetActiveSelect}
              />
              <Select
                title="Selecionar Diretriz"
                selected={diretrizSelected}
                setSelected={setDiretrizSelected}
                options={diretrizes}
                setCod={setCodDiretriz}
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
                {compromissosFiltrados && compromissosFiltrados.length != 0
                  ? compromissosFiltrados.length + " Compromissos encontrados!"
                  : compromissosFiltrados &&
                    compromissosFiltrados.length == 0 &&
                    busca == ""
                  ? "Selecione Todas as Diretrizes!"
                  : compromissosFiltrados &&
                    compromissosFiltrados.length == 0 &&
                    busca != ""
                  ? "0 Compromissos encontrados!"
                  : ""}{" "}
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {compromissosFiltrados &&
                compromissosFiltrados.map((c, index) => (
                  <Card key={index} compromisso={c.compromisso} open={open} />
                ))}
            </div>
          </div>
        </div>
      </main>
      <ModalCompromisso
        compromisso={
          "Definir uma estratégia para otimizar os contratos de vigilância patrimonial, locação de veículos, conservação predial, manutenção de veiculos,  manutenção de aparelhos de ar condicionado, de locação de mão de obra e de limpeza, reduzindo custos e aprimorando os serviços"
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        close={close}
      />
      <Footer />
    </>
  )
}
