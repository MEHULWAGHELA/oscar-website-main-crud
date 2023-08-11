import React from 'react'
import DynamicFollowUs from './DynamicFollowUs'
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import "./FollowUs.css"

function FollowUs() {
    const array = [
        // {icon : <FaGoogle/> , link : 'https://g.page/oscarcareerpoint.com/'},
        {icon : <FaGoogle/> , link : 'https://www.google.co.in/maps/place/IT+Training+Institute+%7C+100%25+Job+Placement+%7C+Web+Design+Course+%7C+Flutter+Development+%7C+Full+Stack+%7C+Oscar+Career+Point/@21.2094348,72.8317284,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04fe4b2fa62dd:0x24c1b705648bd6d3!8m2!3d21.2094298!4d72.8339171!16s%2Fg%2F11r8_xcwdy?hl=en'},
        {icon : <FaFacebookF/> , link : 'https://www.facebook.com/oscarcareerpoint/'},
        {icon : <FaInstagram/> , link : 'https://www.instagram.com/oscarcareerpoint/'},
        {icon : <FaLinkedinIn/> , link : 'https://www.linkedin.com/in/oscarcareerpoint/'},
        {icon : <FaYoutube/> , link : 'https://www.youtube.com/channel/UCRfZuo5ya8GoGS20iFH45PQ'},
    ]
  return (
    <>
        <div className='container-fluid FollowUs py-5'>
            <div className='container'>
                <h4 className='fw-bold pb-3'>FOLLOW US ON:</h4>
                <div>
                    {
                        array.map((x,i)=>{
                            return <DynamicFollowUs FollowUs={x} key={i}/>
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default FollowUs