import React from 'react'
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <footer className="px-4 md:px-12 dark:bg-gray-800 dark:text-gray-100 w-screen flex justify-center space-x-20 sm:space-x-40 p-10">
            <h1 className='text-xl font-roboto tracking-wider font-bold'>MED-BLOCKS</h1>

            <ul className="space-y-1">
                <li className='underline-offset-4 underline'>Developers: </li>
                <li>
                    <a rel="noopener noreferrer" href="https://github.com/Durvesh7k" target="_blank">Durvesh7K</a>
                </li>
                <li>
                    <a rel="noopener noreferrer" href="https://github.com/ompanchwate" target="_blank">OmPanchwate</a>
                </li>

            </ul>


        </footer>
    )
}


export default Footer