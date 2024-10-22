import React from 'react'
import {Container} from "react-bootstrap"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import './css/index-style.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
export default function Inicio() {

  return (
    <>
  <Navbar></Navbar>
    <div className="back">
    {/* <h1 className='text-center'>ENVASES <br></br>FLEXIBLES</h1> */}
    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className='svg-wave' fill="#ffffff" fill-opacity="1" d="M0,128L120,149.3C240,171,480,213,720,213.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>
    

    <Container>
      <h2 className='text-center conoce-title'><span style={{color:'#00A0DF'}}>Conoce más</span><span> sobre nosotros</span></h2>
      <div className="conocenos d-flex flex-row">
        <div className="leftcont">
          <p>Especialistas en la producción y distribución de materiales plásticos para el sector industrial y agrícola del Perú.</p>
          <div className="list mt-5">
            <ul>
              <li><FontAwesomeIcon className="icon" icon={faCircleCheck} size="xs"/> Elaboración de empaques Plásticos.</li>
              <li><FontAwesomeIcon className="icon" icon={faCircleCheck} size="xs"/> Impresión en bolsa según fichas técnicas.</li>
              <li><FontAwesomeIcon className="icon" icon={faCircleCheck} size="xs"/> Fabricación de bolsas y productos plásticos Agricolas.</li>
            </ul>
            
          </div>
          <div className="img-iso">
          </div>
        </div>
        <div className="rightcont">
          <div className="imgcont">
          </div>
        </div>
      </div>
      <a className="boton-mas my-5 mx-auto text-center" href="">Saber más</a>
     
    </Container>
    <div className="linea-productos">
    <h2 className='text-center conoce-title' style={{color:'#00A0DF'}}>Nuestra Línea de Productos</h2>
    <div className="container-box d-flex">
      <div className="box1 text-center">
        <a href="">Industrial</a>        
      </div>
      <div className="box2 text-center">
        <a href="/agricola">Agrícola</a>
      </div>
      <div className="box3 text-center">
        <a href="">Pesca</a>
      </div>
      <div className="box4 text-center">
        <a href="">Comercial</a>
      </div>
    </div>
    </div>
    
    <div className="oficinas">
      <Container>
        <h2 className='ofi-h2 mb-5'>Nuestra Sede</h2>
        <div className="card-group">
                    <div className="box-sede">
                        <div className="space1 card-img align-self-center">
                            <div className="container-card ">
                                <h4 className="title-ubi mb-4">Oficinas</h4>
                            <p>Asoc. Mutual Ayacucho Mz. D Lt. 19  SJM km. 18.5 Panam. Sur</p>
                            <p className="mt-4 title-ubi"><b>LUNES A VIERNES:</b></p><p>08:00am - 01:00pm<br/>02:00pm - 05:00pm</p>
                            <p className="mt-4 title-ubi"><b>TELEFONO:</b></p><p>+51 940 561 059</p>
                            </div>
                            <a className="llegar-btn mx-auto mt-4" target="_blank" href="https://www.google.com/maps/dir//TECNOFILM+S.A.C,+Distrito+de+Lima+15058/@-12.2084763,-76.9748831,18.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105b9857c23c24b:0x3606f03955d0bcc3!2m2!1d-76.9756139!2d-12.2084777?entry=ttu">Como llegar</a>
                        </div>

                        <div className="space2 card-img">
                            <div className="sub-space2"style={{width: 100 + '%', height:100 + '%'}}>
                                <iframe width="100%" height="100%"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Tecnofilm+(TECNOFILM%20S.A.C.)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">GPS devices</a></iframe></div>
                        </div>
                    
                </div>
                
            </div>
      </Container>
    </div>
    <Footer></Footer>
    </>
    
  )
}
