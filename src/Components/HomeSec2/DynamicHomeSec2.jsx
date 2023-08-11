import React from 'react'

function DynamicHomeSec2(props) {
  return (
    <>
      <div className='col h-100'>
        <div className='card pt-3 px-3 rounded-0' style={{backgroundColor : props.HomeSec2.color}}>
          {/* <h2>{props.HomeSec2.icon}</h2> */}
          <i className={props.HomeSec2.icon} ></i>
          <div className='card-body'>
            <h3>{props.HomeSec2.h2}</h3>
            <p>{props.HomeSec2.p}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DynamicHomeSec2