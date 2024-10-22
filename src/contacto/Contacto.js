import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Button, Image, Alert } from "react-bootstrap";
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';




// Componente DNI
const Dni = ({ formData, handleChange }) => (
  <Form.Group>
    <Form.Label>Número de DNI: </Form.Label>
    <Form.Control
      type="text"
      name="numero"
      placeholder="Número de documento"
      value={formData.numero}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>Nombres: </Form.Label>
    <Form.Control
      type="text"
      name="nombre"
      placeholder="Nombres"
      value={formData.nombre}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>Apellidos: </Form.Label>
    <Form.Control
      type="text"
      name="apellido"
      placeholder="Apellidos"
      value={formData.apellido}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>Celular: </Form.Label>
    <Form.Control
      type="text"
      name="celular"
      placeholder="Celular"
      value={formData.celular}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>Motivo de visita: </Form.Label>
    <Form.Control
      type="text"
      name="motivo"
      placeholder="Motivo de visita"
      value={formData.motivo}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>¿Cómo te enteraste de nosotros?&nbsp;&nbsp;&nbsp;</Form.Label>
    <Form.Check inline label="Facebook" name="contacto" type="radio" value="Facebook" onChange={handleChange} />
    <Form.Check inline label="LinkedIn" name="contacto" type="radio" value="LinkedIn" onChange={handleChange} />
    <Form.Check inline label="Agriexpo 2024" name="contacto" type="radio" value="Agriexpo 2024" onChange={handleChange} />
    <Form.Check inline label="Contactos" name="contacto" type="radio" value="Contactos" onChange={handleChange} />
  </Form.Group>
);

// Componente C.E
const Ce = ({ formData, handleChange }) => (
  <Form.Group>
    <Form.Label>Número de C.E: </Form.Label>
    <Form.Control
      type="text"
      name="ce"
      placeholder="Número de documento"
      value={formData.numero}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>Nombres: </Form.Label>
    <Form.Control
      type="text"
      name="nombres"
      placeholder="Nombres"
      value={formData.nombre}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>Apellidos: </Form.Label>
    <Form.Control
      type="text"
      name="apellidos"
      placeholder="Apellidos"
      value={formData.apellido}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>Celular: </Form.Label>
    <Form.Control
      type="text"
      name="celular"
      placeholder="Celular"
      value={formData.celular}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>Motivo de visita: </Form.Label>
    <Form.Control
      type="text"
      name="motivo"
      placeholder="Motivo de visita"
      value={formData.motivo}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>¿Cómo te enteraste de nosotros?&nbsp;&nbsp;&nbsp;</Form.Label>
    <Form.Check inline label="Facebook" name="contacto" type="radio" value="Facebook" onChange={handleChange} />
    <Form.Check inline label="LinkedIn" name="contacto" type="radio" value="LinkedIn" onChange={handleChange} />
    <Form.Check inline label="Agriexpo 2024" name="contacto" type="radio" value="Agriexpo 2024" onChange={handleChange} />
    <Form.Check inline label="Contactos" name="contacto" type="radio" value="Contactos" onChange={handleChange} />
  </Form.Group>
);

// Componente RUC
const Ruc = ({ formData, handleChange }) => (
  <Form.Group>
    <Form.Label>Número de RUC: </Form.Label>
    <Form.Control
      type="text"
      name="ruc"
      placeholder="Número de documento"
      value={formData.numero}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>Razón Social: </Form.Label>
    <Form.Control
      type="text"
      name="razsocial"
      placeholder="Razón Social"
      value={formData.razsocial}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>Celular: </Form.Label>
    <Form.Control
      type="text"
      name="celular"
      placeholder="Celular"
      value={formData.celular}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>Motivo de visita: </Form.Label>
    <Form.Control
      type="text"
      name="motivo"
      placeholder="Motivo de visita"
      value={formData.motivo}
      onChange={handleChange}
      className='mb-4'
    />
    <Form.Label>¿Cómo te enteraste de nosotros?&nbsp;&nbsp;&nbsp;</Form.Label>
    <Form.Check inline label="Facebook" name="contacto" type="radio" value="Facebook" onChange={handleChange} />
    <Form.Check inline label="LinkedIn" name="contacto" type="radio" value="LinkedIn" onChange={handleChange} />
    <Form.Check inline label="Agriexpo 2024" name="contacto" type="radio" value="Agriexpo 2024" onChange={handleChange} />
    <Form.Check inline label="Contactos" name="contacto" type="radio" value="Contactos" onChange={handleChange} />
  </Form.Group>
);

export default function Visual() {
  const [selectedForm, setSelectedForm] = useState('');
  
  const [formData, setFormData] = useState({
    dni: '',
    nombres: '',
    apellidos: '',
    celular: '',
    motivo: '',
    contacto: '',
    ce: '',
    ruc: '',
    razonSocial: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSelectChange = (event) => {
    setSelectedForm(event.target.value.toUpperCase()); // Usar mayúsculas para comparación
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const datos = new FormData();
    datos.append('formType', selectedForm);
    datos.append('numero', selectedForm === 'DNI' ? formData.numero : selectedForm === 'C.E' ? formData.ce : formData.ruc); // Verifica cuál es el número
    datos.append('celular', formData.celular);
    datos.append('motivo', formData.motivo);
    datos.append('contacto',formData.contacto)

    // Solo incluir nombres y apellidos si el tipo es DNI o C.E
    if (selectedForm === 'DNI' || selectedForm === 'C.E') {
      datos.append('nombre', formData.nombre);
      datos.append('apellido', formData.apellido);
    }

    // Solo incluir razon_social si el tipo es RUC
    if (selectedForm === 'RUC') {
      datos.append('razsocial', formData.razsocial);
    }

    // Enviar datos a la API
    try {
      const response = await fetch('http://localhost/reemplazo/api.php', {
        method: 'POST',
        body: datos
      });
      const resultado = await response.json();
      console.log(resultado); // Ver la respuesta de la API
      alert(resultado.mensaje);
    } 
    catch (error) {
      console.log([...datos]);  // Te mostrará los pares clave-valor que estás enviand
    }  
  };

  return (
    <>
    <Navbar></Navbar>
    <Form onSubmit={handleSubmit}> {/* Envolver en un formulario */}

      <div>
        <Form.Group controlId="tipo_documento">
          <Form.Label>Selecciona tipo de documento</Form.Label>
          <Form.Control as="select" onChange={handleSelectChange} value={selectedForm}>
            <option value="">Selecciona tipo de documento</option>
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
            <option value="C.E">C.E</option>
          </Form.Control>
        </Form.Group>

        {selectedForm === 'DNI' && <Dni formData={formData} handleChange={handleChange} />}
        {selectedForm ==='C.E' && <Ce formData={formData} handleChange={handleChange} />}
        {selectedForm ==='RUC' && <Ruc formData={formData} handleChange={handleChange} />}
      </div>

      <Button type="submit">Agregar</Button> {/* Botón para enviar el formulario */}
    </Form>
    </>
  )
}
