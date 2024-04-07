import * as Icons from "lucide-react"

export default function BalloonChat({ iconName, text }) {
  const IconComponent = Icons[iconName]

  return (
    <div className="flex m-1">
      <div className="fade-up relative flex gap-2 px-6 py-2 rounded-full bg-yellow after:content-[''] after:bg-yellow after:w-3 after:h-3 after:absolute after:left-8 items-center after:-bottom-1.5 after:rotate-45">
        {IconComponent ? (
          <IconComponent color="#5a007a" className="min-w-6" />
        ) : null}
        <p className="text-xl font-bold leading-6 text-purple">{text}</p>
      </div>
    </div>
  )
}
