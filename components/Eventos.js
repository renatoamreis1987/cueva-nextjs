import React from "react";
import Link from "next/link";
import patrocinadores from "../pages/patrocinadores";

const Eventos = props => (
  <div className="container main-info">
    <h1 className="reglamento-h1">Nuestros Eventos</h1>
    <div className="main-info-1">
      {console.log(props.eventos)}
      {props.eventos.map(eventos => (
        <div key={eventos.id} className="patrocinadores-div">
          <p className="patrocinadores-titulo">{eventos.evento}</p>
          <p className="patrocinadores-fecha">{eventos.fecha}</p>
          {eventos.reglamento !== null ? (
            <Link href={eventos.reglamento}>
              <button className="btn-eventos">Ver Reglamento</button>
            </Link>
          ) : null}
          {eventos.galeria !== null ? (
            <Link href={eventos.galeria}>
              <button className="btn-eventos">Ver Galeria</button>
            </Link>
          ) : null}
        </div>
      ))}
    </div>

    <style jsx>{`

        @font-face {
        font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
        src: https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700
        }

      .reglamento-data {
        transform: translateY(-2rem);
        text-align: center;
      }

      .main-info {
        font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
        grid-area: main-one;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        f
      }

      .main-info-1 {
        grid-area: main-one;
        display: flex;
        flex-direction: row;
        align-content: space-around;
        flex-wrap: wrap;
        justify-content: center;
      }

      .reglamento {
        font-weight: 400;
        border-width: 2px;
        border-style: solid;
        border-color: #f96332;
        padding: 1rem;
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

      .patrocinadores-div {
        border-left: 6px;
        border-right: 0;
        border-top: 6px;
        border-bottom: 0;
        border-style: solid;
        border-color: #f96332;
        background: #ffc5b2;
        width: 420px;
        height: 12rem;
        display: flex;
        flex-direction: column;

        border-radius: 1rem;
        margin: 0.5rem;
      }

      .patrocinadores-titulo {
        font-weight: 500;
        font-size: 1.2rem;
        text-align: center;
        padding-left: 1rem;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        background-color: #f96332;
        margin: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        color: azure;
        height: 3rem;
      }

      .patrocinadores-fecha {
        font-weight: 500;
        font-size: 1rem;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
      }

      button {
        border-width: 2px;
        font-weight: 400;
        font-size: 0.85em;
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

      .btn-eventos {
        width: 50%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.2rem;
        background-color: white;
        color: black;
        border-radius: 6px;
        transition: ease-in-out 0.7s;
        font-weight: 600;
      }

      .btn-eventos:hover {
        border-radius: 25px;
      }

      .patrocinadores-div img {
        max-width: 100%;
        max-height: 100%;
      }

      .patrocinadores-padding {
        padding: 1rem;
      }

      @media (max-width: 950px) {
        .patrocinadores-div {
          width: 21rem;
        }
      }

      @media (max-width: 785px) {
        .patrocinadores-div {
          width: 30rem;
        }
      }

      @media (max-width: 535px) {
        .patrocinadores-div {
          width: 21rem;
        }
      }

      .event-neg {
        font-weight: 600;
      }
    `}</style>
  </div>
);

export default Eventos;
