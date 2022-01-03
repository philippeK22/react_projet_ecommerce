/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import aboutImg from '../assets/images/about.jpg'

const Contact = () => {
    const [title, setTitle] = useState('CONTACT');

    return (
        <div>
            <Navbar />
            <div>
                <img className='about-img w-100'  src={aboutImg} alt="about" />
               <h1 className='text-contact'>contact</h1> 
            </div>
<section class="container">

    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    {/* <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p> */}

    <div className='container'>
                <div className="row">
                    <div className="col-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20140.268281451492!2d4.361678039550785!3d50.8768349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c310f35db47d%3A0x9b811190cbb00968!2sNight%20Shop!5e0!3m2!1sfr!2sbe!4v1639401340229!5m2!1sfr!2sbe" width="500" height="450" allowfullscreen="" loading="lazy"></iframe>

                    </div>
                    <div className="col-6">
                        <h3>Send us your message</h3>
                <form className='formulaire d-flex flex-column'>
                    <input className='m-2' type="text"placeholder='Full Name' />
                    <input className='m-2' type="text" placeholder='Phone Number' />
                    <input className='m-2' type="text" placeholder='Email Adress' />
                    <textarea className='m-2' placeholder='Message....' name="" id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </form>

                    </div>
                </div>
                </div>
</section>
            <Footer/>
        </div>
    );
};

export default Contact;