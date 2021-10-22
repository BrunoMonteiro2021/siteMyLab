import React, { Component } from 'react'

export default class Contato extends Component {
    render() {
        return (
          <section id="contact" className=" section section-contact scrollspy">
              <div className="container">
                  <div className="row">
                      <div className="col s12 m6">
                          <div className="card-panel blue white-text center">
                              <i className="material-icons">email</i>
                              <h5>Endereço DevCompilers</h5>
                              <p>Paulista-Centro, Rua Estrada de tamandaré </p>
                          </div>
                            <ul className="collection with-header">
                                <li className="collection-header">
                                    <h4>Main Office</h4>
                                </li>
                                <li className="collection-item"><i className="fas fa-map-marker-alt"> 3425, Pernambuco Brasil, UF-PE</i></li>
                                <li className="collection-item"><i className="fas fa-phone"> 81-997561079</i></li>
                                <li className="collection-item"><i className="fas fa-envelope-square"> DevCompilers.com.br</i></li>

                            </ul>
                      </div>
                      <div className="col s12 m6">
                          <div className="card-panel grey lighten-3">
                              <h5>Por favor para mais informações Preencha o formulário</h5>
                              <form>
                                  <div className="input-field">
                                      <input type="text" id="name" className="validate"/>
                                      <label for="name" className="blue-text">Name</label>

                                  </div>
                            

                                  <div className="input-field">
                                      <input type="text" id="name" className="validate"/>
                                      <label for="email" className="blue-text">Email</label>

                                  </div>

                                  <div className="input-field">
                                      <input type="text" id="name" className="validate"/>
                                      <label for="phone" className="blue-text">Telefone</label>

                                  </div>

                                  <div className="input-field">
                                      <textarea type="text" id="message" className="materialize-textarea" data-length="120"></textarea>
                                      <label for="message" className="blue-text">Mensagem</label>

                                  </div>
                                  
                                  <input type="submit" value="Enviar" className="btn blue"></input>


                              </form>

                        </div>
                      </div>
                
                </div>
              </div>

          </section>
        )
    }
}
