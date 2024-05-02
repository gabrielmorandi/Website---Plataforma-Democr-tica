import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { InfosPDT } from "../../../data/InfosPTD";
import BalloonChat from "../components/BalloonChat";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTemas() {
  return (
    <section
      id="temas"
      className="grid w-full pb-5 place-items-center pt-[125px] -mt-[70px]"
    >
      <div className="grid w-full pb-5 place-items-center bg-purple">
        <div className="flex flex-col w-11/12 pt-8 max-w-[1160px]">
          <h2 className="text-4xl font-bold text-yellow">TEMAS</h2>
          <h3 className="mb-2 text-xl font-medium leading-tight text-white">
            Conheça os temas que permeiam nossos compromissos e como eles moldam
            nosso futuro!
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {InfosPDT.tema.map((tema, index) => (
              <BalloonChat
                key={index}
                iconName={tema.icon}
                text={tema.title}
                delay={700 * (index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
