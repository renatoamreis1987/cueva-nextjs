import React from "react";
import Link from "next/link";

const Galeria = props => (
  <div className="container main-info">
    <h1 className="reglamento-h1"> Galeria de Fotos </h1>
    <div className="main-info-1">
      {console.log(props.galeria)}
      {props.galeria.map(galeria => (
        <div
          key={galeria.id}
          className="patrocinadores-div patrocinadores-text"
        >
          <Link href={galeria.href}>
            <a target="_blank">
              {galeria.evento === null ? (
                <img
                  className="patrocinadores-div-img"
                  src={galeria.image}
                  alt=""
                />
              ) : (
                <p className="patrocinadores-text">{galeria.evento}</p>
              )}
            </a>
          </Link>
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
        height: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        margin: 0.5rem;
      }

      .patrocinadores-text {
        font-weight: 400;
        font-style: italic;
        font-size: 1.2rem;
        text-align: center;
        color: black;
      }

      a {
        text-decoration: none;
        text-decoration: underline;

        }

      .patrocinadores-div-img {
        max-width: 15rem;
        max-height: 18rem;
        padding: 10px;
        border-radius: 5%;
        transition: all 0.2s ease-in-out;
      }

      .patrocinadores-div-img:hover {
        transform: scale(1.1);
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

export default Galeria;
