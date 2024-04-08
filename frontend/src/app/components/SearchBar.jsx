import { Search } from "lucide-react"

const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-medium leading-none text-purple">Buscar</h2>
      <label className="flex items-center gap-2 pl-2 pr-6 py-4 bg-white border-[2px] border-purple h-full">
        <Search color="#5A007A" className="min-w-6" />
        <input
          type="text"
          className="flex w-full text-lg leading-none outline-none placeholder:text-purple placeholder:opacity-40"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default SearchBar
