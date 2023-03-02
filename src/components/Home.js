import React from 'react'
import { useStateContext } from '../context'
import image from "../assets/main.png"
import {Link} from "react-router-dom"

const Home = () => {

  const { address } = useStateContext()
  return (
    <div className='flex items-center justify-center text-lg pb-40 w-screen bg-gradient-to-r from-[#38065d] to-[#3e0765]'>
        {/* <p>
          You are connected to: {address != null ? <span>{address}</span> : <span>Not connected</span>}
        </p> */}

        <div className='text-white lg:px-48 flex flex-col-reverse lg:flex-row lg:space-x-24 items-center justify-center mx-auto mt-40'>
        <div> <p className='text-justify mx-10'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates perspiciatis cum libero accusantium, magni inventore iusto fugit repellat vel! Dolorum numquam repellat ducimus animi voluptatem accusantium velit tenetur itaque quibusdam. </p>
          <button className='mx-10 mt-5 p-2 px-5 rounded-xl bg-blue-700 text-white font-bold tracking-wider hover:scale-105 transition duration-200 '><Link to='/records' className=' '>Records</Link></button>
        </div>
        <img src={image} alt="" className=' h-72 lg:h-96' />
        </div>
    </div>
  )
}

export default Home


// from-blue-900 via-gray-900 to-red-900