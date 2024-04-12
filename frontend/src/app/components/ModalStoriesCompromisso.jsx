"use client"
import Image from "next/image"
import React, { useState, useRef, createRef, useEffect } from "react"
import { CheckCircle, ImageDown, X } from "lucide-react"
import { useScreenshot, createFileName } from "use-react-screenshot"

export default function ModalStoriesCompromisso({
  compromisso,
  // maxP,
  // maxT,
  // maxD,
  isOpen,
  setIsOpen,
  close,
}) {
  const ref = createRef(null)

  const [fontSize, setFontSize] = useState(24)

  useEffect(() => {
    const textLength = compromisso.length
    if (textLength < 100) {
      setFontSize(24)
    } else if (textLength >= 100 && textLength < 200) {
      setFontSize(20)
    } else {
      setFontSize(16)
    }
  }, [compromisso])

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  })

  const download = (
    image,
    { name = "EuApoioEsseCompromisso", extension = "png" } = {}
  ) => {
    const a = document.createElement("a")
    a.href = image
    a.download = createFileName(extension, name)
    a.click()
  }

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download)

  return (
    <>
      <div
        className="fixed z-50 grid w-full h-screen place-items-end -bottom-full bg-zinc-900/80 data-[state=open]:bottom-0 transition-opacity"
        data-state={isOpen ? "open" : "closed"}
      >
        <button className="w-full h-full cursor-default" onClick={close} />
        <div
          className="fixed -bottom-full transition-all grid w-full h-full bg-white place-items-start rounded-t-3xl max-h-[80%] sm:max-h-[62.5%] overflow-y-scroll bg-scroll data-[state=open]:bottom-0"
          data-state={isOpen ? "open" : "closed"}
        >
          <div className="relative grid w-full place-items-center">
            <div className="sticky top-0 z-50 grid w-full gap-2 py-2 mb-2 bg-white shadow place-items-center">
              <div className="flex items-center justify-between w-11/12 max-w-[1160px]">
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
                <button
                  className="p-1 rounded-full shadow-md shadow-purple/25"
                  onClick={close}
                >
                  <X size={24} color="#5A007A" />
                </button>
              </div>
            </div>
            <div className="w-11/12 max-w-[1160px] flex flex-col gap-2 pb-2">
              <div
                ref={ref}
                className="flex overflow-hidden scale-[0.6] xmd:scale-100 flex-col relative max-w-[360px] h-[640px] gap-2 bg-purple shadow-md"
              >
                <div className="flex">
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 196 196"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Check">
                      <g id="check-circle">
                        <path
                          id="Vector"
                          d="M151.333 93.0933V98C151.327 109.501 147.603 120.692 140.716 129.903C133.83 139.114 124.151 145.853 113.122 149.114C102.093 152.375 90.3053 151.983 79.5171 147.998C68.7289 144.012 59.5181 136.646 53.2584 126.998C46.9987 117.349 44.0255 105.936 44.7822 94.4603C45.539 82.9843 49.9851 72.0604 57.4575 63.3177C64.9298 54.575 75.0281 48.482 86.2463 45.9474C97.4645 43.4128 109.201 44.5724 119.707 49.2533M151.333 55.3334L98 108.72L82 92.72"
                          stroke="#FFD500"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col gap-6 px-10">
                  <h2 className="text-4xl font-bold leading-7 text-yellow">
                    É Nosso Compromisso!
                  </h2>
                  <div className="flex flex-row justify-between gap-2">
                    <div className=" flex items-center justify-center bg-yellow rounded-xl w-[112px] h-[32px]">
                      <p className="font-bold text-purple">1</p>
                    </div>
                    <div className=" flex items-center justify-center bg-yellow rounded-xl w-[112px] h-[32px]">
                      <p className="font-bold text-purple">1</p>
                    </div>
                    <div className=" flex items-center justify-center bg-yellow rounded-xl w-[112px] h-[32px]">
                      <p className="font-bold text-purple">1</p>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-center m-4 mt-6">
                  <div
                    className="flex items-center max-h-[250px] bg-yellow w-full rounded-xl py-2"
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    <p className="pl-10 pr-10 font-bold leading-none text-center text-purple">
                      {compromisso}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/CaraPequeno.png"
                      width={150}
                      height={250}
                      alt="Pessoa"
                      className="absolute bottom-0 -left-2"
                    />
                    <Image
                      src="/LogoBalao.png"
                      width={75}
                      height={75}
                      alt="Pessoa"
                      className="absolute -right-2 bottom-[140px]"
                    />
                  </div>
                  <div className="absolute bottom-0 p-2 rounded-t-lg bg-yellow">
                    <div className="gap-1">
                      <p className="text-lg font-bold leading-none text-center text-purple">
                        #UnifesspaDemocratica
                      </p>
                      <p className="text-lg font-bold text-center text-purple">
                        #EuApoioEsseCompromisso
                      </p>
                    </div>
                    <p className="px-6 py-1 text-sm leading-3 text-center text-purple">
                      Aproveite também para visitar nosso site e conhecer outros
                      compromissos!
                    </p>
                    <p className="py-1 text-sm font-bold text-center text-purple">
                      unifesspademocratica.org
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 z-50 grid w-full gap-2 py-4 bg-white shadow-[0_0_3px_rgba(0,0,0,.2)] place-items-center">
              <div className="flex flex-col w-11/12 max-w-[1160px]">
                <button
                  onClick={downloadScreenshot}
                  className="grid place-items-center py-2 px-6 bg-purple transition-colors hover:bg-[#8817b2] animate-buttonBounce"
                >
                  <div className="flex items-center gap-2">
                    <p className="font-bold leading-6 transition-colors sm:text-2xl text-yellow">
                      Baixar imagem
                    </p>
                  </div>
                  <ImageDown color="#FFD500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

{
  /* <div className="flex items-center justify-center">
          <div
            ref={ref}
            className="flex overflow-hidden scale-[0.6] xmd:scale-100 flex-col relative max-w-[360px] h-[640px] gap-2 bg-purple shadow-md"
          >
            <div className="flex">
              <svg
                width="72"
                height="72"
                viewBox="0 0 196 196"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Check">
                  <g id="check-circle">
                    <path
                      id="Vector"
                      d="M151.333 93.0933V98C151.327 109.501 147.603 120.692 140.716 129.903C133.83 139.114 124.151 145.853 113.122 149.114C102.093 152.375 90.3053 151.983 79.5171 147.998C68.7289 144.012 59.5181 136.646 53.2584 126.998C46.9987 117.349 44.0255 105.936 44.7822 94.4603C45.539 82.9843 49.9851 72.0604 57.4575 63.3177C64.9298 54.575 75.0281 48.482 86.2463 45.9474C97.4645 43.4128 109.201 44.5724 119.707 49.2533M151.333 55.3334L98 108.72L82 92.72"
                      stroke="#FFD500"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex flex-col gap-6 px-10">
              <h2 className="text-4xl font-bold leading-7 text-yellow">
                É Nosso Compromisso!
              </h2>
              <div className="flex flex-row justify-between gap-2">
                <div className=" flex items-center justify-center bg-yellow rounded-xl w-[112px] h-[32px]">
                  <p className="font-bold text-purple">1</p>
                </div>
                <div className=" flex items-center justify-center bg-yellow rounded-xl w-[112px] h-[32px]">
                  <p className="font-bold text-purple">1</p>
                </div>
                <div className=" flex items-center justify-center bg-yellow rounded-xl w-[112px] h-[32px]">
                  <p className="font-bold text-purple">1</p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center m-4 mt-6">
              <div
                className="flex items-center max-h-[250px] bg-yellow w-full rounded-xl py-2"
                style={{ fontSize: `${fontSize}px` }}
              >
                <p className="pl-10 pr-10 font-bold leading-none text-center text-purple">
                  {compromisso}
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src="/CaraPequeno.png"
                  width={150}
                  height={250}
                  alt="Pessoa"
                  className="absolute bottom-0 -left-2"
                />
                <Image
                  src="/LogoBalao.png"
                  width={75}
                  height={75}
                  alt="Pessoa"
                  className="absolute -right-2 bottom-[140px]"
                />
              </div>

              <div className="absolute bottom-0 p-2 rounded-t-lg bg-yellow">
                <div className="gap-1">
                  <p className="text-lg font-bold leading-none text-center text-purple">
                    #UnifesspaDemocratica
                  </p>
                  <p className="text-lg font-bold text-center text-purple">
                    #EuApoioEsseCompromisso
                  </p>
                </div>
                <p className="px-6 py-1 text-sm leading-3 text-center text-purple">
                  Aproveite também para visitar nosso site e conhecer outros
                  compromissos!
                </p>
                <p className="py-1 text-sm font-bold text-center text-purple">
                  unifesspademocratica.org
                </p>
              </div>
            </div>
          </div>
        </div> */
}
