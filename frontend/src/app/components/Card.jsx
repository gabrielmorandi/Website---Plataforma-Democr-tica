import { CheckCircle } from "lucide-react"
import { ButtonPrimary } from "./Buttons"

const Card = ({ compromisso }) => {
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
      <ButtonPrimary text="Ver Mais" href={"/"} />
    </div>
  )
}

export default Card
