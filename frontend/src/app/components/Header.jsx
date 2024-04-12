import Image from "next/image";
import LinkBlend from "./LinkBlend";
import Nav from "./Nav";
import YellowBalloon from "./YellowBalloonAnimated";
import PurpleBalloon from "./PurpleBalloonAnimated";
import ArrowsYellow from "./ArrowsYellowAnimated";
import CompartilharCompromisso from "./CompartilharCompromisso";
export default function Header() {
  return (
    <>
      <Nav />
      <header className="relative grid w-full min-h-screen pb-28 place-items-start lg:-mt-[127.7px] -mt-[87.7px] overflow-hidden">
        <div className="grid w-full place-items-center mt-[160px] lg:mt-[250px]">
          <div className="flex flex-col w-11/12 max-w-[1160px] gap-2">
            <div className="relative flex flex-col w-min">
              <div className="absolute -top-16 -left-12  sm:top-28-16 -z-10 sm:scale-125">
                <YellowBalloon />
              </div>
              <div className="relative flex flex-col w-min">
                <div className="absolute -right-24 sm:top-28 top-16 -z-10 sm:scale-125 ">
                  <PurpleBalloon />
                </div>
                <h1 className="flex flex-col text-4xl w-min font-extrabold text-purple max-w-[390px] sm:text-6xl leading-none">
                  Plataforma Democrática
                  <span className="p-1 text-yellow w-min bg-purple sm:p-2">
                    UNIFESSPA
                  </span>
                </h1>
              </div>
              <h3 className="mb-2 text-xl font-medium leading-tight md:text-2xl max-w-72 md:max-w-[550px]">
                Movimento de diálogo para a construção da Unifesspa que
                queremos.
              </h3>
              <LinkBlend
                text="Visualizar Propostas"
                href={"/nossos-compromissos"}
              />
            </div>
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
              <ArrowsYellow />
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
    </>
  )
}
