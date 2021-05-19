import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

function App() {
  const [usuarios, setCities] = useState([]);

  const readAllData = () => {
    const db = firebase.firestore();
    db.collection("usuarios").onSnapshot((querySnapshot) => {
      let allCities = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        allCities.push(doc.data());
      });

      setCities(allCities);
    });
  };

  useEffect(() => {
    readAllData();
  }, []);


  return (
    <div className="app">

      <div class="topnav">
          <div class="topnav-right">
          <Link to="/dashboard">Introducir Datos</Link>
            <Link to="/table">Tabla de Datos</Link>
            <Link to="/login">Salir</Link>
        </div>
      </div>

      
      <div className="basedatos">
        <h1>Base de datos</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Proyecto</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Telefono</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, i) => (
              <tr key={i}>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.proyecto}</td>
                <td>{usuario.descripcion}</td>
                <td>{usuario.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button>
        <Link to="/">Salir</Link>
      </button>
    </div>
  );
}

export default App;
