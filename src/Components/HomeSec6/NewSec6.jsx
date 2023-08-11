import React from 'react'
import NewDynemiceSec6 from './NewDynemiceSec6'
import "./HomeSec6.css"
import { Link } from 'react-router-dom'

function NewSec6() {
    let array = [
        {to : '/courses/reactJS' , img : require('./../../Assets/Images/Carousal2/slide2.png') , h5 : 'React JS'},
        {to : '/courses/nodeJS' , img : require('./../../Assets/Images/Carousal2/slide3.png') , h5 : 'Node JS'},
        {to : '/courses/flutter' , img : require('./../../Assets/Images/Carousal2/slide5.png') , h5 : 'Flutter'},
        {to : '/courses/reactNative' , img : require('./../../Assets/Images/Carousal2/slide6.png') , h5 : 'React Native'}
    ]
  return (
    <>
        <div className='container HomeSec6 py-5'>
            <h2>TOP COURSES</h2>
            <div className='text-end HomeSec6btn'>
                <Link to='/courses' className='button2'>View All Courses</Link>
            </div>
            <div className='row g-4'>
                <div className='col-md-6 col-12'>
                    <div className='HomeSec6Image HomeSec6Image1'>
                        {/* <img src={require('./../../Assets/Images/Carousal2/slide1.jpg')} className="img-fluid HomeSec6img1" alt="" /> */}
                        <Link to='/courses/angular'><div style={{backgroundImage : `url(${require('./../../Assets/Images/Carousal2/slide1.jpg')})`}} className='HomeSec6Image'></div></Link>
                        <div className='HomeSec6Hover1'>
                            <h5>Angular</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12 HomeSec6FirstCol'>
                    <div className='row row-cols-1 row-cols-md-2 g-4'>
                        {
                            array.map((x,i) => {
                                return <NewDynemiceSec6 key={i} HomeSec6={x}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewSec6