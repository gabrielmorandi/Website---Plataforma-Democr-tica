"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ButtonPrimary } from "./Buttons"
import MenuLink from "./MenuLink"
import LinkBlend from "./LinkBlend"
import Image from "next/image"
import Link from "next/link"

export default function Nav({ inCompromissos }) {
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
    <nav className="sticky top-0 z-50 grid w-full shadow bg-yellow place-items-center">
      <div className="flex items-center justify-between w-11/12 max-w-[1160px] py-3">
        <Link href={"/"} className="flex">
          <Image src="/logo.png" width={90} height={70} alt="Logo" />
        </Link>
        <div className="flex gap-4 max-lg:hidden">
          <ButtonPrimary
            text="Instagram"
            href={"https://www.instagram.com/plataforma_democratica/"}
            insta={true}
          />
          <LinkBlend
            text={inCompromissos ? "Como Funciona" : "Visualizar Propostas"}
            href={inCompromissos ? "/" : "/nossos-compromissos"}
          />
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
                <ButtonPrimary
                  text="Instagram"
                  href={"https://www.instagram.com/plataforma_democratica/"}
                  insta={true}
                />
              </div>
              <div className="flex flex-col gap-2">
                <LinkBlend
                  text={
                    inCompromissos ? "Como Funciona" : "Visualizar Propostas"
                  }
                  href={inCompromissos ? "/" : "/nossos-compromissos"}
                />
                <MenuLink
                  text={"Princípios Universidade"}
                  href={"#principios"}
                />
                <MenuLink text={"Temas Trabalhados"} href={"#temas"} />
                <MenuLink
                  text={"Diretrizes dos Compromissos"}
                  href={"#diretrizes"}
                />
                <MenuLink
                  text={"Conheça nossos Compromissos"}
                  href={"#compromissos"}
                />
                <MenuLink text={"As Escutas"} href={"#escutas"} />
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
          <MenuLink
            text={"Princípios Universidade"}
            isWhite={true}
            href={"#principios"}
          />
          <MenuLink text={"Temas Trabalhados"} isWhite={true} href={"#temas"} />
          <MenuLink
            text={"Diretrizes dos Compromissos"}
            isWhite={true}
            href={"#diretrizes"}
          />
          <MenuLink
            text={"Conheça nossos Compromissos"}
            isWhite={true}
            href={"#compromissos"}
          />
          <MenuLink text={"As Escutas"} isWhite={true} href={"#escutas"} />
        </div>
      </div>
    </nav>
  )
}
