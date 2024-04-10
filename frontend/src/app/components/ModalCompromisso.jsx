"use client"
import { CheckCircle, Ear, Share2 } from "lucide-react"

const ModalCompromisso = ({
  compromisso,
  escutas,
  isOpen,
  setIsOpen,
  close,
}) => {
  return (
    <div
      className="fixed z-50 grid w-full h-screen place-items-end -bottom-full bg-zinc-900/80 data-[state=open]:bottom-0 transition-opacity"
      data-state={isOpen ? "open" : "closed"}
    >
      <button className="w-full h-full cursor-default" onClick={close} />
      <div
        className="fixed -bottom-full transition-all grid w-full h-full bg-white place-items-start rounded-t-3xl max-h-[80%] sm:max-h-[62.5%] overflow-scroll data-[state=open]:bottom-0"
        data-state={isOpen ? "open" : "closed"}
      >
        <div className="relative grid w-full place-items-center">
          <div className="w-11/12 max-w-[1160px] flex flex-col pb-2 gap-2">
            <div className="sticky top-0 z-50 flex flex-col gap-2 py-2 bg-white">
              <div
                className="w-[175px] bg-purple self-center rounded-full h-3 cursor-pointer"
                onClick={close}
              />
              <div className="flex items-center gap-2 z-[100]">
                <CheckCircle
                  color="#5A007A"
                  width={30}
                  height={30}
                  className="min-w-[30px]"
                />
                <h2 className="text-xl font-bold sm:text-3xl text-purple">
                  É nosso Compromisso
                </h2>
              </div>
            </div>
            <div className="flex px-4 py-2 font-semibold border-[2px] rounded text-purple border-purple">
              {compromisso}
            </div>
            <div className="flex flex-col font-semibold border-[2px] rounded text-purple border-purple">
              <div className="flex items-center w-full gap-2 px-4 py-3 bg-purple">
                <Ear color="white" />
                <h2 className="text-2xl leading-none text-white">Escutas</h2>
              </div>
              <div className="flex flex-col px-2 py-2">
                <div className="flex p-4 border-[2px] rounded border-purple max-w-[768px] text-purple text-lg leading-tight font-medium">
                  Galera, tenho notado uma falta de acessibilidade nos espaços
                  universitários, o que dificulta a participação de colegas com
                  deficiência. Rampas inadequadas, ausência de recursos de
                  tecnologia assistiva e falta de sensibilização sobre as
                  necessidades específicas desses alunos são apenas algumas das
                  questões que enfrentamos. Isso não está de acordo com nossa
                  visão de uma universidade inclusiva, onde todos devem ter
                  oportunidades iguais de aprendizado e participação. Precisamos
                  garantir que todos os membros da nossa comunidade acadêmica se
                  sintam bem-vindos e plenamente integrados, independentemente
                  de suas limitações físicas.
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 z-50 flex flex-col w-full gap-2 py-2 bg-white">
              <button className="flex gap-2.5 items-center py-2 px-6 justify-between bg-purple transition-colors hover:bg-[#8817b2]">
                <p className="font-bold leading-6 transition-colors text-yellow">
                  Gostou desse Compromisso? Compartilhe!
                </p>
                <Share2 color="#FFD500" className="min-w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCompromisso
