import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from './Pages/Auth'
import Home from './Pages/Home';


import './assets/css/App.css'
import './assets/css/App/backdropFilter.css'

function App() {

  return (
    <>
    <Router basename="/Auth-Page-on-React">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
