import { useState } from "react"
import { CheckCircle, ArrowUpRight, MessageCircle } from "lucide-react"
import { InfosPDT } from "../../../data/InfosPTD"
import BalloonCard from "./BalloonCard"

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
            <BalloonCard content={compromisso.Max_Principio} type={1} />
          )}
          {compromisso.Max_Tema && (
            <BalloonCard content={compromisso.Max_Tema} type={2} />
          )}
          {compromisso.Max_Diretriz && (
            <BalloonCard content={compromisso.Max_Diretriz} type={3} />
          )}
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle color="#5A007A" className="min-w-6" />
          <h2 className="text-[19px] font-bold text-purple">
            É nosso compromisso
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
