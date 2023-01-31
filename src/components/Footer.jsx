import React, { Component } from "react"
import { AiOutlineGithub } from "react-icons/ai"
import { BsCodeSlash } from "react-icons/bs"

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-zinc-800 text-center fixed inset-x-0 bottom-0 p-4 m-2 rounded-md shadow-md align-middle justify-center">
        <button>
          <AiOutlineGithub size={32} />
        </button>
        <button>
          <BsCodeSlash size={32} />
        </button>
      </footer>
    )
  }
}

export default Footer
