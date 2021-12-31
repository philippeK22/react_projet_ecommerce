/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect, useRef } from 'react';
// import leather from "../assets/images/bg_leather.jpg"
import spurs from "../assets/images/spurs.jpg"
import belgium from "../assets/images/belgium.jpg"
import cr7 from "../assets/images/cr7.jpeg"
import foot from "../assets/images/foot.jpg"
import ballon from "../assets/images/ballon.png"
import lens from "../assets/images/lens.jpg"
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
// import Footer from "./Footer"




const Cards = (props) => {
    console.log(props)
    let index = 0
    const addCard = id => {
        props.func(id)
    }
    const changeLike = e => {
        props.like(e)
    }
   
    const imgEnvoie = id => {
        props.zoom(id)
    }
    const bestSeller =e =>{
        props.bestSeller(e)
    }
    const nouveau = e =>{
        props.nouveau(e)
    }
    const old = e =>{
        props.old(e)
    }
    const sale = e=>{
        props.sale(e)
    }


    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={foot} class="d-block w-100" alt="foot" />
                    </div>
                    <div className='carrousel-titre'>
                        <h1>collections sportifs</h1>
                        <p>new collection article</p>
                        <button className='btn btn-danger rounded-circle'>Shop Now</button>
                    </div>
                    <div class="carousel-item">
                        <img src={ballon} class="d-block w-100" alt="ballon" />
                    </div>
                    <div className='carrousel-titre'>
                        <h1>collections sportifs</h1>
                        <p>new collection article</p>
                        <button className='btn btn-danger rounded-circle'>Shop Now</button>
                    </div>
                    <div class="carousel-item">
                        <img src={lens} class="d-block w-100" alt="" />
                    </div>
                </div>
                <button class="carousel-control-prev btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon btn" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon btn" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
           

            <div className=" row main">


                <div className=" parent col-xs-12 col-lg-3" style={{ backgroundImage: `url(${spurs})` }}>                         <p>Comming Soon </p>
                </div>
                <div className="parent col-xs-12 col-lg-3" style={{ backgroundImage: `url(${belgium})`, backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                    <p>Comming Soon </p>
                </div>
                <div className="parent col-xs-12 col-lg-3" style={{ backgroundImage: `url(${cr7})` }}>
                    <p>Coming Soon </p>
                </div>
            </div>
            <div className='position-relative'>

            </div>
            <h1 className='text-center mb-3'> Our Product</h1>
            <nav class="nav nav-pills nav-justified justify-content-center ">
                <a onClick={e=>{bestSeller(e)}} className="nav-link " aria-current="page" href="#">BestSeller</a>
                <a onClick={e=>{nouveau(e)}}    className="nav-link" href="#">New</a>
                <a onClick={e=>{sale(e)}}   className="nav-link" href="#">Sale</a>
                <a onClick={e=>{old(e)}}    className="nav-link" href="#">Old</a>
            </nav>
            <section className='classTableau d-flex pt-5 container'>

                <div className='row d-flex'>
                    {props.mini.map(el => {
                        if (index < 4) {
                            index++
                            return (
                                <div className="col-xs-12 col-lg-3 map position-relative">
                                    <div className='position-relative card'>                
                                            <img  src={el.liens}  alt="" /> 
                                        <NavLink className="navlink" exact to="/zoom"  >
                                        <button className ="btn_info btn btn-danger mx-5 mt-1" onClick={imgEnvoie} value={el.id}>Avoir plus d'infos</button>
                                         </NavLink>
                                        <span className={el.toggle ? "new" : el.toggle == null ? "" : "sale"}>
                                            {el.statut}
                                        </span>
                                        <button onClick={addCard} value={el.id} className='achatbtn btn btn-primary mt-1'>Add to Cart</button>
                                        <button onClick={changeLike} value={el.id} className='btn btn-danger mt-1' id="like"> ♥ </button>

                                    </div>
                                    <h3>{el.nom}</h3>
                                    <span style={{ color: el.ancienPrix > 0 ? "red" : "black" }}> <span className='solde py-3'>{el.ancienPrix}</span> ${el.prix}</span>
                                </div>)
                        }
                    })}
                </div>

            </section>



        </>



    );
};

export default Cards;