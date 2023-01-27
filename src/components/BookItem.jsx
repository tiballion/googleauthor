const BookItem = ({ book }) => {
  const handleClick = () => {
    console.log(book)
  }

  return (
    <>
      <div
        className="h-60 p-2 bg-zinc-800 overflow-auto rounded-md flex flex-col items-center cursor-pointer"
        onClick={() => window.open(book.volumeInfo.infoLink)}
      >
        <h2 className="text-xl font-semibold text-center">
          {book.volumeInfo.title}
        </h2>
        <p>
          {book.volumeInfo.authors.map((author) => (
            <span className="text-sm mx-1 rounded-md">{author}</span>
          ))}
        </p>
        <p className="text-sm">{book.volumeInfo.publishedDate}</p>
      </div>
    </>
  )
}

export default BookItem
