import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import * as Icons from "lucide-react";

export default function BalloonChat({ iconName, text, delay }) {
  const IconComponent = Icons[iconName];
  const balloonRef = useRef(null);

  useEffect(() => {
    const balloon = balloonRef.current;

    gsap.fromTo(
      balloon,
      { opacity: 0, y: -20, scale: 0.5 },
      {
        opacity: 1,
        y: 10,
        scale: 2,
        duration: 2, 
        delay: delay / 1000, 
        ease: "power2.inOut",
       
        y: 0, 
        scale: 1, 
      }
    );
  }, [delay]);

  return (
    <div
      ref={balloonRef}
      className={`flex m-1`}
      style={{ opacity: 0, transform: "translateY(-20px)" }}
    >
      <div className="fade-up relative flex gap-2 px-6 py-2 rounded-full bg-yellow after:content-[''] after:bg-yellow after:w-3 after:h-3 after:absolute after:left-10 items-center after:-bottom-1.5 after:rotate-45">
        {IconComponent ? (
          <IconComponent color="#5a007a" className="min-w-6" />
        ) : null}
        <p className="text-xl font-bold leading-6 text-purple">{text}</p>
      </div>
    </div>
  )
}
