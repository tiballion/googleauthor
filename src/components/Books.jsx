import BookItem from "./BookItem"

const Books = (books) => {
  return (
    <>
      <div className="book-container">
        {books.books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </>
  )
}

export default Books
