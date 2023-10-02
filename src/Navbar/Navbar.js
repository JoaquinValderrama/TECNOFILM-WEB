import React from 'react'
import {Navbar, Container} from "react-bootstrap"
import logo from '../img/COLOR2.png'
import './style/style.css'

export default function 
() {
  return (
    <>
    <Navbar className='nav'>
        <Container>
            <Navbar.Brand href="#">
            <img src={logo} width="200" alt="" height="30" className='d-inline-block align-top my-2'/>
            </Navbar.Brand>
        </Container>
        
    </Navbar>
    </>
  )
}
