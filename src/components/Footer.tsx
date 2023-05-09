import React from 'react'
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <main className='mb-4'>
            <div className="text-gray-600/90 text-center mt-[200px] ">Made with ❤️ by Mardav Jadaun </div>
            <div className="flex justify-center items-center py-2">
                <div className=" cursor-pointer text-2xl text-gray-600/80 hover:text-yellow-600 hover:scale-110 duration-100 px-2 ">
                    <a href="https://www.instagram.com/mardav__13/" target="blank"><FaInstagram /></a>
                </div>
                <div className=" cursor-pointer text-2xl text-gray-600/80 hover:text-yellow-600 hover:scale-110 duration-100 px-2 ">
                    <a href="https://twitter.com/mardav_13" target="blank"><FaTwitter /></a>
                </div>
                <div className=" cursor-pointer text-2xl text-gray-600/80 hover:text-yellow-600 hover:scale-110 duration-100 px-2 ">
                    <a href="https://github.com/mardavsj" target="blank"><FaGithub /></a>
                </div>
                <div className=" cursor-pointer text-2xl text-gray-600/80 hover:text-yellow-600 hover:scale-110 duration-100 px-2 ">
                    <a href="https://www.linkedin.com/in/mardav-jadaun-13s/" target="blank"><FaLinkedin /></a>
                </div>
            </div>
        </main>
    )
}

export default Footer
