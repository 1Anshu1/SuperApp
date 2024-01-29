import './App.css'

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Register from './pages/register/Register'
import Info from './pages/info/Info'
import Movies from './pages/movies/Movies'
import Showcase from './pages/showcase/Showcase'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/register' element={<Register />} />
        <Route path='/info' element={<Info />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/showcase' element={<Showcase />} />
        <Route path='*' element={<h1> 404 Not found </h1>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
