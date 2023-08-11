import React from 'react'

function DynamicHomeSec6(props) {
  return (
    <>
        <div className='col'>
            <div className='DiaIMG'>
                <img src={props.HomeSec6.img} className="img-fluid HomeSec6img1" />
                <div className='HomeSec6Hover'>
                    <h5>{props.HomeSec6.h5}</h5>
                </div>
            </div>
        </div>
    </>
  )
}

export default DynamicHomeSec6