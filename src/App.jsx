import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NewUser from './components/NewUser'

function App() {

  // const [username, setUsername] = useState('Test')

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"     element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="new"   element={<NewUser  />} />
      </Routes>
    </div>
  )
}

export default App
