import React from 'react'
import Navbar from '../Navbar/Navbar.js'
import Footer from '../Footer/Footer.js'
import './css/Productos-style.css'
import { Link } from 'react-router-dom'

export default function Productos() {
  return (
    <>
    <Navbar></Navbar>
    <div className="back-productos">
    <h1 className='text-center'>Nuestra Línea <br></br>de Productos</h1>
    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className='svg-wave' fill="#ffffff" fill-opacity="1" d="M0,128L120,149.3C240,171,480,213,720,213.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>

    <div className="linea-productos">
        <div className="container">
            <h2 className="text-center">Calidad en nuestros productos</h2>
            <div className="container-subtext">
                <p className='text-center mt-4'>Tecnofilm ofrece diversos productos de alta calidad para diversas líneas de producto</p>
                <div className="productos-iso">

                </div>
            </div>
        </div>
    </div>

    <div className="container-list-productos">
                <div className="container-box d-flex">
                    <div className="box-prod">
                        <a href="">
                            <div className="circle c1">
                                <div className="overlay-text">Ver más</div>
                            </div>
                        </a>
                        <h4 className='mt-5 text-center'>Industrial</h4>
                    </div>
                    <div className="box-prod">
                        <a href="/agricola">
                            <div className="circle c2">
                            <div className="overlay-text">Ver más</div>
                            </div> 
                        </a>
                        <h4 className='mt-5 text-center'>Agrícola</h4>                   
                    </div>
                    <div className="box-prod">
                        <a href="">
                            <div className="circle c3">
                            <div className="overlay-text">Ver más</div>
                            </div>
                        </a>
                        <h4 className='mt-5 text-center'>Pesca</h4>
                    </div>
                    <div className="box-prod">
                        <a href="">
                            <div className="circle c4">
                            <div className="overlay-text">Ver más</div>
                            </div>
                        </a>
                        <h4 className='mt-5 text-center'>Comercial</h4>
                    </div>
                </div>
            </div>

            <Footer></Footer>
    </>

    
  )
}
