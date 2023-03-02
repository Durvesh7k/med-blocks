import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { Transition } from '@headlessui/react';
import { AiOutlineLogout } from 'react-icons/ai'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { HiOutlineX,HiMenuAlt3 } from 'react-icons/hi'

const Navbar = ({ account, onClickButton, handleLogout }) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-transparent fixed border-b-2 border-slate-700 w-screen text-gray-100 backdrop-filter backdrop-blur-lg py-3 h-[3.6rem] z-50">
            <div className="flex items-center justify-between px-8 px-10">
                <div className="brand-logo flex space-x-10">
                    <Link to="/" className="text-xl font-semibold  items-center hidden sm:flex ">
                        MED-BLOCKS
                    </Link>
                    <ul className="hidden  items-center md:flex text-lg font-roboto tracking-wide">
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' })} className='mx-1 px-2 font-semibold' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' })} className='mx-1 px-2 font-semibold' to='/records'>Records</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' })} to="/publish" className='mx-1 px-2 font-semibold'>Publish</NavLink>
                    </li>
                </ul>


                
                        </div>
                        <ConnectButton/>
                <div class="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
                    <button class="outline-none p-2   mobile-menu-button bg-slate-500/30 rounded-full border-1 border-gray-500 select-none focus:bg-slate-800">
                        {isOpen ? <HiOutlineX className='text-2xl text-gray-200' /> :
                            <HiMenuAlt3 className='text-2xl text-gray-200' />
                        }
                    </button>
                </div>
                
               

            </div>
            {/* Menu  Mobile*/}
            <Transition show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {
                    (ref) => (
                        <div className="md:hidden " id="mobile-menu">
                            <div
                                ref={ref}
                                className="dark:bg-transparent dark:text-white mx-4 pt-4 pb-4 space-y-1"
                            >

                                <Link
                                    to="/"
                                    activeClass="listens"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/records"
                                    activeClass="buyens"

                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Records
                                </Link>

                                <Link
                                    to="/publish"
                                    activeClass="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Publish
                                </Link>
                            </div>
                        </div>
                    )
                }

            </Transition>

        </nav >
    )
}

export default Navbar