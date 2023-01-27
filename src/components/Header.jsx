import React from "react"
import { BsBook } from "react-icons/bs"

const Header = () => {
  return (
    <header className="bg-neutral-800 p-3">
      <h1>Google Author</h1>
      <h3 className="pl-2 text-neutral-400">API de recherche Google</h3>
      <BsBook />
    </header>
  )
}

export default Header
