 import React from 'react' 
import {Navbar, Container,Nav,Card,Button} from "react-bootstrap"
import './css/footer-style.css'
import logo from '../img/BLANCO2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
    <div className="footer">
        <Container>
        <div className="container-footer d-flex justify-content-between flex-wrap">
            <div className="info-footer">
                    <img src={logo} alt="logo_tecno_blanco" className='logo-footer'/>
                    <p>ASOC. MUTUAL AYACUCHO MZ. D LT. 19
                    SJM kM. 18.5 PANAM. SUR</p>

                    <p>Teléfono: +51 940 561 059</p>
                    <p>Correo: ventas.tf@tecnofilm.pe</p>
            </div>
            <div className="navegacion">
                <h4>NAVEGACIÓN</h4>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Línea Agrícola</a></li>
                    <li><a href="">Línea Industrial</a></li>
                </ul>
            </div>

            <div className="productos">
                <h4>LINEA DE PRODUCCIÓN</h4>
                <ul>
                    <li><a href="">Industrial</a></li>
                    <li><a href="">Agrícola</a></li>
                    <li><a href="">Pesca</a></li>
                    <li><a href="">Comercial</a></li>
                </ul>
            </div>

            <div className="siguenos">
                <h4>SÍGUENOS</h4>
                <div className="redes d-flex justify-content-between ">
                  <a className="cont-red" href="https://www.instagram.com/tecnofilm_sac/" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faInstagram} size="2x"/>
                  </a>
                  <a className="cont-red" href="https://www.facebook.com/profile.php?id=100083574932013" target="_blank">
                  <FontAwesomeIcon className='icon' icon={faFacebookF} size="2x" />
                  </a>
                  <a className="cont-red" href="https://www.linkedin.com/company/tecnofilm-sac/" target="_blank">
                  <FontAwesomeIcon className="icon" icon={faLinkedinIn} size="2x"/>
                  </a>
                </div>
            </div>
        </div>
        <div className="trademark  text-center">
        <hr></hr>
            <p >&reg; TECNOFILM S.A.C.</p>
        </div>
        </Container>
    </div>
    </>
  )
}
