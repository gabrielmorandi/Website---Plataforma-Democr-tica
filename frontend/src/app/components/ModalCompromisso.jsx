"use client"
import React, { useState, useRef, useEffect } from "react"
import { Share2, CheckCircle, Ear } from "lucide-react"
import BalloonCard from "./BalloonCard"
import { useScreenshot, createFileName } from "use-react-screenshot"
import Image from "next/image"

const ModalCompromisso = ({
  compromisso,
  compromissoCod,
  escutas,
  isOpen,
  setIsOpen,
  close,
}) => {
  const ref = useRef(null)
  const [image, takeScreenShot] = useScreenshot()

  const downloadScreenshot = () => {
    takeScreenShot(ref.current).then((image) => {
      const a = document.createElement("a")
      a.href = image
      a.download = createFileName("png", "EuApoioEsseCompromisso")
      a.click()
    })
  }

  useEffect(() => {
    if (image) {
      downloadScreenshot()
    }
  }, [image])

  return (
    <>
      <div
        className="fixed z-50 grid w-full h-screen place-items-end -bottom-[125vh] bg-zinc-900/80 data-[state=open]:bottom-0 transition-opacity"
        data-state={isOpen ? "open" : "closed"}
      >
        <button className="w-full h-full cursor-default" onClick={close} />
        <div
          className="fixed -bottom-full transition-all grid w-full h-full bg-white place-items-start rounded-t-3xl max-h-[80%] sm:max-h-[62.5%] overflow-y-scroll bg-scroll data-[state=open]:bottom-0"
          data-state={isOpen ? "open" : "closed"}
        >
          <div className="relative grid w-full place-items-center">
            <div className="sticky top-0 z-50 grid w-full gap-2 py-2 mb-2 bg-white shadow place-items-center">
              <div className="flex flex-col w-11/12 max-w-[1160px]">
                <button
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
            </div>
            <div className="w-11/12 max-w-[1160px] flex flex-col gap-2 pb-2">
              <div className="flex px-4 py-2  border-[2px] rounded bg-purple border-purple">
                <p className="w-full text-lg font-semibold text-justify text-yellow">
                  {compromisso}
                </p>
                <p className="ml-auto text-xs font-semibold text-purple">
                  {compromissoCod}
                </p>
              </div>

              {escutas.length > 0 ? (
                <div className="flex flex-col font-semibold border-[2px] rounded text-purple border-purple">
                  <div className="flex items-center w-full gap-2 px-4 py-3 bg-purple">
                    <Ear color="white" />
                    <h2 className="text-2xl leading-none text-white">
                      Escutas
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5 p-5 bg-slate-100">
                    {escutas.map((e, index) => (
                      <div
                        key={index}
                        className="relative flex flex-col p-4 border-[2px] bg-white rounded border-purple text-purple text-lg leading-tight font-medium capitalize"
                      >
                        <div className="text-sm font-bold text-purple">
                          <div className="absolute flex gap-3 right-4 -top-5">
                            <BalloonCard content={e.Cod_Principio} type={1} />
                            <BalloonCard content={e.Cod_Tema} type={2} />
                            <BalloonCard content={e.Cod_Diretriz} type={3} />
                          </div>
                        </div>
                        {e.Descricao}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col font-semibold border-[2px] rounded text-purple border-purple">
                  <div className="flex items-center w-full gap-2 px-4 py-3 bg-purple">
                    <Ear color="white" />
                    <h2 className="text-2xl leading-none text-white">
                      Escutas
                    </h2>
                  </div>
                  <div className="flex flex-col gap-4 p-4">
                    <div className="flex justify-center py-4">
                      <p className="text-lg text-purple">
                        Não há escutas disponíveis para este compromisso.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="sticky bottom-0 z-50 grid w-full gap-2 py-4 bg-white shadow-[0_0_3px_rgba(0,0,0,.2)] place-items-center">
              <p className="text-xl text-purple">Gostou desse Compromisso?</p>
              <div className="flex flex-col w-11/12 max-w-[1160px]">
                <button
                  onClick={downloadScreenshot}
                  className="grid place-items-center py-2 px-6 bg-purple transition-colors hover:bg-[#FFD500] animate-buttonBounce"
                  aria-label="Compartilhe"
                >
                  <div className="flex items-center gap-2">
                    <p className="font-bold leading-6 transition-colors sm:text-2xl text-yellow">
                      Baixe o Template e Compartilhe!
                    </p>
                    <Share2 color="#5A007A" className="min-w-6" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="fixed grid place-items-center left-full z-50 w-[1080px] h-[1920px]"
      >
        <div className="relative grid place-items-center z-50 w-[1080px] h-[1920px]">
          <Image src="/TemplateStoriesBG.webp" alt="Imagem de fundo" fill />
          <div className="w-11/12 left-1/2 -translate-x-1/2 absolute inset-0 top-[300px]">
            <div className="max-h-[1200px] bg-yellow rounded-xl overflow-hidden">
              <p className="h-full p-10 text-4xl font-bold leading-snug text-center uppercase text-purple">
                {compromisso}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalCompromisso
