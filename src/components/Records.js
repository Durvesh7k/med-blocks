import React, { useState } from 'react'
import record from '../assets/record.jpg'
import { Link } from 'react-router-dom';

const NewRecords = () => {

    const [data, setData] = useState({
        heading : "Heading",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde est, voluptatibus eum assumenda ipsam! Quidem, molestias! A nulla et, nisi neque tempore autem repellendus culpa obcaecati, provident omnis mollitia vero, corporis odio facere?",
        time : "time"
    })

    return (
        <div className='h-screen w-screen bg-gradient-to-r from-[#38065d] to-[#3e0765] overflow-x-hidden'>
            <div className="flex flex-col justify-center items-center">
                <h1 className='text-white text-lg md:text-xl lg:text-3xl font-righteous tracking-wider uppercase pt-24 lg:px-32 pb-5 underline underline-offset-8 '>YOUR RECORDS</h1>

                {/* CARDS */}
                <div className='grid xl:grid-cols-5 xl:gap-x-10 xl:px-20 xl:gap-y-14 xl:pb-32 gap-y-6 lg:grid-cols-3 md:grid-cols-3 md:gap-x-4 pb-20 pt-10 justify-center'>

                    {/* CARD */}
                    <Link to="/details" state={{data:data}}  className='lg:h-max lg:w-64 w-64  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg h-max  '>
                        <div className='overflow-hidden rounded-xl cursor-pointer  '>
                            <img src={record} alt="" className=' hover:scale-110 hover:z-0 transition duration-500 ease-in-out h-52' />
                        </div>
                        <h1 className='tracking-wider font-bold text-2xl '>Heading</h1>
                        <h1 className='font-roboto text-ellipsis--2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde est, voluptatibus eum assumenda ipsam! Quidem, molestias! A nulla et, nisi neque tempore autem repellendus culpa obcaecati, provident omnis mollitia vero, corporis odio facere?</h1>
                    </Link>

                
                  



                </div>
            </div>
        </div>
    )
}

export default NewRecords