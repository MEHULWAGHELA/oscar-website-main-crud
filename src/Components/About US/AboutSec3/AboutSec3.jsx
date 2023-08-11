import React, { useEffect, useState } from 'react'
import { FaHandshake, FaNewspaper, FaUsers } from 'react-icons/fa'
import "./AboutSec3.css"
import DynamicAboutSec3 from './DynamicAboutSec3'
import axios from 'axios';

function AboutSec3() {
    // let array = [
    //     {icon : <FaHandshake /> , h3 : '7 Years of Experience'},
    //     {icon : <FaNewspaper /> , h3 : 'Trendy IT Courses'},
    //     {icon : <FaUsers /> , h3 : 'Experienced Faculties'}
    // ]
    let [array, setarray] = useState([]);
  
    useEffect(() => {
      getApi()
    }, [])
  
    const getApi = () => {
        axios.get("http://localhost:1000/api/about/getdata").then((res)=>{
            setarray([...res.data.data])
        })
    }
  return (
    <>
        <div className='container py-5'>
            <div className='row row-cols-1 row-cols-md-3 g-4 py-5'>
                {
                    array.map(x => {
                        return <DynamicAboutSec3 AboutSec3={x}/>
                    })
                }
            </div>
        </div>
        <div className='container-fluid AboutSec3div2 py-5'>
            <div className='container py-4'>
                <h2 className='text-center AboutQute'>"CHOOSE WHAT YOU ARE PASSIONATE ABOUT & WHAT YOU LOVE TO DO.
                    THE SUCCESS WILL BE YOURS!"</h2>
            </div>
        </div>
    </>
  )
}

export default AboutSec3