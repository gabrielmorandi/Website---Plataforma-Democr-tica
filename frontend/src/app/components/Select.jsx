import { ChevronDown } from "lucide-react"

const Select = ({
  title,
  optionDefault,
  selected,
  setSelected,
  options,
  isActive,
  setIsActive,
  setCod,
  isPurple,
}) => {
  return (
    <div className="relative flex flex-col select-none">
      {title ? (
        <h2 className="font-medium leading-none text-purple">{title}</h2>
      ) : null}
      <div
        className={
          isPurple
            ? "flex items-center justify-between gap-4 px-6 py-4 bg-white text-lg leading-none cursor-pointer border-[2px] border-purple h-full text-purple"
            : "flex items-center justify-between gap-4 px-6 py-4 bg-white text-lg leading-none cursor-pointer border-[2px] border-purple h-full"
        }
        onClick={
          title ? () => setIsActive(title) : () => setIsActive(!isActive)
        }
      >
        {selected}
        <ChevronDown
          width={24}
          color={"#5A007A"}
          className={
            isActive
              ? "rotate-180 transition-all min-w-6"
              : "transition-all min-w-6"
          }
        />
      </div>
      {isActive && (
        <div className="absolute flex flex-col divide-y-2 divide-purple top-[110%] right-0 bg-white border-purple border-[2px] z-40 w-full max-h-64 lg:max-h-[450px] overflow-auto">
          {optionDefault ? (
            <div
              onClick={() => {
                setSelected(optionDefault)
                setCod(0)
                setIsActive("")
              }}
              className="w-full p-3 text-lg leading-none transition-colors cursor-pointer hover:bg-purple hover:text-yellow"
            >
              {optionDefault}
            </div>
          ) : null}
          {options.map((option, index) => (
            <div
              key={index}
              onClick={
                setCod
                  ? () => {
                      setSelected(option.title)
                      setCod(option.cod)
                      setIsActive("")
                    }
                  : () => {
                      setSelected(option.title)
                      setIsActive(false)
                    }
              }
              className="w-full p-3 text-lg leading-none transition-colors cursor-pointer hover:bg-purple hover:text-yellow"
            >
              {option.cod
                ? `${option.cod} - ${option.title}`
                : `${option.title}`}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
