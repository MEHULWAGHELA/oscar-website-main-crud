import React from 'react'

function DynamicAboutSec3(props) {
  return (
    <>
        <div className='col'>
            <div className='row text-center text-md-start AboutSec3col px-lg-3 px-0'>
                <div className='col-lg-3 col-md-3 col-12 icons'>
                    <i className={props.AboutSec3.icon}></i>
                </div>
                <div className='col-lg-9 col-md-9 col-12'>
                    <h2 className='pe-lg-4 pe-md-0'>{props.AboutSec3.h3}</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default DynamicAboutSec3