import React from 'react'
import {Navbar, Container,Nav, NavDropdown} from "react-bootstrap"
import logo from '../img/COLOR2.png'
import './style/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
export default function 
() {
  return (
    <>
    <Navbar className='nav'>
        <Container>
            <Navbar.Brand href="#">
            <img src={logo} width="200" alt="" height="30" className='d-inline-block align-top my-2'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='menu'/>
            <Navbar.Collapse id="menu">
              <Nav className="ms-auto">
                <Nav.Link href="#" className="nav_text">Inicio</Nav.Link>
                <Nav.Link href="#" className="nav_text">Nosotros</Nav.Link>
                <NavDropdown title="Productos" id="menudrop">
                <NavDropdown title="Linea Agricola" id="menuagri">
                  <NavDropdown.Item href="#">Micro Tunel</NavDropdown.Item>
                  <NavDropdown.Item href="#">Macro Tunel</NavDropdown.Item>
                  <NavDropdown.Item href="#">Mulch Negro</NavDropdown.Item>
                  <NavDropdown.Item href="#">Mulch Negro/Blanco</NavDropdown.Item>
                  <NavDropdown.Item href="#">Mangas de Regadío</NavDropdown.Item>
                  <NavDropdown.Item href="#">Sacos de Fertilizantes</NavDropdown.Item>
                  <NavDropdown.Item href="#">Bolsas para Viveros</NavDropdown.Item>
                  <NavDropdown.Item href="#">Agrofilm</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Linea Industrial" id="menuind">
                  <NavDropdown.Item href="#">Lámina de Enferdado</NavDropdown.Item>
                  <NavDropdown.Item href="#">Bolsa para Empaques</NavDropdown.Item>
                  <NavDropdown.Item href="#">Láminas Termocontraibles</NavDropdown.Item>
                  <NavDropdown.Item href="#">Bolsas Termocontraibles</NavDropdown.Item>
                </NavDropdown>
                  
                </NavDropdown>
                <Nav.Link href="https://forms.gle/YSuKV6CUXB32S4jB9" target="_blank" className="nav_text">Agendar Reunión<FontAwesomeIcon icon={faArrowRight} className='ms-2'/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
        
    </Navbar>
    </>
  )
}
