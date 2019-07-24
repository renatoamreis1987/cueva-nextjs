import React from "react";
import Link from "next/link";

const Patrocinadores = props => (
  <div className="main-info">
    <h1 className="reglamento-h1">
      Los patrocinadores habituales de nuestros eventos
    </h1>
    <div className="main-info-1">
      {console.log(props.patrocinadores)}
      {props.patrocinadores.map(patrocinadores => (
        <div key={patrocinadores.id} className="patrocinadores-div">
           <Link href={patrocinadores.link}>
             {patrocinadores.image !== null ? (
               <a target="_blank">
               <img className="patrocinadores-img" src={patrocinadores.image}></img>
              </a>
             ) : (
               <p className="patrocinadores-text">{patrocinadores.name}</p>
             ) }
           </Link>
        </div>
      ))}
    </div>

    <style jsx>{`

        @font-face {
            font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
            src: https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700
        }

      .main-info {
        font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
        grid-area: main-one;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }

      .main-info-1 {
        grid-area: main-one;
        display: flex;
        flex-direction: row;
        /* padding: 1rem; */
        align-content: space-around;
        flex-wrap: wrap;
        justify-content: center;
      }

      .reglamento {
        /* text-align: ; */
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
        border-top: 0;
        border-bottom: 0;
        border-style: solid;
        border-color: #f96332;
        background: #ffc5b2;
        width: 17rem;
        height: 12rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        margin: 0.5rem;

      }

      .patrocinadores-text {
        font-weight: 500;
        font-style: italic;
        font-size: 1.5rem;
        text-align: center;
      }

      .patrocinadores-img {
        max-width: 95%;
        max-height: 180px;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
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

export default Patrocinadores;