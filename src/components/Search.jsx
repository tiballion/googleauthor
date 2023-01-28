import React, { useState, useEffect } from "react"
import axios from "axios"
import Books from "./Books"

const Search = () => {
  const [search, setSearch] = useState("")
  const [booksCount, setBooksCount] = useState(-1)
  const [books, setBooks] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (search === "") return
    searchBook()
  }, [index])

  const searchBook = async () => {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setIndex(0)
    searchBook()
    e.target.reset()
  }

  const handleChange = (e) => {
    setIndex(0)
    setBooks([])
    setBooksCount(-1)
    setSearch(e.target.value)
  }

  const handleNextPage = (e) => {
    e.preventDefault()
    if (booksCount < index + 10) return
    setIndex((index) => index + 10)
  }

  const handlePreviousPage = (e) => {
    e.preventDefault()
    if (index === 0) return
    if (index < 10) setIndex(0)
    setIndex((index) => index - 10)
  }

  return (
    <>
      <div className="p-2">
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
          <input
            type="submit"
            value="Submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 m-1 border border-gray-400 rounded shadow"
          />
        </form>
      </div>
      <div className="ml-3 flex justify-center">
        {booksCount === -1 ? (
          "Veuillez saisir le nom d'un auteur"
        ) : booksCount === 0 ? (
          "Aucun résultat pour votre recherche"
        ) : (
          <p>{`${booksCount} résultats`}</p>
        )}
      </div>
      {booksCount > 0 && <Books books={books} />}
      {booksCount > 0 && (
        <div className="p-2 flex items-center justify-center">
          <button
            onClick={handlePreviousPage}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 ${
              index < 10 ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            Previous page
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
            Next page
          </button>
        </div>
      )}
    </>
  )
}

export default Search
