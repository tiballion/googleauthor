import React, { useState, useEffect, SyntheticEvent } from "react"
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineSearch,
  AiOutlineHome,
} from "react-icons/ai"
import axios from "axios"
import { Books } from "./Books"
import { Book } from "../types"

export const Main: React.FC = () => {
  const [search, setSearch] = useState<string>("")
  const [booksCount, setBooksCount] = useState<number>(-1)
  const [books, setBooks] = useState<Array<Book>>([])
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    if (!search) return
    searchBook()
  }, [index])

  const searchBook = async () => {
    if (!search) return
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes",
      {
        params: {
          q: "inauthor:" + search,
          startIndex: index,
        },
      }
    )
    setBooks(response.data.items)
    setBooksCount(response.data.totalItems)
  }

  const handleClear = (e: SyntheticEvent) => {
    e.preventDefault()
    setBooks([])
    setBooksCount(-1)
    setSearch("")
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setIndex(0)
    searchBook()
    ;(e.target as HTMLFormElement).reset()
  }

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault()
    setIndex(0)
    setBooks([])
    setBooksCount(-1)
    setSearch((e.target as HTMLInputElement).value)
  }

  const handleNextPage = (e: SyntheticEvent) => {
    e.preventDefault()
    if (booksCount < index + 10) return
    setIndex((index) => index + 10)
    if (window.innerWidth < 768)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
  }

  const handlePreviousPage = (e: any) => {
    e.preventDefault()
    if (index === 0) return
    if (index < 10) setIndex(0)
    setIndex((index) => index - 10)
    if (window.innerWidth < 768)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
  }

  return (
    <>
      <div>
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
            <label>
              <input
                type="text"
                placeholder="Rechercher un livre"
                className="p-2 m-1 rounded-md"
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 m-1 border border-gray-400 rounded shadow"
            >
              <AiOutlineSearch size={22} />
            </button>
          </form>
        </div>
      </div>
      <div className="ml-3 flex justify-center">
        {booksCount === -1 ? (
          "Veuillez saisir le nom d'un auteur"
        ) : booksCount === 0 ? (
          "Aucun résultat pour votre recherche"
        ) : (
          <p>{`${booksCount} résultats pour ${search}`}</p>
        )}
      </div>
      {booksCount > 0 && (
        <>
          <Books books={books} />
          <div className="p-2 flex items-center justify-center">
            <button
              onClick={handlePreviousPage}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 ${
                index < 10 ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <AiOutlineArrowLeft />
            </button>
            <h4>{`${Math.floor(index / 10) + 1}/${
              Math.floor(booksCount / 10) + 1
            }`}</h4>
            <button
              onClick={handleNextPage}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 ${
                booksCount < index + 10 ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </>
      )}
    </>
  )
}