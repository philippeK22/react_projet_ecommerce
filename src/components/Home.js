import React from 'react';
import Cards from './Cards';
import Footer from './Footer';
import Navbar from './Navbar';
import predator from "../assets/images/predator.jpg"



const Home = (props) => {
    // console.log(props)
    return (
        <div > 

            <Navbar 
            test ="salut"
            likelen={props.likelen}
            panierlen={props.panierlen}
             />
             
            <Cards 
             mini = {props.tableau}
            filter = {props.filter}
            func = {props.func}
            supprime ={props.click}
            like = {props.like}
            zoom = {props.zoom}
            old = {props.old}
            nouveau ={props.nouveau}
            sale={props.sale}
            bestSeller = {props.bestSeller}
            
            
            />
            <section className="section"> 
            <img className='w-100 predator-img w-100' src={predator} alt="predator" />
                <div className='collection-bg'>
                    <h2 className='text-danger'>new collection shoes predator</h2>
                    <p className='text-white'>edition collector</p>
                    <span className='text-danger'>2010</span>
                </div>


            </section>
            <Footer/>

        
        
        </div>
    );
};

export default Home;
            



