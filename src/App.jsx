import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from './pages/Auth'
import Home from './pages/Home';
import PrivateRoute from './components/FormPage/Form/PrivateRoute'

import './assets/css/App.css'
import './assets/css/App/backdropFilter.css'


function App() {

  return (
    <>
    <Router basename="/Auth-Page-on-React">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home element={<PrivateRoute> <Home /> </PrivateRoute>}/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
