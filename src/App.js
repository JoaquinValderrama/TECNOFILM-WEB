import React from 'react'
import Inicio from './Index/Inicio'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/react-fontawesome"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nosotros from './Nosotros/Nosotros'
import Contacto from './Contactanos/contacto'
import Productos from './Productos/Productos'
import Agricola from './Productos/Agricola/agricola'
import Macrotunel from './Productos/Agricola/Macrotunel/Macrotunel'
import Agrofilm from './Productos/Agricola/Agrofilm/Agrofilm'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio/>}/><Route/>
        <Route path='/Nosotros' element={<Nosotros/>}/><Route/>
        <Route path='/Productos' element={<Productos/>}/><Route/>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/agricola' element={<Agricola/>}></Route>
        <Route path="/micro-macro" element={<Macrotunel/>}></Route>
        <Route path="/agrofilm" element= {<Agrofilm/>}></Route>
      </Routes>
    </Router>
  )
}
