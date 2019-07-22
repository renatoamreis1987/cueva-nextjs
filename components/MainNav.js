import React from "react";
import Link from "next/link";
import SimpleMenu from "./SimpleMenu"
// import "../static/shared.css"

const MainNav = () => (
  <div className="main-header">
    <Link href="/index">
      <p className="main-header__brand"> Cueva de Kun y Hebles</p>
    </Link>
      <div className="main-header__brand-movil">
        <SimpleMenu />
      </div>
    <nav className="main-nav">
      <ul className="main-nav__items">
        <li className="main-nav__item">
          <Link href="/eventos">
            <p className="main-nav__item-names">Eventos</p>
          </Link>
        </li>
        <li className="main-nav__item">
          <Link href="/galeria">
            <p className="main-nav__item-names">Galeria</p>
          </Link>
        </li>
        <li className="main-nav__item">
          <Link href="./patrocinadores">
            <p className="main-nav__item-names">Patrocinadores</p>
          </Link>
        </li>
        <li className="main-nav__item">
          <Link href="./quiene-somos">
            <p className="main-nav__item-names">¿Quiene Somos?</p>
          </Link>
        </li>
        <li className="main-nav__item">
          <Link href="./contacto">
            <p className="main-nav__item-names">Contáctanos</p>
          </Link>
        </li>
      </ul>
    </nav>

    <style jsx>{`

        @font-face {
            font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
            src: https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700
        }

        .backdrop {
          position: fixed;
          display: none;
          opacity: 0;
          top: 0;
          left: 0;
          z-index: 100;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          transition: opacity 0.2s linear;
        }

      .main-header {
        font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
        width: 100%;
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        display: flex;
        background: #f96332;
        padding: 0.2rem 1rem;
        align-items: center;
        justify-content: space-between;
        max-height: 45px;
        z-index: 100;
      }

      .main-header__brand {
        text-decoration: inherit;
        color: #ffffff;
        font-weight: 500;
        text-transform: uppercase;
        cursor: pointer;
      }

      .main-nav {
        display: block;
      }

      .main-header__brand-movil {
        display: none;
      }

      .main-nav__brand {
        text-decoration: inherit;
        color: inherit;
        font-size: 1.1rem;
        font-weight: 700;
        color: #000000;
      }
      .main-nav__items {
        margin: 0;
        padding: 0;
        padding-right: 0.5rem;
        list-style: none;
        display: flex;
        color: #FFFFFF;
        cursor: pointer;
      }

      .main-nav__item {
        margin: 0 0.8rem;
      }

      .main-nav__item-names {
        text-transform: uppercase;
        padding: 7px;
        font-weight: 400;
        font-size: 0.8rem;
      }

      .main-nav__item-names:hover {
        background-color: #fa865f;
        color: white;
        padding: 7px;
        border-radius: 5px;
      }

      .main-nav__item a,
      .mobile-nav__item a {
        text-decoration: none;
        color: #ffffff;
        font-weight: bold 200;
      }

      @media (max-width: 950px) {
        body {
          margin: 0;
          width: 100%;
          display: grid;
          font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
          grid-template-rows: 1.5rem auto auto auto;
          grid-template-columns: 100%;
          grid-template-areas:
            "header"
            "main-image"
            "main-one"
            "footer";
        }
      
        .container {
          max-width: 800px;
        }
      
        .main-overview__text {
          text-align: center;
          color: #ffffff;
          margin-top: 5.5rem;
        }
      
        .main-overview__text h1 {
          font-size: 2em;
          opacity: 0.9;
        }
      
        .main-overview__text h2 {
          font-size: 1em;
          opacity: 0.9;
        }
      
        .main-nav {
          display: none;
        }

        .main-header {
          width: 100%;

        }
      
        .main-header__brand {
          display: none;
        }
      
        .main-header__brand-movil {
          display: flex;
          text-transform: uppercase;
          padding: 7px;
          font-weight: 400;
          font-size: 0.8rem;
          text-decoration: none;
          color: #ffffff;
          font-weight: bold 200;
        }
      
        .main-header__brand-movil:hover {
          background-color: #fa865f;
          color: white;
          padding: 7px;
          border-radius: 5px;
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

export default MainNav;
