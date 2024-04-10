"use client";import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import { ImageDown } from "lucide-react";
import { useRouter } from 'next/navigation'

export default function Compartilhar() {
  
  // const router = useRouter();

  // const { compromisso, tema, principio, diretriz } = router.query;
  const { compromisso, tema, principio, diretriz } = ''
''
  return (
    <>
      <Nav inCompromissos={false} />
      <main className="grid w-full gap-6 mt-12 place-items-center">
        <div className="flex flex-col w-11/12 max-w-[1160px] gap-2">
          <h2 className="text-4xl font-bold text-purple">
            Compartilhar Compromisso!
          </h2>
          <p>
            Você está comprometido com uma causa importante? Quer compartilhar
            seu apoio e inspirar outros a se juntarem a você? Baixe nosso
            template de compartilhamento e espalhe a mensagem!
          </p>
        </div>
        <div className="flex overflow-hidden scale-[0.6] xmd:scale-100 flex-col relative max-w-[360px] h-[640px] gap-2 bg-purple rounded-md shadow-md">
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
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="flex flex-col px-10 gap-2">
            <h2 className="text-4xl font-bold text-yellow leading-7">
              É Nosso Compromisso!
            </h2>
            <div className="flex flex-row justify-between gap-2">
              <div className=" flex items-center justify-center bg-yellow rounded-xl w-[112px] h-[32px]">
                <p className="font-bold text-purple">{tema}</p>
              </div>
              <div className=" flex items-center justify-center bg-yellow rounded-xl w-[112px] h-[32px]">
                <p className="font-bold text-purple">{principio}</p>
              </div>
              <div className=" flex items-center justify-center bg-yellow rounded-xl w-[112px] h-[32px]">
                <p className="font-bold text-purple">{diretriz}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6 relative">
            <div className="min-h-[160px]">
              <p className="leading-none text-justify pl-12 pr-14 text-purple font-bold z-10">
                {compromisso}
              </p>
            </div>
            <svg
              width="320"
              height="320"
              viewBox="0 0 910 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <g id="CompromissoContent" clip-path="url(#clip0_821_3633)">
                <g id="Group 2466">
                  <g id="Compromisso">
                    <path
                      id="Rectangle 2098"
                      d="M0 100C0 44.7715 44.7715 0 100 0H780C835.228 0 880 44.7715 880 100V430C880 485.228 835.228 530 780 530H100C44.7715 530 0 485.228 0 430V100Z"
                      fill="#FFD500"
                    />
                    <g id="Rectangle 2099">
                      <mask id="path-2-inside-1_821_3633" fill="white">
                        <path d="M0 100C0 44.7715 44.7715 0 100 0H810C865.228 0 910 44.7715 910 100V460C910 515.228 865.228 560 810 560H100C44.7715 560 0 515.228 0 460V100Z" />
                      </mask>
                      <path
                        d="M0 0H910H0ZM916 460C916 518.542 868.542 566 810 566H106C47.4578 566 0 518.542 0 460C0 511.915 44.7715 554 100 554H810C861.915 554 904 511.915 904 460H916ZM0 560V0V560ZM810 0C868.542 0 916 47.4578 916 106V460C916 518.542 868.542 566 810 566V554C861.915 554 904 511.915 904 460V100C904 44.7715 861.915 0 810 0Z"
                        fill="#FFD500"
                        mask="url(#path-2-inside-1_821_3633)"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_821_3633">
                  <rect width="910" height="560" fill="white" />
                </clipPath>
              </defs>
            </svg>
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
                className="absolute right-0 bottom-[188px]"
              />
            </div>

            <svg
              width=""
              height="200"
              viewBox="0 0 1080 490"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1080 5.42889V770H0V259.758C2.8684 258.211 5.75103 256.695 8.64697 255.213C121.046 196.337 254.491 188.101 368.738 181.05C409.457 178.537 447.737 176.174 481.757 171.723C580.259 157.915 642.34 126.596 708.499 93.2216C729.299 82.7287 750.503 72.0325 773.367 61.6133C862.335 21.6917 976.033 -13.9291 1080 5.42889Z"
                fill="#FFD500"
              />
            </svg>

            <div className="absolute bottom-0">
              <div className="gap-1">
                <p className="text-purple text-center text-lg font-bold leading-none">
                  #UnifesspaDemocratica
                </p>
                <p className="text-purple text-center text-lg font-bold">
                  #EuApoioEsseCompromisso
                </p>
              </div>
              <p className="text-purple text-center text-sm leading-3 px-6 py-1">
                Aproveite também para visitar nosso site e conhecer outros
                compromissos!
              </p>
              <p className="text-purple text-center text-sm font-bold py-1">
                unifesspademocratica.org
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <button className="flex gap-2.5 items-center py-2 px-6 justify-between bg-purple transition-colors hover:bg-[#8817b2]">
            <p className="font-bold leading-6 transition-colors text-yellow">
              Baixa imagem
            </p>
            <ImageDown color="#FFD500" />
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
