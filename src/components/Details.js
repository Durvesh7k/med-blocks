import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import record from '../assets/record.jpg'


const Details = () => {
    const location = useLocation();

    const data = location.state?.data;
    return (
        <>
            <div className='pt-36 w-screen bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 flex  justify-center items-center overflow-hidden pb-20 lg:pb-40'>
                <div className='flex lg:space-x-24 w-11/12 flex-col lg:flex-row justify-center items-center lg:items-start px-3 lg:px-20 '>
                    <div className='min-w-max overflow-hidden'>
                        <img src={record} alt="" className=' h-72 w-72 sm:h-96 sm:w-96 md:h-80 lg:h-[30rem] lg:w-[30rem] border-4 border-black hover:scale-105 transition duration-200 cursor-pointer ' />
                    </div>

                    <div className='text-white mt-12 mb-20'>
                        <p className='tracking-wider font-bold text-4xl break-all pb-4'>{data.title}</p>
                        <hr />
                        <p className='text-justify text-lg mt-6 tracking-wider font-light'>Description: {data.description}</p>
                        <p className='text-justify mt-6 tracking-wider text-lg'>Recordtime: {data.timestamp}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details