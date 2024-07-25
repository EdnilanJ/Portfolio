import React from 'react'
import '../components/first.css'
import cov from '../images/grou.jpg'

const first = () => {
  return (
    <div className='first'>
        <img src={cov} className='ima'/>

            <h1 className='ngalan'>
                I'am Jonathan P. Ednilan 
            </h1>
             <p className='sen'>
            I'm a Web Developer, determine enough <br/> to meet your expectations the best that I can.
            </p>
            <div> 
              <label className='labelss'>Home</label>
              <label className='labelss'>About</label>
              <label className='labelss'>Contact</label>
              <label className='labelss'>Resume</label>
            </div>
    </div>
  )
}

export default first