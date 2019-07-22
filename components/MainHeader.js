import React from "react";

const MainHeader = () => (
  <div className="main-overview">
      <h1 className="main-overview__text-h1">Cueva de Kün y Hebles</h1>
      <h2 className="main-overview__text-h2">
        Asociación Deportiva y Recreativa de Pinto
      </h2>


    <style jsx>{`

        @font-face {
            font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
            src: https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700
        }

      .main-overview {
        background: url("https://i.ibb.co/jRcPgqs/bg6.jpg");
        background-color: aqua;
        background-size: cover;
        background-position: center center;
        margin-top: 2rem;
        left: 0;
        width: 100%;
        height: 35vh;
        z-index: -1;
      }

      .main-overview__text-h1 {
        font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
        text-align: center;
        font-size: 4.2rem;
        font-weight: 600;
        opacity: 0.9;
        padding-top: 4rem;
        color: #ffffff;
        letter-spacing: 0.05em;
        text-shadow: 4px 4px 0px #505050, 7px 7px 0px rgba(131, 131, 131, 0.2);
      }

      .main-overview__text-h2 {
        font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
        text-align: center;
        font-weight: 500;
        font-size: 2rem;
        opacity: 0.9;
        color: #ffffff;
        letter-spacing: 0.05em;
        text-shadow: 4px 4px 0px #505050, 7px 7px 0px rgba(131, 131, 131, 0.2);
      }

      @media (max-width: 950px) {

        
          .main-overview__text-h1 {
            font-size: 2.5rem;
            opacity: 0.9;
          }
        
          .main-overview__text-h2 {
            font-size: 1rem;
            opacity: 0.9;
            font-weight: 600;
          }

      }


    `}</style>
  </div>
);

export default MainHeader;
