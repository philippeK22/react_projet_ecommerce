/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import SetTableau from '../component/SetTableau';
import aboutImg from '../assets/images/about.jpg'

function Panier(props) {
    const [quantite, setQuantite] = useState(1);
    const [prixTotal, setprixTotal] = useState(props.prix);
    const supprime = id => {

        let quantite = [...props.articles];
        setprixTotal(props.prix);
        let prixTot = prixTotal;
        const test = quantite.map(el => {
            if (el.id == id.target.value && el.quantite >= 1) {
                prixTot -= el.prix;
                setprixTotal(prixTot);
            }
        });

        props.click(id);


    };

    const add = id => {
        // console.log(id.target.value)
        let quantite = [...props.articles];
        setprixTotal(props.prix);

        let prixTot = prixTotal;
        const test = quantite.map(el => {
            if (el.id == id.target.value && el.quantite >= 1) {

                el.quantite += 1;
                el.prix = el.prixNew * el.quantite;
                console.log(el.quantite);
                console.log(el.prix * el.quantite);
                prixTot += el.prixNew;

            }
        });
        setQuantite(test);
        setprixTotal(prixTot);
    };
    const sous = id => {
        let quantite = [...props.articles];


        let prixTot = prixTotal;

        const test = quantite.map(el => {
            if (el.id == id.target.value && el.quantite >= 2) {
                let prixTotal = props.prix;
                el.quantite -= 1;
                el.prix = el.prixNew * el.quantite;
                prixTot -= el.prixNew;
                // console.log(el.quantite);
                // console.log(el.prix * el.quantite);

            }
        });
        setQuantite(test);
        setprixTotal(prixTot);

    };

    return (
        <div>
            <Navbar />
            <div>
                <img className='about-img w-100' src={aboutImg} alt="about" />
                <h1 className='text-panier'>Panier</h1>
            </div>
            <ul className="panierUl d-flex flex-column">
                {props.articles.map(el => {
                    return (
                        <li className="listePanier">
                            <span> <img className="imgPanier" src={el.liens} alt="panier" /></span>
                            <span>Nom articles: {el.nom} </span>
                            <span> Prix: {el.prix} euros</span>
                            <span>
                                Quantité :{el.quantite}<span></span>
                                <span>
                                    <button value={el.id} onClick={add} className="operation">+ </button>
                                    <button value={el.id} onClick={sous} className="operation"> -</button>
                                </span>


                            </span>
                            <span> <button value={el.id} onClick={supprime} className='btn btn-danger p-3'>Rendre</button></span>

                        </li>
                    );
                })}

            </ul>
            <h1 className="text-center">Prix a payer: <span style={{ color: props.prix > 0 ? "green" : "red" }}> {prixTotal} euros</span> </h1>
            <Footer />
        </div>
    );
}

export default Panier;