/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import vestiaire from "../assets/images/vestiaire.jpg"
import aboutImg from '../assets/images/about.jpg'

const About = () => {
    const [title, setTitle] = useState('ABOUT US');

    return (
        <div>
            <Navbar />
            <div className="about-app">
                <img className='about-img w-100'  src={aboutImg} alt="about" />
                <h1 className='text-about'>about</h1> 
               <div className='py-5 container '>
                <div className="row">
                    <div className="col-6">
                        <img className=' img-vestiaire w-100 ' src={vestiaire} alt="vestiaire" />

                    </div>
                    <div className="col-6">
                        <h2>Our story</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci libero eaque culpa ratione illo amet ducimus exercitationem nesciunt doloribus voluptate praesentium, asperiores quam illum voluptatum facere velit reiciendis non et similique debitis perferendis? Ipsam assumenda rem non laborum dolorem quam placeat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero saepe eius laudantium quasi architecto libero porro, magnam dolorum quia alias.</p>
                    <div className='second-p'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt similique iure est totam ducimus cum. Aperiam  <br /> <br /> -dolor amet aut accusamus.</p>
                    </div>

                </div>

                </div> 
            </div>
            </div> 
        <Footer />
        </div>
        
    );
};

export default About;