import React from 'react'
import { StateContextProvider } from './context'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Newrecord from './components/Records';
import Publish from './components/Publish';
import Navbar from './components/Navbar';
import Details from './components/Details'
import Footer from './components/Footer';
import Loading from './components/Loading';
import { ThirdwebProvider } from "@thirdweb-dev/react";



const App = () => {
  return (
    <div className='overflow-hidden'>
      <StateContextProvider>
        <Navbar />
        <ThirdwebProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/records' element={<Newrecord />} />
            <Route path='/Publish' element={<Publish />} />
            <Route path='/records/details' element={<Details />} />
            <Route path='/loading' element={<Loading />} />
          </Routes>
        </ThirdwebProvider>
        <Footer />
      </StateContextProvider>
    </div>


  )
}

export default App