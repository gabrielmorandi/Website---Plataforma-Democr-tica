import { useEffect } from "react"
import { useSwiper } from "swiper/react"
import "swiper/swiper-bundle.css"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { ButtonPrimary } from "./Buttons"

export default function SlideNextButton() {
  const swiper = useSwiper()

  useEffect(() => {
    const updateButtons = () => {
      const prevButton = document.querySelector(
        ".slide-actions button:first-child"
      )
      const nextButton = document.querySelector(
        ".slide-actions button:last-child"
      )

      if (swiper.isBeginning) {
        prevButton.classList.add("carousel-disable")
      } else {
        prevButton.classList.remove("carousel-disable")
      }

      if (swiper.isEnd) {
        nextButton.classList.add("carousel-disable")
      } else {
        nextButton.classList.remove("carousel-disable")
      }
    }

    swiper.on("slideChange", updateButtons)

    updateButtons()

    return () => {
      swiper.off("slideChange", updateButtons)
    }
  }, [swiper])

  return (
    <>
      <div className="flex flex-col-reverse justify-between gap-4 mt-10 xspan:flex-row">
        <div className="flex items-center justify-start">
          <ButtonPrimary
            text="Conferir Todos os Compromissos"
            href={"/nossos-compromissos"}
          />
        </div>
        <div className="flex items-end justify-end gap-4 slide-actions">
          <button onClick={() => swiper.slidePrev()}>
            <ArrowLeft color="#5A007A" />
          </button>
          <button onClick={() => swiper.slideNext()}>
            <ArrowRight color="#5A007A" />
          </button>
        </div>
      </div>
    </>
  )
}
