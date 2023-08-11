import React, { useEffect, useState } from 'react';
import "./HomeSec2.css";
import { FaBook, FaChalkboardTeacher, FaCheckDouble } from 'react-icons/fa';
import DynamicHomeSec2 from './DynamicHomeSec2';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeSec2() {
  // const array = [
  //   {icon : <FaBook /> , h2 : 'Corporate IT Courses' , p : 'Courses are designed as per the latest skills required in company.' , color : '#008DD2'},
  //   {icon : <FaChalkboardTeacher /> , h2 : 'Experienced Faculty' , p : "IT experts will provide training to meet company's need." , color : '#404040'},
  //   {icon : <FaCheckDouble /> , h2 : '100% Job Placement' , p : 'Attend job interviews conducted by our team and get placed.' , color : '#008DD2'}
  // ]
  const [array, setarray] = useState([]);
  let blankobj ={icon:'',color:'',h2:'',p:''};
  const [obj, setobj] = useState(blankobj);

  useEffect(() => {
    getApi()
  }, [])

  const getApi = () => {
      axios.get("http://localhost:1000/api/information/getdata").then((res)=>{
          setarray([...res.data.data])
      })
  }
  
  return (
    <>
        <div className='container homsec2'>
          <div className='row row-cols-md-3 row-cols-1 g-4 text-center py-5 text-white'>  
            {
              array.map((x,i) => {
                return <DynamicHomeSec2 HomeSec2={x} key={i}/>
              })
            }
          </div>
          <div className='homsec2div1 pb-5'>
            <div className='row row-cols-1 row-cols-md-2 g-3'>
              <div className='col'>
                <div>
                  <img src={require('./../../Assets/Images/final-img.jpg')} className='img-fluid' alt="" />
                </div>
              </div>
              <div className='col d-flex align-items-center'>
                <div>
                  <h1>WHO WE ARE?</h1>
                  <p><strong>Oscar Career Point</strong> is a best IT training institute in Surat for providing Corporate IT training in all types of company-oriented professional IT courses with a 100% job placement guarantee. With experience spanning more than 7 years in IT Development, Oscar Career Point has focused on training freshers/students of IT, Computer, BCA, MCA, B.Sc IT, M.Sc IT, Degree & Diploma, etc. We helped students to chart their career journey with a good beginning in the industry.</p>
                  <Link className='button' to='/about'>KNOW MORE</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default HomeSec2