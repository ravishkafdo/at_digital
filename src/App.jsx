import React from 'react'
import HomePage from './pages/homePage'
import './App.css'
import BootstrapNav from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <BootstrapNav/>
    <HomePage/>
    <Footer/>
    </>
  )
}

export default App