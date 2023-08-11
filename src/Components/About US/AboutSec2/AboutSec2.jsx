import React from 'react'
import "./AboutSec2.css"

function AboutSec2() {
  return (
    <>
        <div className='container AboutSec2 py-5'>
            <h2 className='text-center'>Welcome To Oscar Career Point</h2>
            <p className='pt-3 text-center text-md-start'><strong className='fw-semibold'>Oscar Career Point</strong> is a leading training and career development institute in Surat for providing <span className='text-decoration-underline fw-semibold'>Corporate IT Training</span> in all types of company-oriented professional IT courses with a <span className='fw-semibold text-decoration-underline'>100% job placement guarantee.</span></p>
            <p className='text-center text-md-start'>With experience spanning more than 7 years in IT Development, <strong className='fw-semibold'>Oscar Career Point</strong> has focused on training freshers/students of IT, Computer, BCA, MCA, B.Sc IT, M.Sc IT, Degree & Diploma, etc. We helped students to chart their career journey with a good beginning in the industry.</p>
        </div>
        <div className='container-fluid AboutSec2div2 py-4'>
          <div className='container'>
            <div className='row row-cols-1 row-cols-md-2 g-4 fs-5 fw-light text-center text-md-start'>
              <div className='col'>
                <div>
                  <h3 className='fs-md-5 pb-3 fs-1'>Our Vision</h3>
                  <p>To be the best and most relevant science and technology training company for career commencement and professional development so as to benefit individuals to be successful and achieve their life goals. Through our best services to our students, we look forward to add value and augment their success and in the process, become one of the prime technological institution in the country.</p>
                </div>
              </div>
              <div className='col'>
                <div>
                  <h3 className='fs-md-5 pb-3 fs-1'>Our Mission</h3>
                  <p>We will achieve our vision by:</p>
                  <ul className='ps-4'>
                    <li>Providing excellent training and service delivery to our beneficiaries/students which is up to date with the industry requirements.</li>
                    <li>Nurture, train and promote talent within the organisation, amongst our employees who remain motivated at all times.</li>
                    <li>Engaging with all our IT professionals in a fair manner.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container text-center AboutSec2div3 py-4'>
          <h3 className='pb-4 fs-md-5 pb-3 fs-2'>Our Process</h3>
          <div className='w-100 border border-2 border-dark'>
            <img src={require('./../../../Assets/Images/banner-1.jpg')} className="img-fluid" alt="" />
          </div>
        </div>
    </>
  )
}

export default AboutSec2