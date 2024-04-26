import { useState } from "react"
import { CheckCircle, ArrowUpRight, MessageCircle } from "lucide-react"
import { InfosPDTC } from "../../../data/InfosPTDC"

const Card = ({
  compromisso,
  open,
  escuta,
  setEscutaModal,
  setCompromissoModal,
}) => {
  const [pHover, setPHover] = useState(false)
  const [tHover, setTHover] = useState(false)
  const [dHover, setDHover] = useState(false)
  const uniqueEscutas = (escutas) => {
    const unique = []
    const descriptions = new Set()

    escutas.forEach((escuta) => {
      if (!descriptions.has(escuta.Descricao)) {
        descriptions.add(escuta.Descricao)
        unique.push(escuta)
      }
    })
    return unique
  }

  return (
    <div className="relative flex flex-col bg-white min-h-[225px] gap-1 justify-between p-4 rounded border-[2px] border-purple animate-cardUpCompromissos">
      <div className="flex flex-col gap-1">
        <div className="absolute right-0 flex gap-3 -top-5">
          {compromisso.Max_Principio && (
            <div
              className="relative cursor-default"
              onMouseEnter={() => setPHover(true)}
              onMouseLeave={() => setPHover(false)}
            >
              <MessageCircle className="fill-purple stroke-purple size-9" />
              <p className="absolute top-0 left-0 w-full leading-9 text-center text-yellow">
                {compromisso.Max_Principio}
              </p>
              <div
                className="absolute w-max max-w-[235px] -z-50 font-semibold leading-tight text-center m text-balance opacity-0 bottom-0 bg-yellow text-purple text-sm data-[state=active]:z-50 data-[state=active]:bottom-10 data-[state=active]:opacity-100 transition-all delay-150 p-2 rounded-lg left-1/2 -translate-x-1/2"
                data-state={pHover ? "active" : "inactive"}
              >
                {InfosPDTC.principio.map((p) => {
                  if (p.cod == compromisso.Max_Principio) {
                    return p.title
                  }
                })}
              </div>
            </div>
          )}
          {compromisso.Max_Tema && (
            <div
              className="relative cursor-default"
              onMouseEnter={() => setTHover(true)}
              onMouseLeave={() => setTHover(false)}
            >
              <MessageCircle className="fill-purple stroke-purple size-9" />
              <p className="absolute top-0 left-0 w-full leading-9 text-center text-yellow">
                {compromisso.Max_Tema}
              </p>
              <div
                className="absolute w-max max-w-[235px] -z-50 font-semibold leading-tight text-center m text-balance opacity-0 bottom-0 bg-yellow text-purple text-sm data-[state=active]:z-50 data-[state=active]:bottom-10 data-[state=active]:opacity-100 transition-all delay-150 p-2 rounded-lg left-1/2 -translate-x-1/2"
                data-state={tHover ? "active" : "inactive"}
              >
                {InfosPDTC.tema.map((p) => {
                  if (p.cod == compromisso.Max_Tema) {
                    return p.title
                  }
                })}
              </div>
            </div>
          )}
          {compromisso.Max_Diretriz && (
            <div
              className="relative cursor-default"
              onMouseEnter={() => setDHover(true)}
              onMouseLeave={() => setDHover(false)}
            >
              <MessageCircle className="fill-purple stroke-purple size-9" />
              <p className="absolute top-0 left-0 w-full leading-9 text-center text-yellow">
                {compromisso.Max_Diretriz}
              </p>
              <div
                className="absolute w-max max-w-[235px] -z-50 font-semibold leading-tight text-center m text-balance opacity-0 bottom-0 bg-yellow text-purple text-sm data-[state=active]:z-50 data-[state=active]:bottom-10 data-[state=active]:opacity-100 transition-all delay-150 p-2 rounded-lg -right-4 sm:-right-8 "
                data-state={dHover ? "active" : "inactive"}
              >
                {InfosPDTC.diretriz.map((p) => {
                  if (p.cod == compromisso.Max_Diretriz) {
                    return p.title
                  }
                })}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle color="#5A007A" className="min-w-6" />
          <h2 className="text-[19px] font-bold text-purple">
            É nosso Compromisso
          </h2>
        </div>
        <p className="leading-normal -tracking-[1%] line-clamp-5">
          {compromisso.Descricao}
        </p>
      </div>
      <button
        className="flex gap-2.5 items-center py-2 px-6 justify-between bg-purple transition-colors hover:bg-[#8817b2]"
        onClick={() => {
          open()
          setCompromissoModal(compromisso.Descricao)
          setEscutaModal(uniqueEscutas(escuta))
        }}
        aria-label={compromisso.Descricao}
      >
        <p className="font-bold leading-6 transition-colors text-yellow">
          Ver Mais
        </p>
        <ArrowUpRight color="#FFD500" className="min-w-6" />
      </button>
    </div>
  )
}

export default Card
