import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import record from '../assets/record.jpg'


const Details = () => {
    const location = useLocation();

    const data = location.state?.data;
    console.log(data);


    return (
        <>

            <div className='pt-36 w-screen bg-gradient-to-r from-[#38065d] to-[#3e0765] flex  justify-center items-center overflow-hidden pb-20 lg:pb-40'>
                <div className='flex lg:space-x-24 w-11/12 flex-col lg:flex-row justify-center items-center lg:items-start'>
                <img src={record} alt="" className=' h-72 w-72 sm:h-96 sm:w-96 md:h-80  lg:h-[30rem] lg:w-[30rem] border-4 border-black ' />
                <div className='text-white mt-12 mb-20'>
                    <p className='tracking-wider font-bold text-4xl font-roboto break-all pb-4'>{data.heading}</p>
                    <hr />
                    <p className='text-justify mt-6'>{data.description}</p>
                    <p className='text-right mt-6 font-bold tracking-wider'>{data.time}</p>
                </div>
                </div>


            </div>


        </>
    )
}

export default Details