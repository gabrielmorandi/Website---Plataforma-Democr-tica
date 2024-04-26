import React, { useState } from "react";import { Share2, CheckCircle, Ear, MessageCircle } from "lucide-react";
import ModalStoriesCompromisso from "./ModalStoriesCompromisso";

const ModalCompromisso = ({
  compromisso,
  compromissoCod,
  escutas,
  isOpen,
  setIsOpen,
  close,
}) => {
  const [compromissoStories, setCompromissoStories] = useState("");
  const [isStoriesModalOpen, setIsStoriesModalOpen] = useState(false);

  const openStoriesModal = () => {
    setCompromissoStories(compromisso);
    setIsStoriesModalOpen(true);
  };

  const closeStoriesModal = () => {
    setIsStoriesModalOpen(false);
  };
  console.log(compromissoCod);

  return (
    <div
      className="fixed z-50 grid w-full h-screen place-items-end -bottom-[125vh] bg-zinc-900/80 data-[state=open]:bottom-0 transition-opacity"
      data-state={isOpen ? "open" : "closed"}
    >
      <button className="w-full h-full cursor-default" onClick={close} />
      <div
        className="fixed -bottom-full transition-all grid w-full h-full bg-white place-items-start rounded-t-3xl max-h-[80%] sm:max-h-[62.5%] overflow-y-scroll bg-scroll data-[state=open]:bottom-0"
        data-state={isOpen ? "open" : "closed"}
      >
        <div className="relative grid w-full place-items-center">
          <div className="sticky top-0 z-50 grid w-full gap-2 py-2 mb-2 bg-white shadow place-items-center">
            <div className="flex flex-col w-11/12 max-w-[1160px]">
              <button
                className="w-[175px] bg-purple self-center rounded-full h-3 cursor-pointer"
                onClick={close}
              />
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
            </div>
          </div>
          <div className="w-11/12 max-w-[1160px] flex flex-col gap-2 pb-2">
            <div className="flex px-4 py-2  border-[2px] rounded bg-purple border-purple">
              <p className="w-full font-semibold text-justify text-yellow">
                {compromisso}
              </p>
              <p className="ml-auto text-xs font-semibold text-purple">
                {compromissoCod}
              </p>
            </div>

            {escutas.length > 0 ? (
              <div className="flex flex-col font-semibold border-[2px] rounded text-purple border-purple">
                <div className="flex items-center w-full gap-2 px-4 py-3 bg-purple">
                  <Ear color="white" />
                  <h2 className="text-2xl leading-none text-white">Escutas</h2>
                </div>
                <div className="flex flex-col gap-4 p-4">
                  {escutas.map((e, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-4 border-[2px] rounded border-purple text-purple text-lg leading-tight font-medium"
                    >
                      <div className="text-sm font-bold text-purple">
                        {`${e.Cod_Principio} ${e.Cod_Tema} ${e.Cod_Diretriz}`}
                      </div>
                      {e.Descricao}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col font-semibold border-[2px] rounded text-purple border-purple">
                <div className="flex items-center w-full gap-2 px-4 py-3 bg-purple">
                  <Ear color="white" />
                  <h2 className="text-2xl leading-none text-white">Escutas</h2>
                </div>
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex justify-center py-4">
                    <p className="text-lg text-purple">
                      Não há escutas disponíveis para este compromisso.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="sticky bottom-0 z-50 grid w-full gap-2 py-4 bg-white shadow-[0_0_3px_rgba(0,0,0,.2)] place-items-center">
            <div className="flex flex-col w-11/12 max-w-[1160px]">
              <button
                onClick={openStoriesModal}
                className="grid place-items-center py-2 px-6 bg-purple transition-colors hover:bg-[#8817b2] animate-buttonBounce"
                aria-label="Compartilhe"
              >
                <div className="flex items-center gap-2">
                  <p className="font-bold leading-6 transition-colors sm:text-2xl text-yellow">
                    Gostou desse Compromisso? COMPARTILHE!
                  </p>
                  <Share2 color="#FFD500" className="min-w-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isStoriesModalOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <ModalStoriesCompromisso
            compromisso={compromissoStories}
            isOpen={isStoriesModalOpen}
            setIsOpen={setIsStoriesModalOpen}
            close={closeStoriesModal}
          />
        </div>
      )}
    </div>
  );
};

export default ModalCompromisso;
