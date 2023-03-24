import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="flex justify-center items-center mt-10">
        <div className="flex cursor-pointer text-2xl text-gray-600/80 hover:text-yellow-600 hover:scale-110 duration-100 ml-96 px-10">
            <a href="https://github.com/mardavsj/typing-test" target="blank"><FaGithub/></a>
            <h1 className=" text-base px-2 text-gray-600/90 hover:text-gray-300 duration-100"><a href="https://github.com/mardavsj/typing-test" target="blank"> Source Code </a></h1>
        </div>
        <div className="text-base text-gray-600/90 hover:text-gray-300 duration-100 hover:scale-110 cursor-pointer">Readme</div>
    </div>
  )
}

export default Navbar