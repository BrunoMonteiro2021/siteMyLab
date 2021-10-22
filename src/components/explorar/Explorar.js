import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
export default class Explorar extends Component {
    render() {
        return (
        <section id="explore" className="section section-icons grey lighten-4 center">
            <div className="container">
                <div className="row">
                    <h4 className="center">
                        <span className="blue-text darnken-1">Valores</span>Mylab
                    </h4>
                        <div className="col s6 m3">
                            <div className="card-panel">
                            <i className="material-icons medium blue-text">history</i>
                            <h4>Missão</h4>
                            <p>Gerenciar da melhor forma possível sua instituição</p>
                            </div>

                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                            <i className="material-icons medium blue-text">room</i>
                            <h4>Local</h4>
                            <p>Centralize todas suas ideias em um só lugar</p>
                            </div>

                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                            <i className="material-icons medium blue-text">lightbulb</i>
                            <h4>Ideias</h4>
                            <p>Deixe tudo conosco que nós resolvemos tudo</p>
                            </div>

                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                            <i className="material-icons medium blue-text">verified</i>
                            <h4>Confiança</h4>
                            <p>Não se preoculpe mas com agendamentos duplicados</p>
                            </div>

                        </div>
                  
                </div>

            </div>

        </section>
        )
    }
}
