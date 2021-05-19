import React from "react";
import { Link } from "react-router-dom";
import foto from "./info40.png";
import fototec from "./tecnologias.png"
import responsive from "./responsive.png";
import rgpd from "./rgpd.png";
import speed from "./speed.png";

const Somos = () => {
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
    <div className="container-todo col-md-10">
      <div class="container-imagenes">
        <div class="colunmas row ">
          <div class="image2 col-8">
            <img src={foto} alt="foto" />
          </div>
          <div class="col-4">
            <p class="text-inside">
              Somos una empresa que se dedica al diseño y desarollo de paginas
              web y aplicaciones Android
            </p>
            <p className="text-inside">
              Le ayudamos a construir una experiencia de usuario que sus
              usuarios amarán.
            </p>
          </div>
        </div>
      </div>

      <div className="container-text">
        <div className="row">
          <p className="text">
            Le ayudamos a ofrecer sus servicios en cualquier plataforma y crear
            experiencias fluidas en todos los puntos de contacto a través de
            interfaces adaptadas a cada usuario.
          </p>
        </div>
      </div>

      <div className="container-tec">
        <div className="row">
          <p className="text-bold">
            Utilizamos las ultimas tecnologias en diseño y desarrolo web y movil
          <div className="tecimage">
            <img src={fototec} alt="foto" />
          </div>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="colunmas row">
          <p className="text">Que aportaremos en tu proyecto</p>

          <div className="box-item">
            <div className="left-item">
              <img src={responsive} alt="foto" />
            </div>
            <div className="right-item">
              Tu nueva página web se adaptará a las principales resoluciones de
              pantalla de tabletas y smartphones del mercado. Visualiza el
              contenido de forma totalmente adaptada a cada entorno.
            </div>
          </div>

          <div className="box-item">
            <div className="left-item">
              <img src={rgpd} alt="foto" />
            </div>
            <div className="right-item">
              Tu web cumplirá la normativa RGPD (Reglamento General de
              Protección de Datos) que es de obligado cumplimiento por todas las
              empresas y profesionales, garantizándose así el correcto
              tratamiento de los datos de los usuarios de tu sitio web
            </div>
          </div>

          <div className="box-item">
            <div className="left-item">
              <img src={speed} alt="foto" />
            </div>
            <div className="right-item">
              La velocidad de carga es requisito indispensable para un buen SEO,
              además hará que los usuarios permanezcan durante más tiempo en la
              página web.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</div>
  );
};
export default Somos;
