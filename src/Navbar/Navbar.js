import React from 'react'
import {Navbar, Container,Nav} from "react-bootstrap"
import logo from '../img/COLOR2.png'
import './style/nav-style.css'
import { Link } from 'react-router-dom'

export default function() {
  return (
    <>
      <div className='ct1'>
      <Navbar expand="lg" className='nav mx-auto'>
              <Container>
              <Navbar.Brand href="#" className='px-4'>
              <img src={logo} width="200" alt="" height="30" className='d-inline-block align-top my-2'/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="menu"/>
              <Navbar.Collapse id="menu">
                <Nav className="ms-auto px-4" >
                  <Link to="/" className="nav_text nav-liml nav-link">Inicio</Link>
                  <Link  to="/Nosotros" className="nav_text nav-liml nav-link">Nosotros</Link>
                  <Link  to="/Productos" className='nav_text nav-liml nav-link'>Productos</Link>
                  <Link to="/contacto" className="ms-3 contact-btn">Contacto</Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
      </Navbar>
      </div> 
    </>
  )
}
