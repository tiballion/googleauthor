import { SyntheticEvent } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

interface PaginationProps {
  booksCount: number
  index: number
  handleNextPage: (e: SyntheticEvent) => void
  handlePreviousPage: (e: SyntheticEvent) => void
}

export const Pagination = ({
  booksCount,
  index,
  handleNextPage,
  handlePreviousPage,
}: PaginationProps) => {
  return (
    <div className="p-2 flex items-center justify-center">
      <button
        onClick={handlePreviousPage}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 ${
          index < 10 && "cursor-not-allowed opacity-50"
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
          booksCount < index + 10 && "cursor-not-allowed opacity-50"
        }`}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  )
}
