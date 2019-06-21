import React from "react";
import MainNav from "../components/MainNav";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

const equipo = () => (
  <div>
    <MainNav />
    <MainHeader />
    <div className="main-info container">
      <h1 className="reglamento-h1">¿Quienes Somos?</h1>
      <div className="quiene-somos-img">
        <a
          href="http://www.cuevakunyhebles.com/wp-content/uploads/2014/03/todos-1024x682.jpg"
          target="_blank"
        >
          <img
            className="img-rere"
            src="http://www.cuevakunyhebles.com/wp-content/uploads/2014/03/todos-1024x682.jpg"
            alt=""
          />
        </a>
      </div>
      <h2 className="nosotros-h2">Nosotros</h2>
      <div className="nosotros">
        <p>
          La Asociación deportiva “Kün y Hebles” tiene su origen en 1998 y desde
          entonces hemos velado por los intereses del atletismo pinteño
          retomando las carreras locales, compitiendo y entrenando dentro y
          fuera de la localidad y organizando actividades deportivas y
          culturales.
        </p>
        <p>
          El nombre de la asociación proviene de una leyenda que sitúa a los
          primeros pobladores de la ciudad en la cueva de Cuniebles, en el
          noreste del municipio.
        </p>
        <p>
          Entre nuestra actividades deportivas y lúdicas, la Asociación organiza
          dos importantes eventos deportivos de gran trascendencia en la zona
          sur de Madrid: la Carrera Nocturna en el mes de Agosto y la “San
          Pinteña” en el mes de diciembre, participando miles de corredores y
          cuya difusión entre los ciudadanos de la zona Sur llega mucho más allá
          de la propia ciudad de Pinto, sede de nuestra Asociación.
        </p>
      </div>
      <h2 className="nuestro-equipo-h2">Nuestro equipo directivo</h2>
      <div className="nosotros">
        <p>
          <span className="event-neg">Presidenta:</span> Francisca Cala Montoya
        </p>
        <p>
          <span className="event-neg">Vicepresidenta y Secretaria:</span> Ana Mª
          Carrero
        </p>
        <p>
          <span className="event-neg">Tesorera:</span> Nieves Blanco Martinez
        </p>
        <p>
          <span className="event-neg">Vocal:</span> Francisco Javier Palomo De
          Castro
        </p>
      </div>
    </div>
    <MainFooter />

    <style jsx>{`

        @font-face {
            font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
            src: https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700
        }    

        .container {
            max-width: 960px;
          }
          

      .main-info {
        font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
        grid-area: main-one;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        margin-left: auto;
        margin-right: auto;
      }

      .nosotros {
        /* text-align: ; */
        font-weight: 400;
        border-width: 2px;
        border-style: solid;
        border-color: #f96332;
        padding: 1rem;
      }

      .nosotros p {
        margin-top: 1.5rem;
        line-height: 1.8rem;
        text-align: justify;
      }

      .nosotros-h2 {
        color: #f96332;
        transform: translateY(2.6rem);
        z-index: 1000;
        background: white;
        width: 7.5rem;
      }

      .nuestro-equipo-h2 {
        color: #f96332;
        transform: translateY(2.6rem);
        z-index: 1000;
        background: white;
        max-width: 20rem;
      }

      @media (max-width: 500px) {
        .nuestro-equipo-h2 {
          font-size: 1.2rem;
          transform: translateY(2.2rem);
          max-width: 16rem;
        }
      }

      .reglamento-h2 {
        color: #f96332;
        transform: translateY(2.6rem);
        z-index: 1000;
        background: white;
        width: 10.2rem;
      }

      .reglamento-h1 {
        color: #f96332;
        text-align: center;
      }

      .event-neg {
        font-weight: 600;
      }

      .quiene-somos-img {
        justify-self: center;
        align-self: center;
      }

      .quiene-somos-img img {
        width: 100%;
        border-radius: 1rem;
      }
    `}</style>
  </div>
);

export default equipo;
