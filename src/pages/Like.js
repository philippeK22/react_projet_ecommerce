import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import aboutImg from '../assets/images/about.jpg'

const Like = (props) => {
    // console.log(props.click)
    const supprime = id => { 
        props.clickLike(id)
           
    }
    return (
        <div>
            <Navbar />
            <div>
                <img className='about-img w-100'  src={aboutImg} alt="about" />
               <h1 className='text-like'>Coup de coeur</h1> 
            </div>

           
            <ul className="panierUl">
                {props.articles.map(el=>{
                    return(
                        <li className = "listePanier" >
                            <span> <img className ="imgPanier" src={el.liens} alt="panier" /></span>
                           <span>Nom articles :  {el.nom} </span>
                           <span> Prix : {el.prix}</span>
                           <span> <button value = {el.id} onClick = {supprime} className='btn btn-danger p-3'>Rendre</button></span>

                        </li> 
                    )
                })}
                    
            </ul>
            <div className='terre'>
            <h1> Achetez et vous aussi entrez dans l'action pour la sauvegarde de vos meilleurs articles maillots !</h1>

            </div>
            
            <Footer/>
        </div>
    );
};

export default Like;
