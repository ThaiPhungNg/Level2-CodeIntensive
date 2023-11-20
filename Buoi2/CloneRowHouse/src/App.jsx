import { useState } from 'react'

import './App.css'
import Banner from './components/Banner'
import SearchBar from './components/SearchBar'
import Form from './components/Form'
import EmailSubmit from './components/EmailSubmit'
import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'

function App() {
 

  return (
   <div >
      <div className="header-conntainer">
        <div className="header-content">
           <Banner/>
          <div className='form-location-container'>   
            <SearchBar/>
            <Form/>
          </div>
        </div>
      </div>

      <div className="body-container">
        <div className="slogan-container">
            <p className='slogan'>DON'T MISS A BEAT.</p>
            <p className='slogan'> SUBSCRIBE AND STAY CONNECTED</p>
        </div>
        <EmailSubmit/>
        <SocialMedia/>
      </div>

    
        <Footer/>
      

  
   </div>
  
  )
}

export default App
