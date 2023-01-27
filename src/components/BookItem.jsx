const BookItem = ({ book }) => {
  return (
    <>
      <div className="h-40 p-2 bg-zinc-800 overflow-auto rounded-md">
        <h3>{book.volumeInfo.title}</h3>
        <p>{book.volumeInfo.authors}</p>
        <p>{book.volumeInfo.publishedDate}</p>
      </div>
    </>
  )
}

export default BookItem
