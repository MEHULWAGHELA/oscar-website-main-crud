import "./HomeSec3.css";
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import DynamicHomeSec3 from "./DynamicHomeSec3";
import axios from "axios";

function NewSlider() {
    // const array = [
    //     {to : '/courses/angular' , img : require('./../../Assets/Images/Carousal2/slide1.jpg') , a : 'Angular'},
    //     {to : '/courses/reactJS' , img : require('./../../Assets/Images/Carousal2/slide2.png') , a : 'React JS'},
    //     {to : '/courses/nodeJS' , img : require('./../../Assets/Images/Carousal2/slide3.png') , a : 'Node JS'},
    //     {to : '/courses/flutter' , img : require('./../../Assets/Images/Carousal2/slide5.png') , a : 'Flutter'},
    //     {to : '/courses/reactNative' , img : require('./../../Assets/Images/Carousal2/slide6.png') , a : 'React Native'},
    //     {to : '/courses/uiux' , img : require('./../../Assets/Images/Carousal2/slide7.jpg') , a : 'UI / UX Designing'},
    //     {to : '/courses/webDesigning' , img : require('./../../Assets/Images/Carousal2/slide8.png') , a : 'Web Designing'},
    //     {to : '/courses/wordpress' , img : require('./../../Assets/Images/Carousal2/slide9.png') , a : 'WordPress Development'},
    //     {to : '/courses/vueJS' , img : require('./../../Assets/Images/Carousal2/slide10.png') , a : 'Vue JS'},
    //     {to : '/courses/asp.netmvc' , img : require('./../../Assets/Images/Carousal2/slide11.png') , a : 'ASP.NET MVC'},
    //     {to : '/courses/asp.netcore' , img : require('./../../Assets/Images/Carousal2/slide12.png') , a : 'ASP.NET Core'},
    //     {to : '/courses/corePHP' , img : require('./../../Assets/Images/Carousal2/slide13.png') , a : 'Core PHP'},
    //     {to : '/courses/codeigniter' , img : require('./../../Assets/Images/Carousal2/slide14.png') , a : 'Codeigniter (PHP Framework)'},
    //     {to : '/courses/laravel' , img : require('./../../Assets/Images/Carousal2/slide15.png') , a : 'Laravel (PHP Framework)'},
    //     {to : '/courses/android' , img : require('./../../Assets/Images/Carousal2/slide16.png') , a : 'Android'},
    //     {to : '/courses/ios' , img : require('./../../Assets/Images/Carousal2/slide17.png') , a : 'iOS'},
    //     {to : '/courses/marketing' , img : require('./../../Assets/Images/Carousal2/slide18.png') , a : 'Digital Marketing'},
    //     {to : '/courses/cprogramming' , img : require('./../../Assets/Images/Carousal2/slide19.png') , a : 'C Programming'},
    //     {to : '/courses/c++' , img : require('./../../Assets/Images/Carousal2/slide20.png') , a : 'C++ Programming'},
    //   ];

    const [array, setarray] = useState([]);
  
    useEffect(() => {
      getApi()
    }, [])
  
    const getApi = () => {
        axios.get("http://localhost:1000/api/courses/getdata").then((res)=>{
            setarray([...res.data.data])
        })
    }

      const settings = {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay : true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
              centerPadding : '25px'
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1,
              centerPadding : '30px'
            },
          },
        ],
      };

  return (
    <div className="App container HomeSec3">
      <h2 className="">POPULAR COURSES</h2>
      <section className="center slider g-0">
        <div>
          <Slider {...settings}>
            {
              array.map((x,i)=>{
                return <DynamicHomeSec3 key={i} HomeSec3={x}/>
              })
            }
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default NewSlider