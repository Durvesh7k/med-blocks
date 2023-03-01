import React from 'react'
import { useStateContext } from '../context'

const Home = () => {

  const { address } = useStateContext()
  return (
    <div>
      <h1 className='text-lg'>
        Home
        {/* <p>
          You are connected to: {address != null ? <span>{address}</span> : <span>Not connected</span>}
        </p> */}
      </h1>
    </div>
  )
}

export default Home