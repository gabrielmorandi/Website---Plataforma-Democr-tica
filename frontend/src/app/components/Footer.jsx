import MenuLink from "./MenuLink"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="grid w-full py-4 mt-16 place-items-center bg-purple">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-6 md:justify-between w-11/12 max-w-[1160px]">
        <div className="flex flex-col items-start gap-2">
          <Image
            src={"/LogoBalao.png"}
            width={80}
            height={80}
            alt="Plataforma Democrática"
          />
          <h2 className="font-semibold text-yellow text-balance">
            © Plataforma Democrática UNIFESSPA, todos direitos reservados 2024.
          </h2>
        </div>
        <div className="flex flex-col gap-2 pb-4 md:pb-0">
          <MenuLink text={"Princípios Universidade"} isYellow={true} />
          <MenuLink text={"Temas Trabalhados"} isYellow={true} />
          <MenuLink text={"Diretrizes dos Compromissos"} isYellow={true} />
          <MenuLink text={"Conheça nossos Compromissos"} isYellow={true} />
          <MenuLink text={"As Escutas"} isYellow={true} />
        </div>
      </div>
    </footer>
  )
}
