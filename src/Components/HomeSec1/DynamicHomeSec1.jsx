import React from 'react'

function DynamicHomeSec1(props) {
  return (
    <>
        <div className='HomeSec1Img' style={{margin : '0'}}>
          <img src={`http://localhost:1000/uploads/${props.HomeSec1.image}`} alt=""  className='img-fluid mx-auto'/>
        </div>
    </>
  )
}

export default DynamicHomeSec1