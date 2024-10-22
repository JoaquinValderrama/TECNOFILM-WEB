import React from 'react'
import {Container} from "react-bootstrap"
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import './css/agricola-style.css'


export default function agricola() {
  return (
    <>
    <Navbar></Navbar>
    <div className="back-agricola">
        <h1 className='text-center'><span className='span-agri'>Productos de</span><br></br>Alta Calidad </h1>
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className='svg-wave' fill="#ffffff" fill-opacity="1" d="M0,128L120,149.3C240,171,480,213,720,213.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>
    
    <div className="container-desc-agri">
        <Container>
        <h2 className='text-center industrial-title'>LÍNEA AGRÍCOLA</h2>
        <div className="container-text-agri">
            <p>Ofrecemos soluciones de plástico flexible diseñadas para optimizar y proteger los cultivos, mejorando la eficiencia en el uso del agua y la protección de las plantas. Nuestros productos incluyen films para invernaderos, forros para postes, acolchados agrícolas y más, brindando a los agricultores y empresas agrícolas la durabilidad y calidad necesarias para maximizar su producción y reducir el impacto ambiental. Nuestra línea está pensada para quienes buscan la mejor protección y rendimiento para sus cultivos, con productos adaptables a diferentes necesidades y tipos de cultivo. </p>
        </div>
        </Container>
    </div>

    <div className="cont-prod-agri mt-5 mb-5">
        <div className="prod1">
          <h2>AGROFILM</h2>
          <a href="/agrofilm">ver ficha técnica</a>
        </div>
        <div className="prod2">
            <h2>BOLSA PARA MACETAS</h2>
            <a href="">ver ficha técnica</a>
        </div>
        <div className="prod3">
          <h2>BOLSA PARA VIVEROS O PLANTINES</h2>
          <a href="">ver ficha técnica</a>
        </div>
        <div className="prod4">
          <h2>ACOLCHADO O MULCH</h2>
          <a href="">ver ficha técnica</a>
        </div>
        <div className="prod5">
            <h2>MICROTUNEL Y MACROTUNEL</h2>
            <a href="">ver ficha técnica</a>
        </div>
    </div>

    <div className="page ">
      <span><a href="">1</a></span><span><a>2</a></span>
    </div>
    <Footer></Footer>
    </>
  )
}
