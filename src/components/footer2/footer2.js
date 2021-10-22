import React, { Component } from 'react'
import '../../../node_modules/jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';
import {Link} from 'react-router-dom';
import './Footer.css'
export default class footer2 extends Component {
    render() {
        return (
           <section className="Section footer blue darkent-2 white-text center scrollspy">
               <div className="row">
                   <div className="col s12">
                       <h4>Redes Sociais</h4>
                       <p>Para mais informações acesse:</p>

                        <Link to="htps://facebook.com" target="blank" className="white-text"> 
                        <i className="fab fa-facebook fa-3x"></i>
                        </Link>
                        <Link to="htps://twitter.com" target="blank" className="white-text"> 
                        <i className="fab fa-twitter fa-3x"></i>
                        </Link>
                        <Link to="htps://linkedin.com" target="blank" className="white-text"> 
                        <i className="fab fa-linkedin fa-3x"></i>
                        </Link>
                        <Link to="htps://pinterest.com" target="blank" className="white-text"> 
                        <i className="fab fa-pinterest fa-3x"></i>
                        </Link>

                    </div>
               </div>

           </section>
        )
    }
}
