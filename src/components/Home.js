import React from 'react'
import { useStateContext } from '../context'
import image from "../assets/main.png"
import {Link} from "react-router-dom"

const Home = () => {

  const { address } = useStateContext()
  return (
    <div className='flex items-center justify-center text-lg pb-40 w-screen bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900'>
        {/* <p>
          You are connected to: {address != null ? <span>{address}</span> : <span>Not connected</span>}
        </p> */}

        <div className='text-white lg:px-48 flex flex-col-reverse lg:flex-row lg:space-x-10 items-center justify-center mx-auto mt-32'>
        <div> <p className='text-justify mx-5 text-[1.4rem]'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates perspiciatis cum libero accusantium, magni inventore iusto fugit repellat vel! Dolorum numquam repellat ducimus animi voluptatem accusantium velit tenetur itaque quibusdam. </p>
          <button className='mx-5 mt-5 p-2 px-5 rounded-lg bg-blue-800 text-white font-bold tracking-wider hover:scale-105 transition duration-200 text-xl '><Link to='/records' className=' '>Records</Link></button>
        </div>
        <img src={image} alt="" className=' h-72 lg:h-[30rem]' />
        </div>
    </div>
  )
}

export default Home


// from-blue-900 via-gray-900 to-red-900