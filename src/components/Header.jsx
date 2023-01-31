import React from "react"

const Header = () => {
  return (
    <header className="bg-zinc-800 p-3 m-2 rounded-md flex flex-col items-center text-center shadow-md">
      <h1 className="text-4xl">Google Author </h1>
      <h3 className="pl-2 text-neutral-400 text-center">
        API de recherche Google
      </h3>
    </header>
  )
}

export default Header
