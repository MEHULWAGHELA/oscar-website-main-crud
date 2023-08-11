import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import DynamicHomeSec1 from './DynamicHomeSec1';
import "./HomeSec1.css";
import axios from 'axios';

function HomeSec1() {
  const [array, setarray] = useState([]);
  let blankobj ={image:''};
  const [obj, setobj] = useState(blankobj);

  useEffect(() => {
    
  
    getApi()
  }, [])

  const getApi = () => {
      axios.get("http://localhost:1000/api/slider/getdata").then((res)=>{
          setarray([...res.data.data])
      })
  }

  const settings = {
    // centerMode: true,
    centerPadding: '10px',
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    autoplay : true,
    arrows: true,
    dots: false
  }

  return (
    <div className="App container-fluid g-0" id='homsec1'>
      <Slider {...settings} className='' >
        {
          array.map((x,i)=>{
            return <DynamicHomeSec1 key={i} HomeSec1={x}/>
          })
        }
      </Slider>
    </div>
  )
}

export default HomeSec1