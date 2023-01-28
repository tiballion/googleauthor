const BookItem = ({ book }) => {
  return (
    <>
      <div
        className="h-80 p-2 bg-zinc-800 overflow-auto rounded-md flex flex-col justify-between items-center cursor-pointer border border-gray-700 hover:border-indigo-500"
        onClick={() => window.open(book.volumeInfo.infoLink)}
      >
        <h2 className="text-xl font-semibold text-center">
          {book.volumeInfo.title}
        </h2>
        {book.volumeInfo.imageLinks ? (
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
            className="w-40 h-36 object-fit"
          />
        ) : (
          <img
            src="https://via.placeholder.com/150"
            alt={book.volumeInfo.title}
            className="w-40 h-30"
          />
        )}
        <div className="flex flex-col items-center">
          {book.volumeInfo.authors ? (
            <p className="text-center">
              {book.volumeInfo.authors.map((author) => (
                <span className="text-sm mx-1 rounded-md">{author}</span>
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

export default BookItem
