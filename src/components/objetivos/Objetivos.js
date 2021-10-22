import React, { Component } from 'react';
import Valores1 from '../../imagens/inovacao4.jpg'
import Valores2 from '../../imagens/crescimento5.jpg'
import Valores3 from '../../imagens/resultado8.jpg'
import {HashLink as Link} from 'react-router-hash-link'

export default class Objetivos extends Component {
    render() {
        return (
           <section id="objetivos" className="section section-objetivo scrollspy">
               <div className="container">
                   <div className="row">
                       <h4 className="center">
                            <span className="blue-text darken-1">MyLab </span>Objetivos
                            </h4>
                        <div className="col s12 m4">
                            <div className="card">
                            <div className="card-image">
                                <img src={Valores1} alt="Inovacao"/>

                                    <span className="card-title">Inovação</span>

                                <Link className="btn-floating activator halfway-fab waves-effect waves-light blue">
                                    <i className="material-icons">add</i>
                                </Link>
                             
                            
                            </div>
                            <div className="card-content">
                                    <p>Exploramos sempre novas ideias com o objetivo de oferecer para nossos clientes o melhor que a tecnologia pode nos proporcionar.</p>
                                </div>
                                <div className="card-reveal">
                                    <span className=" card-title grey-text text-darken-4">Inovacao<i className="material-icons right">close</i></span>
                                    <p>Exploramos sempre novas ideias com o objetivo de oferecer para nossos clientes o melhor que a tecnologia pode nos proporcionar.</p>
                                </div>

                            </div>
               
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                            <div className="card-image">
                                <img src={Valores2} alt="Inovacao"/>

                                    <span className="card-title">Crescimento</span>

                                <Link className="btn-floating activator halfway-fab waves-effect waves-light blue">
                                    <i className="material-icons">add</i>
                                </Link>
                             
                            
                            </div>
                            <div className="card-content">
                                    <p>Exploramos sempre novas ideias com o objetivo de oferecer para nossos clientes o melhor que a tecnologia pode nos proporcionar.</p>
                                </div>
                                <div className="card-reveal">
                                    <span className=" card-title grey-text text-darken-4">Inovacao<i className="material-icons right">close</i></span>
                                    <p>Exploramos sempre novas ideias com o objetivo de oferecer para nossos clientes o melhor que a tecnologia pode nos proporcionar.</p>
                                </div>

                            </div>
               
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                            <div className="card-image">
                                <img src={Valores3} alt="Inovacao"/>

                                    <span className="card-title">Resultado</span>

                                <Link className="btn-floating activator halfway-fab waves-effect waves-light blue">
                                    <i className="material-icons">add</i>
                                </Link>
                             
                            
                            </div>
                            <div className="card-content">
                                    <p>Exploramos sempre novas ideias com o objetivo de oferecer para nossos clientes o melhor que a tecnologia pode nos proporcionar.</p>
                                </div>
                                <div className="card-reveal">
                                    <span className=" card-title grey-text text-darken-4">Inovacao<i className="material-icons right">close</i></span>
                                    <p>Exploramos sempre novas ideias com o objetivo de oferecer para nossos clientes o melhor que a tecnologia pode nos proporcionar.</p>
                                </div>

                            </div>
               
                        </div>
                   </div>

               </div>


           </section>
        )
    }
}
