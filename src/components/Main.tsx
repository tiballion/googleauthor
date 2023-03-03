import React, { useState, useEffect, SyntheticEvent } from "react"
import axios from "axios"
import { Book } from "../types"
import { Books, Pagination, Search } from "./components"

export const Main: React.FC = () => {
  const [search, setSearch] = useState<string>("")
  const [booksCount, setBooksCount] = useState<number>(-1)
  const [books, setBooks] = useState<Array<Book>>([])
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    if (!search) return
    handleRequest()
  }, [index])

  const handleRequest = async () => {
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
      <Search
        handleClear={handleClear}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <div className="ml-3 flex justify-center">
        {booksCount === -1 ? (
          "Veuillez saisir le nom d'un auteur"
        ) : booksCount === 0 ? (
          "Aucun résultat pour votre recherche"
        ) : (
          <div className="flex flex-col items-center">
            <p>{`${booksCount} résultats pour ${search}`}</p>
            <Books books={books} />
            <Pagination
              booksCount={booksCount}
              index={index}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
            />
          </div>
        )}
      </div>
    </>
  )
}
