"use client"
import { useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function LinkBlend({ text, href, scaleType }) {
  const buttonRef = useRef(null)
  function mouseMoveEvent(e) {
    if (buttonRef.current) {
      const { left, top } = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - left - 20
      const y = e.clientY - top - 20
      buttonRef.current.style.setProperty("--x", `${x}px`)
      buttonRef.current.style.setProperty("--y", `${y}px`)
    }
  }

  useEffect(() => {
    const currentButtonRef = buttonRef.current
    if (currentButtonRef) {
      currentButtonRef.addEventListener("mousemove", mouseMoveEvent)
    }
    return () => {
      if (currentButtonRef) {
        currentButtonRef.removeEventListener("mousemove", mouseMoveEvent)
      }
    }
  }, [])

  return (
    <div className="flex">
      <Link
        href={href}
        ref={buttonRef}
        className={
          scaleType == 2
            ? "relative flex gap-2.5 px-6 py-2 bg-transparent active:after:scale-[12.5] focus:after:scale-[12.5] [&>p]:focus:text-yellow overflow-hidden [&>p]:hover:text-yellow [&>svg]:hover:stroke-yellow [&>svg]:focus:stroke-yellow after:content-[''] after:absolute after:w-10 after:h-10 after:bg-purple after:scale-0 hover:after:scale-[9] after:top-[var(--y)] after:left-[var(--x)] after:transition-transform after:duration-[0.35s] after:ease-[cubic-bezier(0.33,1,0.68,1)]"
            : scaleType == 3
            ? "relative flex gap-2.5 px-6 py-2 bg-transparent active:after:scale-[14] focus:after:scale-[14] [&>p]:focus:text-yellow overflow-hidden [&>p]:hover:text-yellow [&>svg]:hover:stroke-yellow [&>svg]:focus:stroke-yellow after:content-[''] after:absolute after:w-10 after:h-10 after:bg-purple after:scale-0 hover:after:scale-[13] after:top-[var(--y)] after:left-[var(--x)] after:transition-transform after:duration-[0.35s] after:ease-[cubic-bezier(0.33,1,0.68,1)]"
            : "relative flex gap-2.5 px-6 py-2 bg-transparent active:after:scale-[12.5] focus:after:scale-[12.5] [&>p]:focus:text-yellow overflow-hidden [&>p]:hover:text-yellow [&>svg]:hover:stroke-yellow [&>svg]:focus:stroke-yellow after:content-[''] after:absolute after:w-10 after:h-10 after:bg-purple after:scale-0 hover:after:scale-[11] after:top-[var(--y)] after:left-[var(--x)] after:transition-transform after:duration-[0.35s] after:ease-[cubic-bezier(0.33,1,0.68,1)]"
        }
      >
        <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-purple" />
        <p className="relative z-10 font-bold leading-6 transition-colors text-purple">
          {text}
        </p>
        <ArrowUpRight color="#5A007A" className="z-10 transition-colors" />
      </Link>
    </div>
  )
}
