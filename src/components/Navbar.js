import React from 'react'
import { Link } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Navbar = () => {
    return (
        <div className='flex gap-4 items-center py-4'>
            <Link to='/'>
                Home
            </Link>
            <Link to='/New'>
                New Record
            </Link>
            <Link to='/Publish'>
                Publish
            </Link>
            <ConnectButton/>
        </div>
    )
}

export default Navbar