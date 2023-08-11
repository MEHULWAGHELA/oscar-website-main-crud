import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <>
        <div className='container-fluid footer'>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 gx-5 pb-5 footerRow'>
                    <div className='col'>
                        <div className='text-center text-md-start'>
                            <img src={require('./../../Assets/Images/logo-white-footer.png')} width='110' height='105' />
                            <p className='pt-4'><strong>Oscar Career Point</strong> is a best IT training institute in Surat for providing Corporate IT training in all types of company-oriented professional IT courses with a 100% job placement guarantee.</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <h3>LINKS</h3>
                            <div className='ms-0'>
                                <ul>
                                    <li><a href=""><Link to='/home'>Home</Link></a></li>
                                    <li><a href=""><Link to='/about'>About Us</Link></a></li>
                                    <li><a href=""><Link to='/courses'>Courses</Link></a></li>
                                    <li><a href=""><Link to='/placement'>Placement</Link></a></li>
                                    <li><a href=""><Link to='/gallery'>Gallery</Link></a></li>
                                    <li><a href=""><Link to='/contactus'>Contact Us</Link></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <h3>CONTACT US</h3>
                            <div>
                                <div className='d-flex pb-3'>
                                    <div className='footericondiv'>
                                        <FaMapMarkerAlt/>
                                    </div>
                                    <div className='ps-3'>
                                        404, Shubh Square, <br />
                                        Opp Venus Hospital, <br />
                                        Lal Darwaja, Surat.
                                    </div>
                                </div>
                                <div className='d-flex pb-3 align-items-center'>
                                    <div className='footericondiv'>
                                        <FaPhone/>
                                    </div>
                                    <div className='ps-3'>
                                        <a href="tel:+919157929797">+91 91579 29797</a>
                                    </div>
                                </div>
                                <div className='d-flex pb-3'>
                                    <div className='footericondiv'>
                                        <FaEnvelope/>
                                    </div>
                                    <div className='ps-3'>
                                        <a href="mailto:info@oscarcareerpoint.com">info@oscarcareerpoint.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <h3>OPEN HOURS</h3>
                            <div>
                                <div className='pb-4'>Our working hours are:</div>
                                <div className='d-flex justify-content-between footerborderdiv1'>
                                    <p>Monday-Saturday:</p>
                                    <p><strong>8AM to 8PM</strong></p>
                                </div>
                                <div className='d-flex justify-content-between pt-3'>
                                    <p>Sunday:</p>
                                    <p><strong>Closed</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottomFooter d-md-flex justify-content-md-between text-center text-md-start pt-4 pb-2'>
                    <div className='pb-2'>
                        Copyright © 2021 - 2023 <a href="https://oscarcareerpoint.com/">Oscar Career Point</a>
                    </div>
                    <div>
                        <ul className='d-flex list-unstyled flex-wrap justify-content-center'>
                            <li><a href="" className='px-2'><Link to='/home'>Home</Link></a></li>
                            <li><a href="" className='px-2'><Link to='/about'>About Us</Link></a></li>
                            <li><a href="" className='px-2'><Link to='/courses'>Courses</Link></a></li>
                            <li><a href="" className='px-2'><Link to='/placement'>Placement</Link></a></li>
                            <li><a href="" className='px-2'><Link to='/gallery'>Gallery</Link></a></li>
                            <li><a href="" className='px-2'><Link to='/contactus'>Contact Us</Link></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer