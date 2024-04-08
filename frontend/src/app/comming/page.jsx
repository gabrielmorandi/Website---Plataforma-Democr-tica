import Image from "next/image"

export default function Home() {
  return (
    <>
      <header>
        <div className="grid w-full bg-yellow place-items-center">
          <div className="flex items-center justify-between w-11/12 max-w-[700px] py-3">
            <Image src="/logo.png" width={90} height={70} alt="Logo" />
          </div>
        </div>
      </header>
      <main className="grid w-full gap-16 mt-4 place-items-center">
        <div className="flex flex-col w-11/12 max-w-[700px]">
          <h2 className="text-4xl font-black md:text-6xl text-purple">
            Em Breve...
          </h2>
          <h3 className="mb-2 text-xl font-medium leading-tight text-purple">
            A UNIFESSPA está prestes a dar um grande salto na visualização de
            dados com a nossa nova plataforma democrática. Fique de olho para o
            lançamento em breve e prepare-se para explorar dados como nunca
            antes!
          </h3>
        </div>
      </main>
    </>
  )
}
