import React from 'react'
import "./HomeSec3.css";
import Slider from 'react-slick';
import DynamicHomeSec3 from './DynamicHomeSec3';

function HomeSec3() {
    const array = [
      {img : require('./../../Assets/Images/Carousal2/slide1.jpg') , a : 'Angular'},
      {img : require('./../../Assets/Images/Carousal2/slide2.png') , a : 'React JS'},
      {img : require('./../../Assets/Images/Carousal2/slide3.png') , a : 'Node JS'},
      {img : require('./../../Assets/Images/Carousal2/slide5.png') , a : 'Flutter'},
      {img : require('./../../Assets/Images/Carousal2/slide6.png') , a : 'React Native'},
      {img : require('./../../Assets/Images/Carousal2/slide7.jpg') , a : 'UI / UX Designing'},
      {img : require('./../../Assets/Images/Carousal2/slide8.png') , a : 'Web Designing'},
      {img : require('./../../Assets/Images/Carousal2/slide9.png') , a : 'WordPress Development'},
      {img : require('./../../Assets/Images/Carousal2/slide10.png') , a : 'Vue JS'},
      {img : require('./../../Assets/Images/Carousal2/slide11.png') , a : 'ASP.NET MVC'},
      {img : require('./../../Assets/Images/Carousal2/slide12.png') , a : 'ASP.NET Core'},
      {img : require('./../../Assets/Images/Carousal2/slide13.png') , a : 'Core PHP'},
      {img : require('./../../Assets/Images/Carousal2/slide14.png') , a : 'Codeigniter (PHP Framework)'},
      {img : require('./../../Assets/Images/Carousal2/slide15.png') , a : 'Laravel (PHP Framework)'},
      {img : require('./../../Assets/Images/Carousal2/slide16.png') , a : 'Android'},
      {img : require('./../../Assets/Images/Carousal2/slide17.png') , a : 'iOS'},
      {img : require('./../../Assets/Images/Carousal2/slide18.png') , a : 'Digital Marketing'},
      {img : require('./../../Assets/Images/Carousal2/slide19.png') , a : 'C Programming'},
      {img : require('./../../Assets/Images/Carousal2/slide20.png') , a : 'C++ Programming'},
    ];

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true ,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        },
      };
  return (
    <>
        <div className='container HomeSec3'>
        <h2>POPULAR COURSES</h2>
        <Slider {...settings} className="row">
            {
              array.map((x,i)=>{
                return <DynamicHomeSec3 key={i} HomeSec3={x}/>
              })
            }
        </Slider>
      </div>
    </>
  )
}

export default HomeSec3