import BookItem from "./BookItem"

const Books = (books) => {
  return (
    <>
      <div className="grid gap-4 grid-cols-5 grid-rows-2 p-4">
        {books.books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </>
  )
}

export default Books
