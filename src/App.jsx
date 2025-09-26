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
      
      <div className='flex justify-around items-center p-6'>
        <Title /> 
        <Languages />
      </div>

      <div 
        className='relative w-full flex relative'
        style={{ height: '80vh'}}
      >
        <div 
          className='backdropFilter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-2xl bg-opacity-50'
        >
          <Form />
        </div>
      </div>
    </>
  )
}

export default App
