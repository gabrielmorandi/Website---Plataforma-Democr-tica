import { CheckCircle, ArrowUpRight } from "lucide-react"

const Card = ({ compromisso, open }) => {
  return (
    <div className="flex flex-col bg-white min-h-[225px] gap-1 justify-between p-4 rounded border-[2px] border-purple">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <CheckCircle color="#5A007A" className="min-w-6" />
          <h2 className="text-[19px] font-bold text-purple">
            É nosso Compromisso
          </h2>
        </div>
        <p className="leading-normal -tracking-[1%] line-clamp-5">
          {compromisso}
        </p>
      </div>
      <button
        className="flex gap-2.5 items-center py-2 px-6 justify-between bg-purple transition-colors hover:bg-[#8817b2]"
        onClick={open}
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
