import React from 'react'
import AboutSec1 from '../Components/About US/AboutSec1/AboutSec1'
import FollowUs from '../Components/FollowUs/FollowUs'
import ContactSec1 from '../Components/ContactUs/ContactSec1'
import ContactSec2Form from '../Components/ContactUs/ContactSec2Form'

function CountactUs() {
  return (
    <>
        <AboutSec1 title="CONTACT US" />
        <ContactSec1 />
        <ContactSec2Form />
        <FollowUs />
    </>
  )
}

export default CountactUs