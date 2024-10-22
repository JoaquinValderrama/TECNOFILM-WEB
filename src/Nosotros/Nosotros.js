import React from 'react'
import Navbar from '../Navbar/Navbar'
import './css/Nosotros-style.css'
import Footer from '../Footer/Footer'

export default function Nosotros() {
  return (
    <>
    <Navbar></Navbar>
    <div className="back-nosotros">
    <h1 className='text-center'>NOSOTROS</h1>
    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className='svg-wave' fill="#ffffff" fill-opacity="1" d="M0,128L120,149.3C240,171,480,213,720,213.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>
    
    <div className="historia">
      <div className="container">
        <div className="desc-container mx-auto">
            <h2 className='text-center'>Nuestra Historia</h2>
            <p>Tecnofilm S.A.C. fue fundada el 10 de enero de 2015 por dos ingenieros con más de 20 años de experiencia en el rubro del plástico industrial y agrícola. Decidieron innovar activamente en la producción de plásticos utilizando polietileno para fabricar una amplia gama de productos como láminas y films. <br/><br/>

            Inicialmente, Tecnofilm comenzó como un emprendimiento con una sola extrusora, con capacidad de producción de 5TM/día utilizando material reciclado. Con el tiempo, la empresa ganó presencia en los mercados industrial y agrícola gracias a materiales de excelente calidad y precios competitivos, lo que le permitió expandir su clientela y diversificar sus productos. <br/><br/>

            Actualmente, Tecnofilm produce 12 TM diarias, convirtiéndose en la primera compañía peruana especializada en proveer productos plásticos sostenibles, con alta calidad y eficiencia logística para la distribución. Además, cabe destacar que a medida que la empresa ha expandido sus servicios, también ha crecido su equipo de colaboradores comprometidos y alineados con la cultura de la empresa, permitiendo un crecimiento orgánico, la innovación de productos de calidad con medidas personalizadas, precios competitivos y disponibilidad para brindar asesoría en la venta y postventa. Finalmente, la familia Tecnofilm está comprometida a superar y adaptarse a los desafíos del mercado actual mediante la gestión eficiente que ha caracterizado a la empresa hasta hoy.</p>
        </div>
      </div>
    </div>

    <div className="miviva">
      <div className="container-miviva d-flex">
        <div className="miviva1 text-center">
            <h3>MISIÓN</h3>
            <p className='mt-5'>Brindar productos plasticos flexiblex y confiables, desarrollando e innovando materiales y procesos para entegar a nuestros clientes productos que satisfagan sus necesidades y cubran o superen sus expectativas</p>
        </div>
        <div className="miviva2 text-center">
            <h3>VISIÓN</h3>
            <p className='mt-5'>Ser una opcion preferida de nuestros clientes, superando sus expectativas de calidad y servicio; brindando a nuestros empleado un lugar de trabajo que inspire a dar lo mejorde cada uno entre todos.</p>
        </div>
        <div className="miviva3 text-center">
            <h3>VALORES</h3>
            <ul className="mt-5">
              <li>Compromiso</li>
              <li>Empatía</li>
              <li>Honestidad</li>
              <li>Respeto</li>
              <li>Responsabilidad</li>
              <li>Superación</li>
              <li>Trabajo en Equipo</li>
            </ul>
        </div>
      </div>
    </div>

    <div className="calidad d-flex flex-row justify-content-around container">
      <div className="calidad-cont-1 text-center">
        <div className="img-calidad-cont-1">

        </div>
      </div>
      <div className="calidad-cont-2">
        <div className="text-calidad-cont-2">
        <h3>Calidad</h3>
        <p>Tenemos como objetivo la mejora continua de la calidad de sus productos y la eficiencia de sus procesos, para cumplir con los compromisos acordados con sus clientes, en el marco de una actividad sustentable y rentable a largo plazo.</p>
        <p className='mt-4'>TECNOFILM obtuvo la certificación ISO 9001 (norma internacional para sistemas de gestión de la calidad) con la que garantizamos que la empresa ofrece productos de alta calidad. </p>
        <div className="iso">

        </div>
        </div>
      </div>
    </div>
      <Footer></Footer>
    </>
  )
}
