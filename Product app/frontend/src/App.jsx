import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Login1 from './components/Login1'
import Signup from './components/Signup'
import Admin from './components/admin'
import Product from './components/product'
import Maain from './components/Maain'



function App() {

  return (
    <>
      <div>
        
        
        <Routes>
          <Route path='/' element={<Login1/>}/>
          <Route path='/sign' element={<Signup/>}/>
          <Route path='/admin' element={<Maain child={<Admin/>} />} />
          <Route path='/product' element={<Maain child={<Product/>} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
