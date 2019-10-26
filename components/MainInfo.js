import React from "react";
import Link from "next/link";

const MainInfo = () => {
  return (
    <div className="main-info container">
      <div className="main-info__title">
        <h1>Eventos</h1>
      </div>
      <div className="main-info__eventos-image">
        <a href="./images/eventos/cartel.jpeg" target="_blank" />
        <img
          className="main-info__eventos-image-img "
          src="/static/cartels/CARTEL_SAN_PINTEÑA_2019_rb1rpu.jpg"
          alt=""
        />
      </div>
      <div className="main-info__eventos-content">
        <h1>VIII carrera popular</h1>
        <h1>San Pinteña</h1>
        <h2>22 de Diciembre de 2019</h2>
        <br />
        <Link href="/eventos/evento-viii-san-pintena">
          <button className="main-info__button">Más Informacion</button>
        </Link>
      </div>
      <div className="main-unete__title">
        <h1>Únete</h1>
      </div>
      <div className="main-unete__div">
        <p>¿TE GUSTA EL DEPORTE?</p>
        <p>¿TE GUSTA PARTICIPAR EN ACTIVIDADES CULTURALES Y DEPORTIVAS?</p>
        <p>¿TE GUSTA VIAJAR?</p>
        <p>¿TE GUSTA COMPARTIR?</p>
        <p className="main-unete__div-underline">ÚNETE A NOSOTROS Y DISFRUTA</p>
        <br />
        <button className="main-unete__div-button" type="button">
          Formulario de Contacto
        </button>
      </div>

      <style jsx>{`

        @font-face {
        font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
        src: https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700
        }

        .container {
         max-width: 960px;
         margin-bottom: 50px;
        }

        .main-info {
          font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
          /* background:; */
          display: grid;
          justify-self: center;
          grid-template-rows: auto 85%;
          grid-template-columns: auto auto auto;
          grid-column-gap: 15px;
          grid-row-gap: 15px;
          grid-template-areas: "next-event-1 next-event-1 unete-1" "event-content-1 event-content-2 unete-content-1";
          margin-left: auto;
          margin-right: auto;
        }

        .main-info__title {
          text-align: center;
          grid-area: next-event-1;
          color: #f96332;
          transform: translateY(1rem);
        }

        .main-info__title h1 {
          margin-bottom: 0;
        }

        .main-info__eventos-image {
          grid-area: event-content-1;
          justify-self: center;
          align-self: center;
          padding-top: 1rem;
        }

        .main-info__button {
            margin-top: 1.8rem
        }

        .main-info__eventos-image-img {
          max-height: 25rem;
          /* max-width: 20rem; */
          border-radius: 0.1875rem;
        }

        .main-info__eventos-content {
          text-align: center;
          grid-area: event-content-2;
          justify-self: center;
          align-self: center;
        }

        .main-info__eventos-content h1 {
          text-align: center;
        }

        .main-info__eventos-content h2 {
          text-align: center;
          font-weight: 600;
          font-size: 1rem;
        }

        .main-info__eventos-content p {
          text-align: justify;
        }

        .main-unete__title {
          text-align: center;
          color: #f96332;
          grid-area: unete-1;
          transform: translateY(1rem);
          z-index: 3000;
        }

        .main-unete__title h1 {
          margin-bottom: 0;
        }

        .main-unete__div {
          text-align: center;
          background: linear-gradient(
            180deg,
            #f96332 0%,
            rgba(255, 255, 255, 1) 100%
          );
          grid-area: unete-content-1;
          border-radius: 0.8rem;
          z-index: 10;
          margin-bottom: 20px;
        }

        .main-unete__div p {
          color: black;
          margin-top: 2rem;
          font-weight: 700;
          font-size: 1rem;
        }

        .main-unete__div-underline {
          text-decoration: underline;
        }

        button {
          border-width: 2px;
          font-weight: 400;
          font-size: 0.8571em;
          font-family: inherit;
          /* line-height: 1.35em; */
          /* margin: 10px 1px; */
          border: none;
          border-radius: 0.1875rem;
          padding: 11px 22px;
          cursor: pointer;
          background-color: #f96332;
          color: #ffffff;
        }

        button:hover {
          background-color: #fa865f;
        }

        @media (max-width: 950px) {

          .container {
            max-width: 800px;
          }

          .main-info {
            /* background:; */
            display: grid;
            grid-area: main-one;
            justify-self: center;
            /* align-self: center; */
            grid-template-rows: auto auto auto auto auto auto;
            grid-template-columns: 100%;
            grid-column-gap: 15px;
            grid-row-gap: 15px;
            grid-template-areas: "next-event-1" "event-content-1" "event-content-2" "unete-1" "unete-content-1";
            margin-top: 10px;
          }
        
          .main-info__eventos-content p {
            margin: 0.5rem 2rem;
          }

          .main-info__button {
            margin-top: 0rem
        }
        
          .main-unete__title {
            transform: translateY(1rem);
          }
        
          .main-unete__div {
            margin: 0 1rem 1rem 1rem;
            padding: 0.1rem 1rem;
          }
        
          .main-unete__div p {
            color: black;
            font-size: 1rem;
            font-weight: 700;
          }
        
          .main-unete__div p:last-of-type {
            text-decoration: underline;
          }
        
          .main-unete__div button {
            border-width: 2px;
            font-weight: 400;
            font-size: 0.8571em;
            font-family: inherit;
            /* line-height: 1.35em; */
            /* margin: 10px 1px; */
            border: none;
            border-radius: 0.1875rem;
            padding: 11px 22px;
            cursor: pointer;
            background-color: #f96332;
            color: white;
          }

        }


      `}</style>
    </div>
  );
};

export default MainInfo;
