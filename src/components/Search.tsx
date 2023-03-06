import { SyntheticEvent } from "react"
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai"
import { Book } from "../types"

interface SearchProps {
  setBooks: (books: Array<Book>) => void
  setBooksCount: (booksCount: number) => void
  setSearch: (search: string) => void
  setIndex: (index: number) => void
  handleRequest: () => void
}

export const Search: React.FC<SearchProps> = ({
  setBooks,
  setBooksCount,
  setSearch,
  setIndex,
  handleRequest,
}) => {
  const handleClear = (e: SyntheticEvent) => {
    e.preventDefault()
    setBooks([])
    setBooksCount(-1)
    setSearch("")
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setIndex(0)
    handleRequest()
    ;(e.target as HTMLFormElement).reset()
  }

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault()
    setIndex(0)
    setBooks([])
    setBooksCount(-1)
    setSearch((e.target as HTMLInputElement).value)
  }

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
          className="p-2 m-1 rounded-md appearance-none border border-gray-700 shadow-inner"
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
