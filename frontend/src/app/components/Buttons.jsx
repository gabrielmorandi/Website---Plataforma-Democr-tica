import { Instagram, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function ButtonPrimary({ text, href, insta }) {
  return (
    <Link
      href={href}
      className="flex gap-2.5 items-center py-2 px-6 justify-between bg-purple transition-colors hover:bg-[#8817b2]"
    >
      <p className="font-bold leading-6 transition-colors text-yellow">
        {text}
      </p>
      {insta ? (
        <Instagram color="#FFD500" className="min-w-6" />
      ) : (
        <ArrowUpRight color="#FFD500" className="min-w-6" />
      )}
    </Link>
  )
}

export function ButtonSecondary({ text, href }) {
  return (
    <div className="flex">
      <Link
        href={href}
        className="flex gap-2.5 border-purple border-2 items-center py-2 px-6 text-purple transition-colors"
      >
        <p className="font-bold leading-6">{text}</p>
        <ArrowUpRight color="#5A007A" className="min-w-6" />
      </Link>
    </div>
  )
}
