/* eslint-disable no-unused-vars */
import React from 'react';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Panier from '../pages/Panier';
import { useState } from 'react';

const Services = (props) => {
// console.log(props)

    
    
    return (
        <div>    
                 <Navbar />        
                <Articles
                articles={props.articles} 
                click = {props.click}
                submit = {props.submit}
                inputValue = {props.inputValue}
                like ={props.like}
                tableauSolde= {props.tableauSolde}
                solde = {props.solde}
                zoom={props.zoom}
                afrique={props.afrique}
                ameriqueSud={props.ameriqueSud}
                ameriqueNord={props.ameriqueNord}
                europe={props.europe}
                
                

                 />

    
            <Footer />

        </div>
    );
};

export default Services;