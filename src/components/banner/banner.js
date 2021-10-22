import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Imgone from '../../imagens/banner9.jpg';
import Imgtwo from '../../imagens/banner6.jpg';
import Imgthree from '../../imagens/banner7.jpg';
import { Link } from 'react-router-dom';
import './Banner.css';
export default class banner extends Component {
    render() {
        return (
            <section className="slider" id="home">
                <ul className="slides">
                    <li>
                        <img src={Imgone} alt="Vacation" />
                        <div className="caption center-align">
                            <h2>Organize sua instituição!</h2>
                            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                                Lorem ipsum dolor sit amet
                            </h5>
                            <Link to="#" className="btn btn-large blue"> Leia mais </Link>
                        </div>
                    </li>
                    <li>
                        <img src={Imgtwo} alt="Vacation" />
                        <div className="caption left-align">
                            <h2>Seja o diferencial</h2>
                            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                                Lorem ipsum dolor sit amet
                            </h5>
                            <Link to="#" className="btn btn-large blue">Leia mais</Link>
                        </div>
                    </li>
                    <li>
                        <img src={Imgthree} alt="Budgets" />
                        <div className="caption right-align">
                            <h2>Mantenha todos informados</h2>
                            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                                Lorem ipsum dolor sit amet
                            </h5>
                            <Link to="#" className="btn btn-large blue">Leia mais</Link>
                        </div>
                    </li>
                </ul>


            </section>
        )
    }
}
