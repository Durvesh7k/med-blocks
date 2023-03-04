import React from 'react'

const Loading = (value) => {
    return (
        <div className='h-screen bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center'>
            <div className='mb-20'>
                <div className='flex justify-center items-center h-96'>
                    <div className='flex items-center justify-center mb-0'>
                        <ul className='loader-list'>
                            <li className='dot-1'></li>
                            <li className='dot-2'></li>
                            <li className='dot-3'></li>
                            <li className='dot-4'></li>
                        </ul>
                    </div>
                    <div className='flex justify-center mt-16'>
                        <h1 className='text-xl text-gray-200 font-light mt-5 translate-y-7 tracking-wider'>{value}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading