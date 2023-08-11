import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

function ContactSec2Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = (data) => {
      axios.post("http://localhost:1000/api/form/adddata" , data).then((res)=>{
        
    })
    };

    const registerOptions = {
      name: { required: "THE FIELD IS REQUIRED." },
      email: { required: "THE FIELD IS REQUIRED." },
      number: { required: "THE FIELD IS REQUIRED." },
      subject: { required: "THE FIELD IS REQUIRED." },
    };
  return (
    <>
        <div className='container form'>
          <form onSubmit={handleSubmit(handleRegistration)}>
            <h5>Please send us your query below:</h5>
            <div>
              <label>YOUR NAME*</label>
              <input name="name" type="text" placeholder='Enter Your Name' {...register('name', registerOptions.name) } className="w-100"/>
              <small className="text-danger">{errors?.name && errors.name.message}</small>
            </div>
            <div className='row row-cols-md-2 row-cols-1'>
              <div className='col'>
                <label>YOUR EMAIL*</label>
                <input type="email" name="email" placeholder='Enter Your Email' className="w-100" {...register('email', registerOptions.email)} />
                <small className="text-danger">{errors?.email && errors.email.message}</small>
              </div>
              <div className='col'>
                <label>YOUR MOBILE NUMBER*</label>
                <input type="number" name="number" placeholder='Enter Your Mobile Number' className="w-100" {...register('subject', registerOptions.subject)}/>
                <small className="text-danger">{errors?.subject && errors.subject.message}</small>
              </div>
            </div>
            <div>
              <label>YOUR SUBJECT*</label>
              <input type="text" name="subject" placeholder='Enter Subject You Are Intrested In' className="w-100" {...register('number', registerOptions.number)}/>
              <small className="text-danger">{errors?.number && errors.number.message}</small>
            </div>
            <div>
              <label>YOUR MESSAGE</label>
              <textarea name="textarea" rows='3' placeholder='Enter Your Message' className="w-100"/>
            </div>
            <div className="text-center">
            <button className='contactbtn mt-3'>SUBMIT</button>
            </div>
          </form>
        </div>
        
        <div className='container-fluid g-0 pt-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.565071965082!2d72.8339171!3d21.209429799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fe4b2fa62dd%3A0x24c1b705648bd6d3!2sIT%20Training%20Institute%20%7C%20100%25%20Job%20Placement%20%7C%20Web%20Design%20Course%20%7C%20Flutter%20Development%20%7C%20Full%20Stack%20%7C%20Oscar%20Career%20Point!5e0!3m2!1sen!2sin!4v1680947563088!5m2!1sen!2sin" style={{width : '100%' , height : '400px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </div>
    </>
  )
}

export default ContactSec2Form