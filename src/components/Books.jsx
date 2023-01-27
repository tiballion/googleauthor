import BookItem from "./BookItem"

const Books = (books) => {
  return (
    <>
      <div className="grid gap-4 p-4 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-5 lg:grid-rows-2">
        {books.books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </>
  )
}

export default Books
