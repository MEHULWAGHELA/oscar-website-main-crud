import React from 'react'
import { Link } from 'react-router-dom'

function DynamicHomeSec3(props) {
  return (
    <>
        <div className='col'>
            <div className='HomeSec3Img card rounded-0 px-0 mx-0 border-0'>
              <Link to={props.HomeSec3.to} className='HomeSec3overflow'>
                <img src={`http://localhost:1000/uploads/${props.HomeSec3.img}`} alt=""  className=''/>
              </Link>
              <div className='card-footer'>
                <Link to={props.HomeSec3.to}>{props.HomeSec3.a}</Link>
              </div>
            </div>
          </div>
    </>
  )
}

export default DynamicHomeSec3