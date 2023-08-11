import React from 'react'
import AboutSec1 from '../Components/About US/AboutSec1/AboutSec1'
import AboutSec2 from '../Components/About US/AboutSec2/AboutSec2'
import AboutSec3 from '../Components/About US/AboutSec3/AboutSec3'
import FollowUs from './../Components/FollowUs/FollowUs'

function About() {
  return (
    <>
        <AboutSec1 title="ABOUT US"/>
        <AboutSec2 />
        <AboutSec3 />
        <FollowUs />
    </>
  )
}

export default About