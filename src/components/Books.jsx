import React, { Component } from "react"
import BookItem from "./BookItem"

class Books extends Component {
  render() {
    const { books } = this.props
    return (
      <>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-5 lg:grid-rows-2">
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      </>
    )
  }
}

export default Books
