import Link from "next/link"

export default function MenuLink({ text, isWhite, isYellow }) {
  return (
    <div className="flex">
      <Link
        href={"/"}
        className="flex py-2 font-semibold text-purple [&>span]:hover:underline hover:underline"
      >
        {isWhite ? (
          <span className="text-white">{text}</span>
        ) : isYellow ? (
          <span className="text-yellow">{text}</span>
        ) : (
          text
        )}
      </Link>
    </div>
  )
}
