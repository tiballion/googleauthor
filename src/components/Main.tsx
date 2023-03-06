import React, { useState, useEffect } from "react"
import axios from "axios"
import { Book } from "../types"
import { Books, Pagination, Search } from "."

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

  return (
    <>
      <Search
        setBooks={setBooks}
        setBooksCount={setBooksCount}
        setSearch={setSearch}
        setIndex={setIndex}
        handleRequest={handleRequest}
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
              setIndex={setIndex}
            />
          </div>
        )}
      </div>
    </>
  )
}
