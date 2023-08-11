import React from 'react'
import FollowUs from '../Components/FollowUs/FollowUs'
// import Header from '../Components/Header/Header'
import HomeSec1 from '../Components/HomeSec1/HomeSec1'
import HomeSec2 from '../Components/HomeSec2/HomeSec2'
// import HomeSec3 from '../Components/HomeSec3/HomeSec3'
import NewSlider from '../Components/HomeSec3/NewSlider'
import HomeSec4 from '../Components/HomeSec4/HomeSec4'
import HomeSec5 from '../Components/HomeSec5/HomeSec5'
// import HomeSec6 from '../Components/HomeSec6/HomeSec6'
import NewSec6 from '../Components/HomeSec6/NewSec6'
import HomeSec7 from '../Components/HomeSec7/HomeSec7'
import HomeSec8 from '../Components/HomeSec8/HomeSec8'

function Home() {
  return (
    <>
        {/* <Header/> */}
        <HomeSec1/>
        <HomeSec2/>
        {/* <HomeSec3/> */}
        <NewSlider/>
        <HomeSec4/>
        <HomeSec5/>
        {/* <HomeSec6/> */}
        <NewSec6 />
        <HomeSec7 />
        <HomeSec8 />
        {/* <Plugin /> */}
        <FollowUs />
    </>
  )
}

export default Home