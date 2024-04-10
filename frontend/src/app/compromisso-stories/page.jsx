"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, createRef } from "react";
import { ImageDown } from "lucide-react";
import { useScreenshot, createFileName } from "use-react-screenshot";

export default function Compartilhar() {
  const ref = createRef(null);

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const download = (
    image,
    { name = "EuApoioEsseCompromisso", extension = "png" } = {}
  ) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  // const router = useRouter();

  // const { compromisso, tema, principio, diretriz } = router.query;

  const { compromisso, tema, principio, diretriz } = "";
  return (
    <>
      <Nav />
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
        <div className="rounde-lg stroke-purple border-2 p-2">
          <div ref={ref} className="flex overflow-hidden scale-[0.6] xmd:scale-100 flex-col relative max-w-[360px] h-[640px] gap-2 bg-purple shadow-md">
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
            <div className="flex flex-col px-10 gap-6">
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
            <div className="flex items-center justify-center mt-6 relative m-10">
              <div className="min-h-[160px] bg-yellow w-full  rounded-xl">
                <p className="leading-none text-justify pl-12 pr-14 text-purple font-bold z-10">
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
                  width={100}
                  height={100}
                  alt="Pessoa"
                  className="absolute -right-2 bottom-[140px]"
                />
              </div>

              <div className="absolute bottom-0 bg-yellow rounded-t-lg p-2">
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
        </div>
        <div className="flex flex-col">
          <button
            onClick={downloadScreenshot}
            className="flex gap-2.5 items-center py-2 px-6 justify-between bg-purple transition-colors hover:bg-[#8817b2]"
          >
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
