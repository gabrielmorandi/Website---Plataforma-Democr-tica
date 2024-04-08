"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ButtonPrimary } from "./Buttons"
import LinkBlend from "./LinkBlend"
import MenuLink from "./MenuLink"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

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
    <header className="relative grid w-full min-h-screen pb-28 place-items-start">
      <nav className="grid w-full bg-yellow place-items-center">
        <div className="flex items-center justify-between w-11/12 max-w-[1160px] py-3">
          <Image src="/logo.png" width={90} height={70} alt="Logo" />
          <div className="flex gap-4 max-lg:hidden">
            <ButtonPrimary text="Instagram" href={"/"} />
            <LinkBlend text="Visualizar Propostas" href={"/"} />
          </div>
          <div className="lg:hidden">
            <Menu color="#5A007A" onClick={open} size={32} />
            <div
              className="fixed overflow-hidden w-3/4 md:w-1/2 h-screen bg-white top-0 -right-full data-[state=open]:right-0 transition-all z-50"
              data-state={isOpen ? "open" : "closed"}
            >
              <div className="flex flex-col gap-4 px-4 py-8">
                <X color="#5A007A" onClick={close} size={32} />
                <div className="flex">
                  <ButtonPrimary text="Instagram" href={"/"} />
                </div>
                <div className="flex flex-col gap-2">
                  <LinkBlend text="Visualizar Propostas" href={"/"} />
                  <MenuLink text={"Princípios Universidade"} />
                  <MenuLink text={"Temas Trabalhados"} />
                  <MenuLink text={"Diretrizes dos Compromissos"} />
                  <MenuLink text={"Conheça nossos Compromissos"} />
                  <MenuLink text={"As Escutas"} />
                </div>
              </div>
            </div>
            <div
              className="fixed inset-0 bg-zinc-900/80 data-[state=open]:opacity-1 data-[state=closed]:opacity-0 transition-opacity data-[state=closed]:pointer-events-none data-[state=open]:pointer-events-auto"
              data-state={isOpen ? "open" : "closed"}
            />
          </div>
        </div>
        <div className="grid w-full gap-2 place-items-center bg-purple max-lg:hidden">
          <div className="flex justify-between w-11/12 max-w-[1160px]">
            <MenuLink text={"Princípios Universidade"} isWhite={true} />
            <MenuLink text={"Temas Trabalhados"} isWhite={true} />
            <MenuLink text={"Diretrizes dos Compromissos"} isWhite={true} />
            <MenuLink text={"Conheça nossos Compromissos"} isWhite={true} />
            <MenuLink text={"As Escutas"} isWhite={true} />
          </div>
        </div>
      </nav>
      <div className="grid w-full place-items-center">
        <div className="flex flex-col w-11/12 max-w-[1160px] gap-2">
          <h1 className="flex flex-col text-4xl font-extrabold text-purple max-w-[390px] sm:max-w-[700px] sm:text-6xl leading-none">
            Plataforma Democrática{" "}
            <span className="p-1 text-yellow w-min bg-purple sm:p-2">
              UNIFESSPA
            </span>
          </h1>
          <h3 className="mb-2 text-xl font-medium leading-tight md:text-2xl max-w-72 md:max-w-[550px]">
            Movimento de diálogo para a construção da Unifesspa que queremos.
          </h3>
          <LinkBlend text="Visualizar Propostas" href={"/"} />
        </div>
      </div>
      <Image
        src="/cara.png"
        width={150}
        height={400}
        alt="Pessoa"
        className="absolute bottom-0 right-0 sm:w-[300px] lg:w-[450px] -z-40"
      />
      <div className="pointer-events-none custom-shape-divider-bottom-1712081362 -z-50">
        <div className="absolute z-10 grid w-full bottom-6 place-items-center">
          <div className="relative z-50 w-11/12 max-w-[1160px] h-full flex flex-col">
            <svg
              width="25"
              height="33"
              viewBox="0 0 25 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7087 17.958L12.5003 31.083L2.29199 17.958H22.7087Z"
                stroke="#FFD500"
                strokeWidth="2.91667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.7087 1.91634L12.5003 15.0413L2.29199 1.91634H22.7087Z"
                stroke="#FFD500"
                strokeWidth="2.91667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="25"
              height="33"
              viewBox="0 0 25 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7087 17.958L12.5003 31.083L2.29199 17.958H22.7087Z"
                stroke="#FFD500"
                strokeWidth="2.91667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.7087 1.91634L12.5003 15.0413L2.29199 1.91634H22.7087Z"
                stroke="#FFD500"
                strokeWidth="2.91667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="customGradient"
              x1="0"
              y1="120"
              x2="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5A007A" />
              <stop offset="1" stopColor="#7600A0" />
            </linearGradient>
          </defs>
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="url(#customGradient)"
          ></path>
        </svg>
      </div>
    </header>
  )
}
