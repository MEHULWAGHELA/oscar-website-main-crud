import React from 'react'

function DynamicHomeSec7(props) {
  return (
    <>
        <div class="col">
            <div class="card h-100 pt-3" style={{backgroundColor : props.HomeSec7.bg}}>
                <i className={props.HomeSec7.icon}></i>
                <div class="card-body">
                  <h6 class="card-title">{props.HomeSec7.h5}</h6>
                </div>
            </div>
        </div>
    </>
  )
}

export default DynamicHomeSec7