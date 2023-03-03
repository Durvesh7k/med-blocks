import React, { useState } from 'react'
import { useStateContext } from '../context';
import axios from 'axios';
import mime from 'mime';
import path from 'path';
import { NFTStorage, File, Blob } from 'nft.storage'



const Publish = () => {
  const [imageFile, setImageFile] = useState();
  const [imageURI, setImageURI] = useState("");
  const [filePath, setFilePath] = useState("");



  const { address, contract } = useStateContext();


  const uploadImage = async (imageData) => {
    const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGZkMEI1NEY4QjkxNDk1MjUzOTEwY2U3NDY0NzczRUM5OTczNmI0RGQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3Nzg0MjU1MDU1MiwibmFtZSI6Ik1lZGJsb2NrIn0.jKv2Z5C3rl2KKgqhDuRA_eJAqvpWWUStzRDFteS3xbU'
    const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

    const imageFile = new File([imageData], 'nft.png', { type: 'image/png' })
    const {ipnft} = await client.store({
      name: 'Medical Data',
      description: 'The description of the image',
      image: imageFile
    })

    const url = `https://ipfs.io/ipfs/${ipnft}/metadata.json`
    console.log(url);
    return url
  }



  const uploadData = async(e) => {
    e.preventDefault();
    console.log("You clicked on me succesfully");
    let reader = new FileReader();
    reader.onloadend = function () {
        console.log(uploadImage(reader.result))
    }
    reader.readAsDataURL(filePath);
  }



  return (
    <div className='pt-8  pb-20 w-screen bg-gradient-to-r from-[#38065d] to-[#3e0765] flex justify-center items-center '>
      <div className='p-10 bg-[#24133d] bg-opacity-90 w-11/12  lg:w-4/6 xl:w-1/3 tracking-wide rounded-3xl mt-20 '>
        <h1 className='text-2xl text-white tracking-wider font-bold'>Publish a new Record</h1>
        <div className=' h-[0.125rem] bg-slate-600 my-2'></div>
        <form action="" className='flex flex-col justify-center' onSubmit={uploadData}>
          <div className='mb-4'>
            <label className='text-white ml-3'>Title</label>
            <input type="text" name='title' placeholder='Enter Title of a record' className='w-full p-2 rounded-lg mt-2' />
          </div>

          <div className='mb-4'>
            <label className='text-white ml-3'>Description</label>
            <textarea type="text" name='desc' rows="4" placeholder='Enter description of record' className='w-full p-2 rounded-lg mt-2' />
          </div>

          <div>
            <h1 className='text-white mb-3'>Choose a File</h1>
            <input type='file'
              className='font-semibold tracking-wide cursor-pointer text-white'
              placeholder='Select'
              onChange={e => setFilePath(e.target.files[0])}
            />
          </div>


          <div className='h-[0.02rem] bg-gray-300 w-full mt-5'></div>

          <div className='mt-5 flex justify-center'>
            <button
              type='submit'
              className="bg-blue-600 text-white p-2 w-40 rounded-full tracking-wide font-bold text-lg hover:scale-105 transition duration-200"
            >
              Publish
            </button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Publish