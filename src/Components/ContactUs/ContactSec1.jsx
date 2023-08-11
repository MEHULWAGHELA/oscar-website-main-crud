import React from 'react'
import { FaEnvelope, FaHome, FaPhone } from 'react-icons/fa'
import "./ContactUs.css"

function ContactSec1() {
  return (
    <>
        <div className='container py-5'>
            <div className='row g-0 gy-3 gy-md-0 row-cols-md-3 row-cols-1'>
                <div className='col'>
                    <div className='card text-center rounded-0 h-100'>
                        <h2 className='contactSec1h2'><FaHome /></h2>
                        <h5 className='contactSec1h4'>VISIT US</h5>
                        <p className='contactSec1P'>404, Shubh Square, Opp Venus Hospital, Lal Darwaja, Surat - 395003.</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='card text-center rounded-0 h-100'>
                        <h2 className='contactSec1h2'><FaPhone /></h2>
                        <h5 className='contactSec1h4'>CALL US</h5>
                        <a href="tel:+919157929797" className='contactSec1P'>+91 91579 29797</a>
                    </div>
                </div>
                <div className='col'>
                    <div className='card text-center rounded-0 h-100'>
                        <h2 className='contactSec1h2'><FaEnvelope /></h2>
                        <h5 className='contactSec1h4'>MAIL US</h5>
                        <a href="mailto:info@oscarcareerpoint.com" className='contactSec1P'>info@oscarcareerpoint.com</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid contactSec1Div2 pt-4 pb-3'>
            <div className='container'>
                <h4 className='fw-bold'>WORKING HOURS:</h4>
                <p><strong>Monday-Saturday:</strong> 8 AM to 8 PM, <strong>Sunday:</strong> Closed</p>
            </div>
        </div>
    </>
  )
}

export default ContactSec1