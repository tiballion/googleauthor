const BookItem = ({ book }) => {
  return (
    <>
      <div className="h-40 bg-stone-500 overflow-auto rounded-md">
        <h3>{book.volumeInfo.title}</h3>
        <p>{book.volumeInfo.authors}</p>
        <p>{book.volumeInfo.publishedDate}</p>
      </div>
    </>
  )
}

export default BookItem
