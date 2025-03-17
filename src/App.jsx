import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import BootstrapNav from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MaintenancePage from './components/Maintenance/MaintenancePage'
import HomePage from './pages/MainPage';

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>

const App = () => {
  return (
    <>
      <BootstrapNav />
      <Routes>  
        <Route path="/" element={<HomePage/>} />  
        <Route path="/maintenance" element={<MaintenancePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
