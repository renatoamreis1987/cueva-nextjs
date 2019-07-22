import React from "react";
import MainNav from "../../components/MainNav";
import MainHeader from "../../components/MainHeader";
import MainFooter from "../../components/MainFooter";

const eventoviisanpintena = () => (
  <div>
    <MainNav />
    <MainHeader />

    <div className="main-info container">
      <h1 className="reglamento-h1">VII San Pinteña</h1>
      <h3 className="reglamento-data">23 de Diciembre de 2018</h3>
      <div className="main-info__eventos-image">
        <a href="/static/cartels/san-pinteña-1.jpg" target="_blank">
          <img
            className="eventos-main__imagem"
            src="/static/cartels/san-pinteña-1.jpg"
          />
        </a>
      </div>
      <h2 className="reglamento-h2">Reglamento</h2>
      <div className="reglamento">
        <h3>
          Artículo 1 (Patrocinio, Colaboración y Organización de la prueba)
        </h3>
        <p>
          En la fecha arriba indicada se celebrara la VII Edición de la carrera
          San Pinteña 2018, contando con la organización del Excelentísimo
          Ayuntamiento de Pinto (Madrid), y la colaboración de diversas firmas
          comerciales.
        </p>
        <br />
        <h3>Artículo 2 (Participantes)</h3>
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
        <p className="event-neg">
          Prueba de 10 y 5 kms. (Cronometrada) – 11 euros.
        </p>
        <p>
          Se realizarán desde el día 1 de Noviembre de 2018 al día 21 de
          Diciembre de 2018 a las 13,30 horas, o hasta agotar los 600 dorsales
          disponibles, en los siguientes puntos de inscripción:{" "}
          <a href="http://www.evedeport.es" target="_blank">
            www.evedeport.es
          </a>{" "}
          y{" "}
          <a href="http://www.carreraspopulares.com" target="_blank">
            www.carreraspopulares.com
          </a>
        </p>
        <p>
          Las inscripciones presenciales en bar Triana y en Decimas centro
          comercial Plaza Éboli.
        </p>
        <br />
        <h3>Artículo 4 (Dorsales Chip y bolsa del corredor)</h3>
        <p>
          Se podrán recoger en el auditorio del parque Juan Carlos sábado dia 22
          de 11,00 h. a 13,30 h. y 16,00 h. a 19,30 h. y el día de la prueba de
          8,30 h hasta media hora antes de la salida. El dorsal tendrá que ir
          colocado durante la competición en el pecho, sin recortar, manipular,
          ni doblar. Todo aquel que participe con el dorsal de otra persona, así
          como aquel que participe con otro dorsal que no sea proporcionado por
          la organización será descalificado.
        </p>

        <p>
          A los primeros 90 primeros inscritos se les regalara unos calcetines.
        </p>
        <br />
        <h3>Artículo 5 (Categorías)</h3>
        <p>Prueba (carrera) de 10 km y de 5 km</p>
        <p>Senior Masc/Fem (de 16 a 39)</p>
        <p>Vet &ndash; A Masc/Fem (de 40 a 49)</p>
        <p>Vet &ndash; B Masc/Fem (de 50 a 59)</p>
        <p>Vet &ndash; C Masc /Fem de 60 en adelante</p>
        <p>
          Recibir&aacute;n trofeo los tres primeros clasificados de cada
          categor&iacute;a en la carrera de 10 km. Recibir&aacute;n trofeo los
          tres primeros locales en la prueba de 10 km. Recibir&aacute;n trofeo
          los tres primeros corredores de la general de 5 km en ambos sexos.
        </p>
        <br />
        <h3>Artículo 6 (Premios, trofeos, regalos y sorteo)</h3>
        <p>
          Trofeo para el club más numeroso. Habrá sorteos, de lo que la
          organización pueda conseguir de los patrocinadores. Una vez acabada la
          carrera habrá un importante sorteo de regalos. Todos los corredores
          tendrán la misma bolsa del corredor.
        </p>
        <br />
        <h3>Artículo 7 (Avituallamiento (10 km)</h3>
        <p>
          Habrá un puesto de avituallamiento aproximadamente en el km 5 y en
          meta.
        </p>
        <br />
        <h3>Artículo 8 (Ropero y duchas)</h3>
        <p>
          Existirá un servicio de duchas gratuito (pista de atletismo Rafael
          Mendoza) y de ropero en la zona Salida / Meta a disposición de los
          participantes.
        </p>
        <br />
        <h3>Artículo 9 (Reclamaciones)</h3>
        <p>
          Todas las situaciones no previstas en este reglamento quedan sujetas a
          las normas del Comité Organizador de la carrera. Las reclamaciones se
          harán por escrito hasta una hora después de finalizar la prueba,
          depositando una fianza de 60 euros que serán devueltos solo en caso de
          resolver el jurado de apelación de la prueba a su favor.
        </p>
        <br />
        <h3>Artículo 10 (Seguro)</h3>
        <p>
          Todos los participantes inscritos están cubiertos por una póliza de
          seguros de responsabilidad civil por daños a terceros, etc. y siempre
          que se produzcan como consecuencia directa del desarrollo de la
          prueba, nunca como derivación de un padecimiento o tara latente,
          imprudencia, negligencia o inobservancia de las leyes y reglamento de
          la prueba. La organización no se hace responsable de los daños o
          accidentes que pudieran causar o causarse los atletas participantes en
          esta competición.{" "}
        </p>
        <br />
        <h3>Artículo 11 (Otros)</h3>
        <p>
          Todos los participantes, por el hecho de realizar la inscripción
          aceptan la publicación de su nombre en la clasificación de la prueba,
          en los medios de comunicación y/o en Internet.{" "}
        </p>
        <p>
          En cumplimiento de la ley orgánica 15/1999, de 13 de diciembre, de
          protección de datos de carácter personal, se informa que los datos de
          carácter personal contenidos en la inscripción realizada, serán
          introducidos en un fichero para su tratamiento por la organización
          (elaboración y publicación de resultados en los diferentes medios
          utilizados por la organización entre otras actuaciones propias de la
          organización de la prueba).
        </p>
        <p>
          Asimismo dan su consentimiento para que la organización por sí mismo o
          mediante terceras entidades, traten informáticamente con finalidad
          exclusivamente deportiva o promocional, su imagen dentro de la prueba
          mediante fotografías, videos, etc. Todos los participantes, por el
          hecho de tomar la salida, aceptan el presente reglamento y en caso de
          duda o surgir alguna situación no reflejada en el mismo, se resolverá
          con arreglo a lo que determine el Comité Organizador de la Prueba.
        </p>
        <br />

        <h3>(Circuito)</h3>
        <div>
          <a href="/static/eventos/circuito-vii-san-pintena.jpg" target="_blank">
            <img className="circuito" src="/static/eventos/circuito-vii-san-pintena.jpg" />
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

export default eventoviisanpintena;
