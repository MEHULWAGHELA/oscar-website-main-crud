import React from 'react'
import { Link } from 'react-router-dom'

function NewDynemiceSec6(props) {
  return (
    <>
        <div className='col'>
            <div className='HomeSec6Reletive'>
                {/* <img src={props.HomeSec6.img} className="img-fluid HomeSec6img1" /> */}
                <Link to={props.HomeSec6.to}><div style={{backgroundImage : `url(${props.HomeSec6.img})`}} className='DiaIMG'></div></Link>
                    <div className='HomeSec6Hover'>
                        <h5>{props.HomeSec6.h5}</h5>
                    </div>
            </div>
        </div>
    </>
  )
}

export default NewDynemiceSec6