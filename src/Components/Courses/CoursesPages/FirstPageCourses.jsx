import React from 'react'
import DynamiceCoursesPage from '../DynamiceCoursesPage';
import AboutSec1 from '../../About US/AboutSec1/AboutSec1';

function FirstPageCourses() {
  const ary = [
    [
      { img: require("./../../../Assets/Images/Courses/img1.jpg"), a: "Angular" , to : 'angular'},
      { img: require("./../../../Assets/Images/Courses/img2.png"), a: "React JS" , to : 'reactJS'},
      { img: require("./../../../Assets/Images/Courses/img3.png"), a: "Node JS" , to : 'nodeJS'},
      { img: require("./../../../Assets/Images/Courses/img4.png"), a: "Flutter" , to : 'flutter'},
      {
        img: require("./../../../Assets/Images/Courses/img5.png"),
        a: "React Native",
        to : 'reactNative'
      },
      {
        img: require("./../../../Assets/Images/Courses/img6.jpg"),
        a: "UI / UX Designing",
        to : 'uiux'
      },
      {
        img: require("./../../../Assets/Images/Courses/img7.png"),
        a: "Web Designing",
        to : 'webDesigning'
      },
      {
        img: require("./../../../Assets/Images/Courses/img8.png"),
        a: "WordPress Development",
        to : 'wordpress'
      },
      { img: require("./../../../Assets/Images/Courses/img9.png"), a: "Vue JS" ,to : 'vueJS'},
    ],
    [
      {
        img: require("./../../../Assets/Images/Courses/img10.png"),
        a: "ASP.NET MVC",
        to : 'asp.netmvc'
      },
      {
        img: require("./../../../Assets/Images/Courses/img11.png"),
        a: "ASP.NET Core",
        to : 'asp.netcore'
      },
      { img: require("./../../../Assets/Images/Courses/img12.png"), a: "Core PHP" ,to : 'corePHP'},
      {
        img: require("./../../../Assets/Images/Courses/img13.png"),
        a: "Codeigniter (PHP Framework)",
        to : 'codeigniter'
      },
      {
        img: require("./../../../Assets/Images/Courses/img14.png"),
        a: "Laravel (PHP Framework)",
        to : 'laravel'
      },
      { img: require("./../../../Assets/Images/Courses/img15.png"), a: "Android" ,to : 'android'},
      { img: require("./../../../Assets/Images/Courses/img16.png"), a: "iOS" ,to : 'ios'},
      {
        img: require("./../../../Assets/Images/Courses/img17.png"),
        a: "Digital Marketing",
        to : 'marketing'
      },
      {
        img: require("./../../../Assets/Images/Courses/img18.png"),
        a: "C Programming",
        to : 'cprogramming'
      },
    ],
    [{ img: require("./../../../Assets/Images/Courses/img19.png"), a: "C++" ,to : 'c++'}],
  ];
  return (
    <>
      <AboutSec1 title="COURSES" />
      <DynamiceCoursesPage ary={ary}/>
    </>
  )
}

export default FirstPageCourses