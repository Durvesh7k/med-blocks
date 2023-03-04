import React, { useEffect, useState } from 'react'
import record from '../assets/record.jpg'
import { Link } from 'react-router-dom';
import { useContract, useSigner } from 'wagmi';
import { useStateContext } from '../context';
import { ethers } from 'ethers';

const NewRecords = () => {
    const [recordsArray, setRecordsArray] = useState([]);
    const { address, contractAddress, contractABI } = useStateContext();

    useEffect(() => {
        getAllRecords();
        console.log(recordsArray)
    }, [])



    const getAllRecords = async () => {
        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    contractAddress.address,
                    contractABI,
                    signer
                )

                const records = await contract.getAllRecords();
                let recordsClean = [];
                records.forEach((record) => {
                    recordsClean.push({
                        id: record.id,
                        title: record.title,
                        description: record.description,
                        timestamp: new Date(record.timestamp * 1000).toString(),
                        imageURL: record.imageURI
                    })
                })
                setRecordsArray(recordsClean);
                console.log("successfully get the array")
                console.log(recordsClean);
            } else {
                console.log("ethreuem object not found")
            }



        } catch (e) {
            console.log(e);
        }

    }

    const [data, setData] = useState({
        heading: "Heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde est, voluptatibus eum assumenda ipsam! Quidem, molestias! A nulla et, nisi neque tempore autem repellendus culpa obcaecati, provident omnis mollitia vero, corporis odio facere?",
        time: "time"
    })

    return (
        <div className='w-screen bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden  pb-40'>
            <div className="flex flex-col justify-center items-center">
                <h1 className='text-white text-xl lg:text-3xl tracking-wider uppercase pt-28 lg:px-32 pb-5 underline underline-offset-8 font-bold '>YOUR RECORDS</h1>

                {/* CARDS */}
                <div className='grid xl:grid-cols-5 xl:gap-x-10 xl:px-20 xl:gap-y-14 xl:pb-32 gap-y-6 lg:grid-cols-3 md:grid-cols-3 md:gap-x-4 pb-20 pt-10 justify-center'>

                    {/* CARD */}
                    <Link to="/details" state={{ data: data }} className='lg:h-max lg:w-64 w-64  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg h-max  '>
                        <div className='overflow-hidden rounded-xl cursor-pointer  '>
                            <img src={record} alt="" className=' hover:scale-110 hover:z-0 transition duration-500 ease-in-out h-52' />
                        </div>
                        <h1 className='tracking-wider font-bold text-2xl '>Heading</h1>
                        <h1 className='font-roboto text-ellipsis--2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde est, voluptatibus eum assumenda ipsam! Quidem, molestias! A nulla et, nisi neque tempore autem repellendus culpa obcaecati, provident omnis mollitia vero, corporis odio facere?</h1>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl sm:text-3xl text-white underline underline-offset-8 pb-10 '>Give Access to someone</h1>
                <div className=' flex sm:space-x-4 flex-col space-y-8 sm:space-y-0 justify-center items-center sm:flex-row'>
                    <input type="text" className=' p-2 w-60 sm:w-96 rounded-lg bg-slate-600 outline-none text-white tracking-wider' placeholder='Enter the account address' />
                    <button className='text-white bg-blue-600 sm:px-6 w-32 sm:w-40 py-[0.6rem] rounded-lg tracking-wider hover:scale-105 transition duration-200 font-semibold text-sm sm:text-[1rem] '>Give Access</button>
                </div>
                <hr />
            </div>

            <div className='flex justify-center items-center'>
                <div className='bg-violet-800 text-white  mt-20 lg:w-1/3 rounded-lg py-10 px-12 tracking-wide '>
                    <h1 className='text-xl sm:text-2xl underline underline-offset-4 mb-7 font-bold'>Owners</h1>
                    <ul>
                        <li className='list-disc font-light text-lg'>user@hhhhahhfhhfhfh</li>
                    </ul>
                </div>
            </div>



        </div>
    )
}

export default NewRecords