"use client";import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function StoriesPage({ compromisso }) {
  const textRef = useRef(null);
 
  const calculateFontWidth = (text) => {
    if (!text) return "100";

    const widthCompromisso = text.length;

    if (widthCompromisso < 50) {
      return "80";
    } else if (widthCompromisso > 50 && widthCompromisso < 101) {
      return "65";
    } else if (widthCompromisso > 101 && widthCompromisso < 150) {
      return "55";
    } else if (widthCompromisso > 150 && widthCompromisso < 200) {
      return "45";
    } else if (widthCompromisso > 200 && widthCompromisso < 350) {
      return "40";
    } else {
      return "30";
    }
  };

  const [fontWidth, setFontWidth] = useState(calculateFontWidth(compromisso));

  useEffect(() => {
    if (compromisso) {
      setFontWidth(calculateFontWidth(compromisso));
    }
  }, [compromisso]);

  return (
    <div className="relative w-[1080px] h-[1920px]">
      <Image
        src="/TemplateShareCompromisso.webp"
        alt="Imagem de fundo"
        layout="intrinsic"
        width={1920}
        height={1080}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[675px]">
        <div className="grid place-items-center h-[500px] w-[900px]">
          <div className="h-full w-full  bg-yellow rounded-xl overflow-hidden px-8 flex justify-center items-center relative">
            <p
              ref={textRef}
              style={{ fontSize: `${fontWidth}px` }}
              className={`grid place-items-center font-bold text-center text-purple uppercase leading-none h-full w-full overflow-hidden`}
            >
             {compromisso}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
