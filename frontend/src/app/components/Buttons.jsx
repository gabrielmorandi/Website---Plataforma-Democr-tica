import { HeartHandshake, Instagram, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function ButtonPrimary({ text, href, func }) {
  return (
    <div className="flex">
      <Link
        href={href}
        className="flex gap-2.5 items-center py-2 px-6 bg-purple transition-colors hover:bg-[#8817b2]"
        onClick={func ? func : null}
      >
        <p className="font-bold leading-6 transition-colors text-yellow">
          {text}
        </p>
        <ArrowUpRight color="#FFD500" />
      </Link>
    </div>
  )
}

export function ButtonSecondary({ text, href, func }) {
  return (
    <div className="flex">
      <Link
        href={href}
        className="flex gap-2.5 border-purple border-2 items-center py-2 px-6 text-purple transition-colors"
        onClick={func ? func : null}
      >
        <p className="font-bold leading-6">{text}</p>
        <ArrowUpRight color="#5A007A" />
      </Link>
    </div>
  )
}
