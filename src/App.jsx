import React from 'react'

import Title from './components/Title'
import Languages from './components/Language/Languages'
import Form from './components/Form/Form'
import BackgroundImage from './components/BackgroundImage'

import './assets/css/App.css'
import './assets/css/backdropFilter.css'

function App() {

  return (
    <>
      <BackgroundImage />
      
      <div className='phone items-center p-6'>
        <Title /> 
        <Languages />
      </div>

      <div 
        className='phone-div relative w-full flex relative'
      >
        <div 
          className='phone-form backdropFilter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-2xl bg-opacity-50'
        >
          <Form />
        </div>
      </div>
    </>
  )
}

export default App
