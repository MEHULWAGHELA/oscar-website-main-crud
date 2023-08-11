import React from 'react'
import DynamicHomeSec5 from './DynamicHomeSec5'
import { FaBookReader, FaPeopleArrows, FaUserGraduate } from 'react-icons/fa';
import "./HomeSec5.css"
import { Link } from 'react-router-dom';

function HomeSec5() {
    const array = [
        {icon : <FaBookReader/> , num : '15' , h6 : 'JOB ORIENTED COURSES'},
        {icon : <FaUserGraduate /> , num : '300' , h6 : 'STUDENTS TRAINED'},
        {icon : <FaPeopleArrows /> , num : '500' , h6 : 'PLACEMENT PARTNERS'}
    ]
  return (
    <>
        <div className='container-fluid text-center HomeSec5'>
            <div className='container pb-3'>
                <h2 className='HomeSec5h2 pt-5'>OUR ACHIEVEMENTS</h2>
                <p className='pb-4'>What we've achieved so far…</p>
                <div className='row row-cols-lg-3 row-cols-1 g-5 mb-5'>
                    {
                        array.map((x,i) => {
                            return <DynamicHomeSec5 HomeSec5={x} key={i}/>
                        })
                    }
                </div>
                <div className='mb-5'>
                    <Link to='/placement' className='button1'>OUR PLACEMENTS</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeSec5