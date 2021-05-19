import React from "react";
import foto from "./info2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="root">
      
      <div class="topnav">
    
        <div class="topnav-centered">
          <Link to="/">Informatica 404</Link>
        </div>
          <div class="topnav-right">
          <Link to="/somos">Quienes Somos</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/login">login</Link>
        </div>

      </div>
      
      <div class="contenedor">
        <div class="contendor-titulos">
          <h1 class="title">¡Hola, somos Informatica 404!</h1>
          <h1 class="title">Diseñamos exeperiencias moviles y web</h1>
        </div>
        <div class="contendor-imagen">
          <img src={foto} alt="foto"/>
        </div>
      </div>
    </div>
  );
};
export default Home;
