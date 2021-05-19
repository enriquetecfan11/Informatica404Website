import React from "react";
import { Link } from "react-router-dom";
import mail from "./mail.png"
import whatsapp from "./whatsapp.png"
import rss from "./rss.png"


const contacto = () => {
  
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




  <div className="col-md-10">
    <div className="col-md-2"></div>
     <div className="container-all col-md-10">
      <div class="container-text">
        <h1>
          Hablemos de como potenciar tu proyecto y sus resultados.
          <br></br>
          Contáctanos ahora sin compromiso.
        </h1>
      </div>
      <div className="box-item">
        <div className="left-item">
          <img src={mail} alt="foto" />
        </div>
        <div className="right-item">
          info@informatica404.com
        </div>
      </div>

      <div className="box-item">
        <div className="left-item">
          <img src={whatsapp} alt="foto" />
        </div>
        <div className="right-item">
          727788459
        </div>
      </div>


      <div className="box-item">
        <div className="left-item">
          <img src={rss} alt="foto" />
        </div>
        <div className="right-item">
          https://linktr.ee/informatica404
        </div>
      </div>
    </div>
  </div>


</div>
    )
};

export default contacto;