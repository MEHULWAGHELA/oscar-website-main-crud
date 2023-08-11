import React from 'react'

function DynamicHomeSec4(props) {
  return (
    <>
        <div className='col'>
            <div className='HomeSec4Div'>
                <div className='py-4'><i className={props.HomeSec4.icon}></i></div>
                <p className='pb-3 fw-semibold'>{props.HomeSec4.p}</p>
            </div>
        </div>
    </>
  )
}

export default DynamicHomeSec4