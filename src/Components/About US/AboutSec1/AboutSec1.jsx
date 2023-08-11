import React from 'react'
import "./AboutSec1.css"

function AboutSec1(props) {
  return (
    <>
        <div className='aboutSec1'>
            <div className='container-fluid py-5 aboutSec1bgc'>
              <h2 className='py-4'>{props.title}</h2>
            </div>
        </div>
    </>
  )
}

export default AboutSec1