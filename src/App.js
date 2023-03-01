import React from 'react'
import { StateContextProvider } from './context'
import { Route, Routes, routes } from 'react-router-dom'
import Home from './components/Home';
import Newrecord from './components/Newrecord';
import Publish from './components/Publish';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <StateContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/New' element={<Newrecord />} />
          <Route path='/Publish' element={<Publish />} />
        </Routes>
      </StateContextProvider>
    </div>


  )
}

export default App