import React from 'react'

function DynamicFollowUs(props) {
  return (
    <>
        {/* <div> */}
            <a href={props.FollowUs.link} target="_blank" className='mx-2'>{props.FollowUs.icon}</a>
        {/* </div> */}
    </>
  )
}

export default DynamicFollowUs