import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import Calendar from 'react-calendar';



function App() {
  const [value, onChange] = useState(new Date());


  const guardarDatos = (e) => {
    e.preventDefault();

    const newData = {
      nombre: e.target.nombre.value,
      correo: e.target.correo.value,
      proyecto: e.target.proyecto.value,
      descripcion: e.target.descripcion.value,
      telefono: e.target.telefono.value,
    };
    const db = firebase.firestore();
    db.collection("usuarios")
      .add(newData)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    e.target.reset();
  };

  return (
    <div className="app">

       <div class="topnav">
          <div class="topnav-right">
          <Link to="/dashboard">Introducir Datos</Link>
            <Link to="/table">Tabla de Datos</Link>
            <Link to="/login">Salir</Link>
        </div>
      </div>



      <h1>Añade usarios a la base datos</h1>
      <div className="col-12 mt-4">
        <form onSubmit={guardarDatos}>
          <input
            type="text"
            placeholder="Nombre del cliente"
            className="form-control mb-2"
            name="nombre"
          />
          <input
            type="text"
            placeholder="Correo del cliente"
            className="form-control mb-2"
            name="correo"
          />
          <input
            type="number"
            placeholder="Telefono del cliente"
            className="form-control mb-2"
            name="telefono"
          />
          <input
            type="text"
            placeholder="Proyecto"
            className="form-control mb-2"
            name="proyecto"
          />
          <input
            type="text"
            placeholder="Mini descripcion del proyecto"
            className="form-control mb-2"
            name="descripcion"
          />

          <button className="btn btn-primary btn-block" type="submit">
            Agregar
          </button>
        </form>
      </div>
      <div className="calendar">

         <Calendar
        onChange={onChange}
        value={value}
      />
      </div>
     

    </div>
  );
}

export default App;
