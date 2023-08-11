import React from 'react'
import Slider from 'react-slick';
import DynamicHomeSec8 from './DynamicHomeSec8';
import "./HomeSec8.css"
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function HomeSec8() {

  const [array, setarray] = useState([]);

  // useEffect(() => {  
  //   getApi()
  // }, [])

  // const getApi = () => {
  //     axios.get("http://localhost:1000/api/slider/getdata").then((res)=>{
  //         setarray([...res.data.data])
  //     })
  // }

    // const array = [
    //     {img : require('./../../Assets/Images/carousal3/img1.png') },
    //     {img : require('./../../Assets/Images/carousal3/img2.png') },
    //     {img : require('./../../Assets/Images/carousal3/img3.png') },
    //     {img : require('./../../Assets/Images/carousal3/img4.jpg') },
    //     {img : require('./../../Assets/Images/carousal3/img5.png') },
    //     {img : require('./../../Assets/Images/carousal3/img6.png') },
    //     {img : require('./../../Assets/Images/carousal3/img7.jpg') },
    //     {img : require('./../../Assets/Images/carousal3/img8.png') },
    //     {img : require('./../../Assets/Images/carousal3/img9.jpg') },
    //     {img : require('./../../Assets/Images/carousal3/img10.png')},
    //     {img : require('./../../Assets/Images/carousal3/img11.png')},
    //     {img : require('./../../Assets/Images/carousal3/img12.png')},
    //     {img : require('./../../Assets/Images/carousal3/img13.png')},
    //     {img : require('./../../Assets/Images/carousal3/img14.png')},
    //     {img : require('./../../Assets/Images/carousal3/img15.png')},
    //     {img : require('./../../Assets/Images/carousal3/img16.png')},
    //     {img : require('./../../Assets/Images/carousal3/img17.png')},
    //     {img : require('./../../Assets/Images/carousal3/img18.png')},
    //     {img : require('./../../Assets/Images/carousal3/img19.png')},
    //     {img : require('./../../Assets/Images/carousal3/img20.png')},
    //     {img : require('./../../Assets/Images/carousal3/img21.png')},
    //     {img : require('./../../Assets/Images/carousal3/img22.png')},
    //     {img : require('./../../Assets/Images/carousal3/img23.png')},
    //     {img : require('./../../Assets/Images/carousal3/img24.png')},
    //     {img : require('./../../Assets/Images/carousal3/img25.png')},
    //     {img : require('./../../Assets/Images/carousal3/img26.png')},
    //     {img : require('./../../Assets/Images/carousal3/img27.png')},
    //     {img : require('./../../Assets/Images/carousal3/img28.jpg')},
    //     {img : require('./../../Assets/Images/carousal3/img29.png')},
    //     {img : require('./../../Assets/Images/carousal3/img30.png')},
    //     {img : require('./../../Assets/Images/carousal3/img31.png')},
    //     {img : require('./../../Assets/Images/carousal3/img32.png')},
    //     {img : require('./../../Assets/Images/carousal3/img33.png')},
    //     {img : require('./../../Assets/Images/carousal3/img34.png')},
    //     {img : require('./../../Assets/Images/carousal3/img35.jpg')},
    //     {img : require('./../../Assets/Images/carousal3/img36.jpg')},
    //     {img : require('./../../Assets/Images/carousal3/img37.png')},
    //     {img : require('./../../Assets/Images/carousal3/img38.png')},
    //     {img : require('./../../Assets/Images/carousal3/img39.jpeg')},
    //     {img : require('./../../Assets/Images/carousal3/img40.png')},
    //     {img : require('./../../Assets/Images/carousal3/img41.png')},
    //     {img : require('./../../Assets/Images/carousal3/img42.png')},
    //     {img : require('./../../Assets/Images/carousal3/img43.png')},
    //   ];

      const settings = {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 4,
        speed: 500,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay : true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            //   centerPadding : '10px'
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            //   centerPadding : '30px'
            },
          },
        ],
      };

  return (
    <div className="App container HomeSec8 py-5">
      <h2 className="fw-bold">OUR ASSOCIATE PARTNERS</h2>
      <section className="center slider g-0">
        <div>
          <Slider {...settings}>
            {
              array.map((x,i)=>{
                return <DynamicHomeSec8 key={i} HomeSec3={x}/>
              })
            }
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default HomeSec8