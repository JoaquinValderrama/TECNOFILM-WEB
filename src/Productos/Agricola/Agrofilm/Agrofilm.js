import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
import './css/agrofilm-style.css'
import {Container} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Macrotunel() {
  return (
    <>
    <Navbar></Navbar>
    <div className="back-agricola-agrofilm">
        <h1 className='text-center'>AGROFILM</h1>
    </div>
    <Container>
    <div className="container-desc-agrofilm d-flex flex-row mt-5">
        <div className="agrofilm-descripcion">
                <h3>Descripción</h3>
                <p>Film con alta durabilidady resistencia mecánica que soporte la instalación y el uso en la vida util esperada.</p>
                <p>Los inhibidores de ultima generación que utilizamos le confieren una alta resistencia a la degradación por efecto de la radiación ultravioleta.</p>
                <p>Fabricamos en espesores desde 6 mils(150micras) hasta 12 mils (300micras).</p>
                <p>El ancho, largo y peso de las bobinas se adecua a las necesidades del clientes</p>
        </div>
        <div className="agrofilm-caracteristicas">
            <h3>Caracteristicas</h3>
            <p>Nuestros films poseen excelentes propiedades mecánicas, al combinarse en su estructura multicapa, la flexibilidad de los copolímeros con la rigidez y resistencia mecánica de los materiales LDPE y metalocenos.</p>
            <p>Los estabilizadores UV de última generación, en base a una mezcla de Hals poliméricos y absorbedores UV, confieren alta resistencia a la degradación por la radiación solar.</p>
            <p>El aditivo absorbedor infrarrojo (IR) proporciona excelentes propiedades térmicas, y alta capacidad de difusión de luz, eliminando sombras dentro del invernadero.
            </p>
        </div>  
    </div>
    <div className="container-presentacion d-flex mt-5 justify-content-center">
        <div className="anchos text-center">
            <h6>Anchos</h6>
            <p>Desde 1 metro<br/>Hasta 8 metros</p>

        </div>
        <div className="largos text-center">
            <h6>Largos</h6>
            <p>Desde 1 metro<br/>Hasta 8 metros</p>

        </div>
        <div className="pesorollo text-center">
            <h6>Peso x Rollo</h6>
            <p>Máximo de 100 kilos</p>

        </div>
        <div className="colores text-center">
            <h6>Colores</h6>
            <p>blanco, traslucido,<br/>melón,verde,etc</p>
        </div>
    </div>
    
    <div className="descargar-brochure text-center">
        
        <a href="">Descargar el brochure&nbsp;&nbsp;<FontAwesomeIcon icon={faDownload}/></a>
    </div>
    </Container>
    <Footer></Footer>
    </>
  )
}


