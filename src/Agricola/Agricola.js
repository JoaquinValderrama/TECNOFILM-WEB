import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Container} from "react-bootstrap"
import './css/Agricola-style.css'
import Footer from '../Footer/Footer'
import Download from './img/download.svg'
import { Link } from 'react-router-dom'

export default function Agricola() {
  return (
    <>

    <Navbar></Navbar>
    <div className="back-nosotros">
      <div className="container">
        <h1>LÍNEA AGRÍCOLA</h1>
      </div>
    </div>

    <div className=" pb-5">
      <Container>
        <div className="container-cards d-flex justify-content-around flex-wrap">
            
          <div className="cont-prod">
          <h3>MICROTUNEL</h3>
            <Link to="/Microtunel" className="nav_text nav-liml nav-link">
            <div className="card-producto pa1">
            
            </div>
            </Link>
           
            
            <a href="https://drive.google.com/file/d/1e0ZZ-fYniB8SJM9js6NZRBjKsctm1q5L/view" target='_blank' className='desc-cont d-flex justify-content-center'>
                <div className="descarga-ficha">
                    <img src={Download} alt="" />
                    Descargar Ficha
                </div>
            </a>
          </div>
          
          <div className="cont-prod">
          <h3>MULCH NEGRO</h3>
          <Link to="/Mulch-Negro" className="nav_text nav-liml nav-link">
            <div className="card-producto pa2">
            
            </div>
            </Link>
            
            <a href="https://drive.google.com/file/d/1LXKd7c54NuublGcJOE_XOyUJA3zolUFI/view" className='desc-cont d-flex justify-content-center'>
                <div className="descarga-ficha">
                    <img src={Download} alt="" />
                    Descargar Ficha
                </div>
            </a>
          </div>
          
          <div className="cont-prod">
          <h3>MACROTUNEL</h3>
          <Link to="/Macrotunel" className="nav_text nav-liml nav-link">
            <div className="card-producto pa3">
            
            </div>
            </Link>
            
            <a href="https://drive.google.com/file/d/1e0ZZ-fYniB8SJM9js6NZRBjKsctm1q5L/view" className='desc-cont d-flex justify-content-center'>
                <div className="descarga-ficha">
                    <img src={Download} alt="" />
                    Descargar Ficha
                </div>
            </a>
          </div>
          
          
          <div className="cont-prod">
          <h3>AGROFILM</h3>
          <Link to="/Agrofilm" className="nav_text nav-liml nav-link">
            <div className="card-producto pa4">
            
            </div>
            </Link>
            
            <a href="https://drive.google.com/file/d/1rM4GB2lTyYYEy-2hvb4qQZeFoVc5oWu5/view" className='desc-cont d-flex justify-content-center'>
                <div className="descarga-ficha">
                    <img src={Download} alt="" />
                    Descargar Ficha
                </div>
            </a>
          </div>
          
          
          <div className="cont-prod">
          <h3>MULCH NEGRO/BLANCO</h3>
          <Link to="/Mulch-Negro-Blanco" className="nav_text nav-liml nav-link">
            <div className="card-producto pa5">
            
            </div>
            </Link>
            
            <a href="https://drive.google.com/file/d/1LXKd7c54NuublGcJOE_XOyUJA3zolUFI/view" className='desc-cont d-flex justify-content-center'>
                <div className="descarga-ficha">
                    <img src={Download} alt="" />
                    Descargar Ficha
                </div>
            </a>
          </div>
          
          <div className="cont-prod">
          <h3>MANGA DE REGADÍO</h3>
          <Link to="/Manga-Regadio" className="nav_text nav-liml nav-link">
            <div className="card-producto pa6">
            
            </div>
            </Link>
            
            <a href="https://drive.google.com/file/d/1SfwuElAVS2lr1BWY1V60_ZAmpoTjmVVy/view" className='desc-cont d-flex justify-content-center'>
                <div className="descarga-ficha">
                    <img src={Download} alt="" />
                    Descargar Ficha
                </div>
            </a>
          </div>
          
          
          <div className="cont-prod">
          <h3>SACO PARA FERTILIZANTE</h3>
          <Link to="/Saco-Fertilizante" className="nav_text nav-liml nav-link">
            <div className="card-producto pa1">
            
            </div>
            </Link>
            
            <a href="https://drive.google.com/file/d/1KA2vCaJMaciBQRamfai3W7JpKHuhVZ75/view" className='desc-cont d-flex justify-content-center'>
                <div className="descarga-ficha">
                    <img src={Download} alt="" />
                    Descargar Ficha
                </div>
            </a>
          </div>
          
          <div className="cont-prod">
          <h3>BOLSA PARA VIVERO</h3>
          <Link to="/Bolsa-Vivero" className="nav_text nav-liml nav-link">
            <div className="card-producto pa2">
            
            </div>
            </Link>
            
            <a href="https://drive.google.com/file/d/17bhs_DtY7kC8SDLdsOPPU-bGgkIOc6EG/view" className='desc-cont d-flex justify-content-center'>
                <div className="descarga-ficha">
                    <img src={Download} alt="" />
                    Descargar Ficha
                </div>
            </a>
          </div>
          
        </div>
      </Container>      
    </div>
    <Footer></Footer>
    </>
  )
}
