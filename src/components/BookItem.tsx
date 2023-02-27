import { Book } from "../types"

interface BookItemProps {
  book: Book
}

export const BookItem = ({ book }: BookItemProps) => {
  return (
    <>
      <div
        className="h-80 p-2 bg-zinc-800 hover:overflow-auto rounded-md flex flex-col justify-between items-center cursor-pointer border border-gray-700 hover:border-indigo-500"
        onClick={() => window.open(book.volumeInfo.infoLink)}
      >
        <h2 className="text-xl font-semibold text-center">
          {book.volumeInfo.title}
        </h2>
        <img
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : "https://via.placeholder.com/150"
          }
          alt={book.volumeInfo.title}
          className="w-40 h-40 object-fit"
        />
        <div className="flex flex-col items-center">
          {book.volumeInfo.authors ? (
            <p className="text-center">
              {book.volumeInfo.authors.map((author: string, id: number) => (
                <span key={id} className="text-sm mx-1 rounded-md">
                  {author}
                </span>
              ))}
            </p>
          ) : (
            <p className="text-sm">Auteur inconnu</p>
          )}
          <p className="text-sm">{book.volumeInfo.publishedDate}</p>
        </div>
      </div>
    </>
  )
}
