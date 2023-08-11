import React from 'react'
import DynamicHomeSec6 from './DynamicHomeSec6'
import "./HomeSec6.css"

function HomeSec6() {
    let array = [
        {img : require('./../../Assets/Images/Carousal2/slide2.png') , h5 : 'React JS'},
        {img : require('./../../Assets/Images/Carousal2/slide3.png') , h5 : 'Node JS'},
        {img : require('./../../Assets/Images/Carousal2/slide5.png') , h5 : 'Flutter'},
        {img : require('./../../Assets/Images/Carousal2/slide6.png') , h5 : 'React Native'}
    ]
  return (
    <>
        <div className='container HomeSec6 py-5'>
            <h2>TOP COURSES</h2>
            <div className='text-end HomeSec6btn'>
                <button className='button2'>View All Courses</button>
            </div>
            <div className='row g-4'>
                <div className='col-md-6 col-12'>
                    <div className='HomeSec6Image HomeSec6Image1'>
                        <img src={require('./../../Assets/Images/Carousal2/slide1.jpg')} className="img-fluid HomeSec6img1" alt="" />
                        <div className='HomeSec6Hover'>
                            <h5>Angular</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12 HomeSec6FirstCol'>
                    <div className='row row-cols-1 row-cols-md-2 g-4'>
                        {
                            array.map((x,i) => {
                                return <DynamicHomeSec6 key={i} HomeSec6={x}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeSec6