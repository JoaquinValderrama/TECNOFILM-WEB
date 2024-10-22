import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
import './css/macrotunel.css'

export default function Macrotunel() {
  return (
    <>
    <Navbar></Navbar>
    <div className="back-agricola-micromacro">
        <h1 className='text-center'>MACROTUNEL Y MICROTUNEL </h1>
    </div>
    <div className="container-desc-micromacro d-flex flex-row mt-5">
        <div className="descripcion">
                <h3>Descripción</h3>
                <p></p>
        </div>
        <div className="caracteristicas">
            <h3>Caracteristicas</h3>
        </div>
    </div>
    </>
  )
}
