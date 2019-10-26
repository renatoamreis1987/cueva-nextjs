import React from "react";
import MainNav from "../components/MainNav";
import MainHeader from "../components/MainHeader";
import Head from "../components/head";
import MainFooter from "../components/MainFooter";

const contacto = () => (
  <div>
        <Head title={"Cueva de Kun y Hebles - Contactanos"} />
    <MainNav />
    <MainHeader />

    <div className="main-info container">
      <h1>Contacta con nosotros</h1>
      <div className="form-container">
        <form
          id="contactform"
          action="https://formsubmit.io/send/f9fb2840-a50c-4646-8b77-16befd9a47bc"
          method="POST"
        >
          <p>Nombre: </p>
          <input className="input-name" name="name" type="text" id="name" />
          <p>Email:</p>
          <input className="input-email" name="email" type="email" id="email" />
          <p>Mensaje:</p>
          <textarea name="comment" id="comment" rows={10} defaultValue={""} />
          <input
            name="_formsubmit_id"
            type="text"
            style={{ display: "none" }}
          />
          <br />
          <input className="input-button" defaultValue="Enviar" type="submit" />
        </form>
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

      h1 {
        color: #f96332;
        text-align: center;
      }

      .main-info {
        grid-area: main-one;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
      }

      #contactform {
        display: block;
      }

      #contactform p {
        font-weight: 500;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
      }

      #contactform .input-name,
      #contactform .input-email {
        font-family: inherit;
        width: 100%;
        height: 2rem;
        border-radius: 0.5rem;
        border-color: #f96332;
        padding: 0.5rem;
        font-size: 1rem;
      }

      #contactform textarea {
        font-family: inherit;
        width: 100%;
        border-radius: 0.5rem;
        border-color: #f96332;
        padding: 0.5rem;
        font-size: 1rem;
      }

      #contactform .input-button {
        margin-top: 1rem;
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

      #contactform .input-button:hover {
        background-color: #fa865f;
      }
    `}</style>
  </div>
);

export default contacto;
