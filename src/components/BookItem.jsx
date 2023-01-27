const BookItem = ({ book }) => {
  return (
    <>
      <div className="flex">
        <h3>{book.volumeInfo.title}</h3>
        <p>{book.volumeInfo.authors}</p>
        <p>{book.volumeInfo.publishedDate}</p>
        <p>{book.volumeInfo.description}</p>
      </div>
    </>
  )
}

export default BookItem
