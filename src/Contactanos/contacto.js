import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './css/contacto-style.css'
import { Form, Container, Button, Image, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function contacto() {
  return (
    <>
    <Navbar></Navbar>
    <div className="back-contacto">
        <h1 className='text-center'>Contactanos</h1>
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className='svg-wave' fill="#ffffff" fill-opacity="1" d="M0,128L120,149.3C240,171,480,213,720,213.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>

    <div className="container">
        <div className="container-contacto d-flex">
            <div className="container-contacto-1">
                <h2>Sé parte de nuestros Clientes</h2>
                <p>Si estás interesado en nuestra propuesta, o deseas cotizar alguno de nuestros productos mostrados, no dudes en contactarte por cualquier medio con nosotros y brindarte una atencion personalizada.</p>
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
            <div className="container-contacto-2">
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control
                type="text"
                name="ruc"
                placeholder="Ingresa tu nombre"
                
                
                className='mb-4'
                />
                <Form.Label>Nombre de tu compañia (opcional): </Form.Label>
                <Form.Control
                type="text"
                name="razsocial"
                placeholder="Razón Social"
                
                
                className='mb-4'
                />
                <Form.Label>Celular: </Form.Label>
                <Form.Control
                type="text"
                name="celular"
                placeholder="Celular"
             
                className='mb-4'
                />
                <Form.Label>correo electrónico: </Form.Label>
                <Form.Control
                type="text"
                name="motivo"
                placeholder="Correo electrónico"
                
                
                className='mb-4'
                />
                
                <div className="descargar-brochure text-center">
        
                     <a href="">Enviar</a>
                </div>
            </Form.Group>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}
