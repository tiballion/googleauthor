import React from "react"

const Header = () => {
  return (
    <header className="bg-zinc-800 p-3 m-2 rounded-md flex flex-col items-center">
      <h1>Google Author </h1>
      <h3 className="pl-2 text-neutral-400">
        API de recherche Google | Made by{" "}
        <a
          href="https://github.com/tiballion"
          target="_blank"
          className="text-indigo-500"
        >
          Timothée
        </a>
      </h3>
    </header>
  )
}

export default Header
