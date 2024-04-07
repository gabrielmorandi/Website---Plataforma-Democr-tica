"use client"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { temas } from "../../../data/temas"
import BalloonChat from "../components/BalloonChat"

gsap.registerPlugin(ScrollTrigger)

export default function SectionTemas() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up")
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: { trigger: element, start: "top bottom" },
        }
      )
    })
  }, [])
  return (
    <section className="grid w-full pb-5 place-items-center bg-purple">
      <div className="flex flex-col w-11/12 pt-8 max-w-[1160px]">
        <h2 className="text-4xl font-bold text-yellow">TEMAS</h2>
        <h3 className="mb-2 text-xl font-medium leading-tight text-white">
          Conheça os temas que permeiam nossos compromissos e como eles moldam
          nosso futuro!
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {temas.map((tema, index) => (
            <BalloonChat
              key={index}
              iconName={tema.iconName}
              text={tema.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
