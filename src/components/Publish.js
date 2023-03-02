import React from 'react'

const Publish = () => {
  return (
    <div className='pt-8  pb-20 w-screen bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center '>
      <div className='p-10 bg-[#24133d] bg-opacity-90 w-11/12  lg:w-4/6 xl:w-1/3 tracking-wide rounded-3xl mt-20 '>
        <h1 className='text-2xl text-white tracking-wider font-bold'>Publish a new Record</h1>
        <div className=' h-[0.125rem] bg-slate-600 my-2'></div>
        <form action="" className='flex flex-col justify-center'>
          <div className='mb-4'>
            <label className='text-white ml-3'>Title</label>
            <input type="text" name='title' placeholder='Enter Title of a record' className='w-full p-2 rounded-lg mt-2 outline-none' />
          </div>

          <div className='mb-4'>
            <label className='text-white ml-3'>Description</label>
            <textarea type="text" name='desc' rows="4" placeholder='Enter description of record' className='w-full p-2 rounded-lg mt-2 outline-none' />
          </div>

          <div>
            <h1 className='text-white mb-3'>Choose a File</h1>
            <input type='file' className='font-semibold tracking-wide cursor-pointer text-white' placeholder='Select'/>
          </div>


          <div className='h-[0.02rem] bg-gray-300 w-full mt-5'></div>

          <div className='mt-5 flex justify-center'>
            <button className="bg-blue-600 text-white p-2 w-40 rounded-full tracking-wide font-bold text-lg hover:scale-105 transition duration-200">Publish</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Publish