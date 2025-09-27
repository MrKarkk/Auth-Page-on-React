import React from 'react'
import Title from '../components/FormPage/Title'
import Languages from '../components/FormPage/Language/Languages'
import Form from '../components/FormPage/Form/Form'
import BackgroundImage from '../components/FormPage/BackgroundImage'

import '../assets/css/App.css'
import '../assets/css/App/backdropFilter.css'

function Auth() {

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

export default Auth
