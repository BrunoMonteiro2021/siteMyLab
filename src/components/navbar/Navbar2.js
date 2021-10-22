import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css'

const SmoothScroll = () => {
    return(
        <section className="cor">
            <div className="navbar-fixed blue-text text-darken-2">
                <nav>
                    <div className="container blue-text text-darken-2">
                        <div className="nav-wrapper blue-text text-darken-2">
                            <AnchorLink href="!#" className="brand-logo">DevCompilers</AnchorLink> 
                            <AnchorLink href="!#" data-target="mobile-demo" className="sidenav-trigger" ><i className="material-icons"> menu </i> </AnchorLink> 
                        
                        <ul className="right hide-on-med-and-down ">
                            <li> <AnchorLink href="/home">Home</AnchorLink></li>
                            <li> <AnchorLink href="/servicos">Serviços</AnchorLink></li>
                            <li> <AnchorLink href="/sobre">Sobre</AnchorLink></li>
                            <li> <AnchorLink href="/contato">Contato</AnchorLink></li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="mobile-demo">
                            <li> <AnchorLink href="#home">Home</AnchorLink></li>
                            <li> <AnchorLink href="#servicos">Serviços</AnchorLink></li>
                            <li> <AnchorLink href="#sobre">Sobre</AnchorLink></li>
                            <li> <AnchorLink href="#contato">Contato</AnchorLink></li>
                        </ul>

        </section>
    )
}


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <SmoothScroll />
            </div>
        )
    }
}
