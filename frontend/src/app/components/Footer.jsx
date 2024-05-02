import Image from "next/image"

export default function Footer() {
  return (
    <footer className="grid w-full py-4 mt-16 place-items-center bg-purple">
      <div className="flex flex-col-reverse w-11/12 max-w-[1160px]">
        <div className="flex flex-col items-start gap-2 sm:items-end sm:flex-row">
          {/* <Image
            src={"/LogoBalao.png"}
            width={80}
            height={80}
            alt="Plataforma Democrática"
          /> */}
          <h2 className="font-semibold text-yellow text-balance">
            © Plataforma Democrática UNIFESSPA, todos os direitos reservados 2024.
          </h2>
        </div>
      </div>
    </footer>
  )
}
