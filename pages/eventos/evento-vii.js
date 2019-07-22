import React from "react";
import MainNav from "../../components/MainNav";
import MainHeader from "../../components/MainHeader";
import MainFooter from "../../components/MainFooter";

const eventovii = () => (
  <div>
    <MainNav />
    <MainHeader />

    <div className="main-info container">
      <h1 className="reglamento-h1">
        VII carrera nocturna por el centro peninsular
      </h1>
      <h3 className="reglamento-data">3 de Agosto de 2019</h3>
      <div className="main-info__eventos-image">
        <a href="/static/cartels/cartel-vii.jpeg" target="_blank">
          <img
            className="eventos-main__imagem"
            src="/static/cartels/cartel-vii.jpeg"
          />
        </a>
      </div>
      <h2 className="reglamento-h2">Reglamento</h2>
      <div className="reglamento">
        <h3>Artículo 1 (Día, lugar y hora)</h3>
        <p>
          El sábado 3 de Agosto de 2019 a partir de las 20:00h (Niños) 21:20h
          (Adultos) se celebrara la VII Edición de la carrera nocturna de Pinto,
          que contará con las distancias de 5 y 10 km
        </p>
        <p>
          El recorrido con salida y meta junto a C/ Egido de la Fuente, se
          llevara a cabo por las calles de la localidad.
        </p>
        <p>
          También se celebraran conjuntamente otras pruebas, para categorías
          menores, destinadas a la promoción del atletismo en el municipio de
          Pinto (Madrid).
        </p>
        <p>
          Dicho evento deportivo cuenta con la colaboración del Ayuntamiento de
          Pinto, la organización de Asociación “Cueva de Kun y Hebles” de Pinto
          y el cronometraje y asesoramiento de Evedeport.
        </p>
        <br />
        <h3>Artículo 2 (Participación)</h3>
        <p>
          Podrán tomar parte en la prueba todas aquellas personas que lo deseen,
          estén federadas o no, siempre que estén inscritas tanto en tiempo como
          en las formas establecidas para ello por la organización de la prueba.
          Todo aquel participante por el hecho de tomar parte en dicha
          competición, da lugar a la aceptación de dicho reglamento y declara
          estar en buenas condiciones físicas para un normal desarrollo de la
          prueba.
        </p>
        <br />
        <h3>Artículo 3 (Inscripciones)</h3>
        <p className="event-neg">Precio: 11 euros.</p>
        <p className="event-neg">Para las dos distancias</p>
        <p>
          Se realizaran desde el día 28 de Mayo de 2018 al día 30 de Julio ó
          hasta agotar los 500 dorsales, en los siguientes puntos de
          inscripción:
        </p>
        <p>
          Deportes Decimas (Centro comercial Éboli) en Pinto; Cafetería Triana
          (Sevilla nº 5) en Pinto; y por Internet en:{" "}
          <a href="http://www.evedeport.es" target="_blank">
            www.evedeport.es
          </a>{" "}
          <a href="http://www.carreraspopulares.com" target="_blank">
            www.carreraspopulares.com
          </a>{" "}
        </p>
        <p>
          Las inscripciones menores son gratuitas en puntos presenciales y con
          un coste de 1€ online.
        </p>
        <p>
          El día de la prueba, solamente se admitirán inscripciones en la
          secretaria de la prueba, si no se hubiera alcanzado el límite de
          inscripción, previo pago de 15 euros en la carrera de 10 Km.
        </p>
        <br />
        <h3>Artículo 4 (Recogida bolsa del corredor y dorsales)</h3>
        <p>Los dorsales chip y la bolsa del corredor , se podrán recoger:</p>
        <p>En el polideportivo Alberto Contador .</p>
        <p>Viernes dia 2 de 11:00 a 13:30 h Y de 16:00h a 20:00h</p>
        <p>Sabado dia 3 de 11:00 a 14:00h</p>
        <p>
          Y en la zona de salida / meta presentando el justificante de
          inscripción o de pago de la persona inscrita, desde las 18.00 horas
          hasta 30´ minutos antes de la salida de la carrera.
        </p>
        <p>
          Se descalificara a todo participante que, no lleve el dorsal colocado
          durante la competición en el pecho, sin recortar, manipular, ni
          doblar. Todo aquel que participe con el dorsal de otra persona, así
          como aquel que participe con otro dorsal que no sea proporcionado por
          la organización.
        </p>
        <p>
          Se entregará un chip de zapatilla que debe ser colocado sin ser
          aplastado y siguiendo indicaciones de la organización.
        </p>
        <br />
        <h3>Artículo 5 (Avituallamiento)</h3>
        <p>
          Al paso por meta en el primera vuelta km 5 los corredores podrán
          disponer de avituallamiento al igual que en el momento de entrar en
          meta km 10 km
        </p>
        <br />
        <h3>Artículo 6 (Ropero)</h3>
        <p>
          Existirá un servicio de ropero gratuito y duchas en el polideportivo
          Alberto Contador. Calle Isabel la Católica
        </p>
        <br />
        <h3>Artículo 7 (Seguro)</h3>
        <p>
          Todos los participantes inscritos están cubiertos por una póliza de
          seguros de responsabilidad civil por daños a terceros, etc., y siempre
          que se produzcan como consecuencia directa del desarrollo de la
          prueba, nunca como derivación de un padecimiento o tara latente,
          imprudencia, negligencia o inobservancia de las leyes y reglamento de
          la prueba. La organización no se hace responsable de los daños o
          accidentes que pudieran causar o causarse los atletas participantes en
          esta competición.
        </p>
        <br />
        <h3>Artículo 8 (Categorías, distancias, horarios)</h3>
        <p>
          Las categorías y distancias a recorrer por los participantes son las
          siguientes.
        </p>
        <p>21:30H SENIOR MASCULINO Y FEMENINO (DE 16 A 34 AÑOS) 10 km</p>
        <p>21:30H VETERANO A MASCULINO Y FEMENINO (DE 35 A 44 AÑOS) 10 km</p>
        <p>21:30H VETERANO B MASCULINO Y FEMENINO (DE 45 a 54 años) 10 km</p>
        <p>21:30H VETERANO C MASCULINO Y FEMENINO (DE 55 EN ADELANTE) 10 km</p>
        <p>
          TAMBIEN SE DISPUTARÁ UNA CATEGORIA LOCAL ACUMULABLE CON LAS
          CATEGORIAS.
        </p>
        <p>CARRERAS MENORES:</p>
        <p>20:00H CADETE MASCULINO Y FEMENINO (14 Y 15 AÑOS) 1,2KM</p>
        <p>20:10H INFANTIL MASCULINO YN FEMENINO (12 Y 13 AÑOS) 1,2KM</p>
        <p>20:20H ALEVIN MASCULINO Y FEMENINO (10 Y 11 AÑOS) 800 MTS.</p>
        <p>20.30H BENJAMIN MASCULINO Y FEMENINO (7-8 Y 9 AÑOS) 600 MTS</p>
        <p>
          20:40H CHUPETIN MASCULINO Y FEMENINO ( DE 2 A 6 AÑOS) 200 MTS (NO
          COMPETITIVA-SE HARÁN GRUPOS)
        </p>
        <br />
        <h3>Artículo 9 (Premios y regalos)</h3>
        <p>
          Todos los corredores se llevarán una camiseta 42k, y demás regalos que
          consiga la organización
        </p>
        <p>
          Recibirán trofeo los tres primeros clasificados de cada categoría en
          la carrera de 10 km
        </p>
        <p>Recibirán trofeo los tres primeros locales en la prueba de 10 km</p>
        <p>
          Recibirán trofeo los tres primeros corredores de la general de 5 km en
          ambos sexos.
        </p>
        <p>
          Recibirán trofeo los tres primeros clasificados desde benjamín a
          cadete en las carreras de menores.
        </p>
        <br />
        <h3>Artículo 10 (Circuito)</h3>
        <div> 
          <a href="/static/eventos/circuito-vii.png" target="_blank">
          <img className="circuito" src="/static/eventos/circuito-vii.png" />
          </a>
        </div>
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

      .reglamento-data {
        transform: translateY(-2rem);
        text-align: center;
    }
    
    .main-info {
      font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
      grid-area: main-one;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      margin-right: auto;
      margin-left: auto;
    }

    .main-info__eventos-image {
        grid-area: event-content-1;
        justify-self: center;
        align-self: center;
      }

      .eventos-main__imagem {
          max-height: 25rem;
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
        width: 8.6rem;
    }
    
    .reglamento-h1 {
        color: #f96332;
        text-align: center;
    }
    
    .event-neg {
        font-weight: 600;
    }

    .circuito {
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-width: 90%;
    }

      `}</style>
  </div>
);

export default eventovii;
