import { HeartHandshake, Instagram, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Button({
  text,
  iconLeftInstagram,
  iconLeftHandShake,
  iconRight,
  primary,
}) {
  return (
    <div className="flex">
      <Link
        href="/"
        className={
          primary
            ? "flex gap-2.5 border-purple border-2 items-center py-2 px-6 bg-purple text-yellow transition-colors"
            : "flex gap-2.5 border-purple border-2 items-center py-2 px-6 text-purple transition-colors"
        }
      >
        {iconLeftInstagram ? (
          <Instagram color={primary ? "#FFD500" : "#5A007A"} />
        ) : null}
        {iconLeftHandShake ? (
          <HeartHandshake color={primary ? "#FFD500" : "#5A007A"} />
        ) : null}
        <p className="font-semibold text-[13px] leading-6">{text}</p>
        {iconRight ? (
          <ArrowUpRight color={primary ? "#FFD500" : "#5A007A"} />
        ) : null}
      </Link>
    </div>
  )
}
