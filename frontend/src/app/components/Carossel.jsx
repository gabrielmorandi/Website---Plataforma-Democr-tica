"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import SlideButtons from "./SlideButtons"

import { ButtonPrimary } from "./Buttons"

import { InfosPDT } from "../../../data/InfosPTD"

export default function Carossel() {
  return (
    <>
      <div className="w-full pt-10 overflow-hidden">
        <Swiper
          spaceBetween={50}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            747: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1180: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {InfosPDT.diretriz.map((d, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-between bg-white w-full gap-4 p-8 rounded shadow-[6px_10px_0_#5A007A] min-h-[380px] max-h-[380px] xs:min-h-[330px] xs:max-h-[330px]">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold leading-none text-purple text-balance">
                    {d.title}
                  </h2>
                  <p className="leading-none text-purple">{d.description}</p>
                </div>
                <div className="flex flex-col">
                  <ButtonPrimary
                    text="Conferir Compromissos"
                    href={`/nossos-compromissos?diretriz=${d.title}&codDiretriz=${d.cod}`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SlideButtons />
        </Swiper>
      </div>
    </>
  )
}
