import React from "react"
import { AiOutlineGithub } from "react-icons/ai"
import { BsCodeSlash } from "react-icons/bs"

const Header = () => {
  return (
    <header className="bg-zinc-800 p-3 m-2 rounded-md flex flex-col items-center text-center shadow-md">
      <h1 className="text-4xl">Google Author </h1>
      <div className="flex justify-center align-middle items-center">
        <button>
          <AiOutlineGithub size={28} />
        </button>
        <h3 className="px-2 text-neutral-400 text-center">
          API de recherche Google
        </h3>
        <button>
          <BsCodeSlash size={28} />
        </button>
      </div>
    </header>
  )
}

export default Header
