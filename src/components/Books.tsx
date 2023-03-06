import { BookItem } from "."
import { Book } from "../types"

interface BooksProps {
  books: Array<Book>
}

export const Books: React.FC<BooksProps> = ({ books }) => {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-5 lg:grid-rows-2">
      {books.map((book: Book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  )
}
