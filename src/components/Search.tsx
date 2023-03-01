import { SyntheticEvent } from "react"
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai"

interface SearchProps {
  handleClear: (e: SyntheticEvent) => void
  handleSubmit: (e: SyntheticEvent) => void
  handleChange: (e: SyntheticEvent) => void
}

export const Search = ({
  handleClear,
  handleSubmit,
  handleChange,
}: SearchProps) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={handleClear}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 m-1 border border-gray-400 rounded shadow"
      >
        <AiOutlineHome size={22} />
      </button>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center align-middle items-center"
      >
        <input
          type="text"
          placeholder="Rechercher un livre"
          className="p-2 m-1 rounded-md appearance-none border border-gray-400 shadow-inner"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 m-1 border border-gray-400 rounded shadow"
        >
          <AiOutlineSearch size={22} />
        </button>
      </form>
    </div>
  )
}
