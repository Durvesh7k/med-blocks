import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import record from '../assets/record.jpg'


const Details = () => {
    const location = useLocation();

    const data = location.state?.data;
    console.log(data);


    return (
        <>

            <div className='pt-8 h-screen w-screen bg-gradient-to-r from-[#38065d] to-[#3e0765] flex justify-center items-center overflow-hidden'>
                <div className='flex space-x-24 w-11/12 mx-40'>
                <img src={record} alt="" className='h-[30rem] border-4 border-black' />
                <div className='text-white'>
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