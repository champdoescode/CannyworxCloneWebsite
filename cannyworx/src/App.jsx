import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Homeflex } from './components/Homeflex'
import { Grid1 } from './components/Grid1'
import { Grid2 } from './components/Grid2'
import { Grid3 } from './components/Grid3'
import { Footer } from './components/Footer'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home />
      {/* <Homeflex/>
      <Grid1/>
      <Grid2/>
      <Grid3/> */}
      
      <Footer/>
    </>
  )
}

export default App
