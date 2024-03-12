import Image from "next/image"
import Button from "./Button"

export default function Header() {
  return (
    <header className="w-full grid place-items-center">
      <div className="w-full grid place-items-center bg-yellow">
        <nav className="w-11/12 max-w-[1160px] flex py-2 items-center justify-between">
          <div className="logo">
            <Image src="/logo.png" width={113} height={80} alt="Logo" />
          </div>
          <div className="flex gap-2.5">
            <Button text="INSTAGRAM" iconLeftInstagram={true} />
            <Button text="CONTRIBUA" iconLeftHandShake={true} primary={true} />
          </div>
        </nav>
      </div>
      <div className="w-11/12 max-w-[1160px] flex">
        <div className="pt-[200px] flex flex-col gap-2">
          <h1 className="font-extrabold text-purple text-[64px] max-w-[600px] leading-none">
            Plataforma Democrática UNIFESSPA
          </h1>
          <p className="text-[32px] font-medium text-purple max-w-[600px] leading-none">
            Movimento de diálogo para a construção da Unifesspa que queremos.
          </p>
          <Button text="ACESSAR" iconRight={true} primary={true} />
        </div>
      </div>
    </header>
  )
}
