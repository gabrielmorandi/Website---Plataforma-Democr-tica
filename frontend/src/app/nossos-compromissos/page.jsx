"use client";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Select from "../components/Select";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import ModalCompromisso from "../components/ModalCompromisso";
import { CompromissosEscutas } from "../../../data/CompromissoEscutas";
import { InfosPDTC } from "../../../data/InfosPTDC";

export default function Page() {
  const [principioSelected, setPrincipioSelected] = useState("Todos os Princípios");
  const [temaSelected, setTemaSelected] = useState("Todos os Temas");
  const [diretrizSelected, setDiretrizSelected] = useState("Todas as Diretrizes");
  const [activeSelect, setActiveSelect] = useState("");
  const handleSetActiveSelect = (title) => {
    setActiveSelect(activeSelect !== title ? title : "");
  };
  const [busca, setBusca] = useState("");
  const [codPrincipio, setCodPrincipio] = useState(0);
  const [codTema, setCodTema] = useState(0);
  const [codDiretriz, setCodDiretriz] = useState(0);
  const [compromissosFiltrados, setCompromissosFiltrados] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [compromissoModal, setCompromissoModal] = useState("");
  const [escutaModal, setEscutaModal] = useState([]);

  useEffect(() => {
    const filtrados = CompromissosEscutas.CompromissosEscutas.filter((compromisso) =>
      compromisso.Escutas.some((escuta) => {
        const filtroPrincipio = codPrincipio ? escuta.Cod_Principio === codPrincipio : true;
        const filtroTema = codTema ? escuta.Cod_Tema === codTema : true;
        const filtroDiretriz = codDiretriz ? escuta.Cod_Diretriz === codDiretriz : true;
        const filtroTexto = busca ? escuta.Descricao.toLowerCase().includes(busca.toLowerCase()) : true;
        return filtroPrincipio && filtroTema && filtroDiretriz && filtroTexto;
      })
    );
    setCompromissosFiltrados(filtrados);
  }, [codPrincipio, codTema, codDiretriz, busca]);

  useEffect(() => {
    if (isOpen) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "auto";
    }

    return () => {
      document.querySelector("html").style.overflow = "auto";
    };
  }, [isOpen]);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <Nav inCompromissos={true} />
      <main className="grid w-full gap-16 mt-6 place-items-start" style={{ "minHeight": "calc(100vh - 440px)" }}>
        <div className="grid w-full place-items-center">
          <div className="flex flex-col w-11/12 max-w-[1160px] gap-6">
            <h2 className="text-3xl font-bold sm:text-4xl text-purple">Nossos Compromissos</h2>
            <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
            <Select
                title="Selecionar Princípio"
                selected={principioSelected}
                setSelected={setPrincipioSelected}
                options={InfosPDTC.principio}
                optionDefault="Todos os Princípios"
                setCod={setCodPrincipio}
                isActive={activeSelect === "Selecionar Princípio"}
                setIsActive={handleSetActiveSelect}
              />
              <Select
                title="Selecionar Tema"
                selected={temaSelected}
                setSelected={setTemaSelected}
                options={InfosPDTC.tema}
                optionDefault="Todos os Temas"
                setCod={setCodTema}
                isActive={activeSelect === "Selecionar Tema"}
                setIsActive={handleSetActiveSelect}
              />
              <Select
                title="Selecionar Diretriz"
                selected={diretrizSelected}
                setSelected={setDiretrizSelected}
                options={InfosPDTC.diretriz}
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
                {compromissosFiltrados.length !== 0
                  ? `${compromissosFiltrados.length} Compromissos encontrados!`
                  : "Selecione Todas as Diretrizes!"}{" "}
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {compromissosFiltrados.map((compromisso, index) => (
                <Card
                  key={index}
                  compromisso={compromisso.Descricao}
                  open={open}
                  escuta={compromisso.Escutas}
                  setCompromissoModal={setCompromissoModal}
                  setEscutaModal={setEscutaModal}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <ModalCompromisso
        compromisso={compromissoModal}
        escutas={escutaModal}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        close={close}
      />
      <Footer />
    </>
  );
}
