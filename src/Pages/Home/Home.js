import React from "react";
import { Container, Media } from "react-bootstrap";
import Section from "./HomeSection";
import PopTooltip from "../../Utilities/Popover";

import "./Home.css";

const Home = () => {
  return (
    <Container id="globalIdContainer">
      <div id="idHeader">
        <Media className="mt-4">
          <img
            src="https://i.imgur.com/ZCnbsNu.jpg"
            id="profileImage"
            alt="My profile"
          ></img>
          <Media.Body className="my-auto">
            <h2 className="">Idel Uriel Radzyminski Diaz</h2>
            <div id="idInfo">
              <a href="mailto:urielradzyminski@gmail.com">
                urielradzyminski@gmail.com
              </a>
              <br />
              <a href="tel:+598 92 771 007">+598 92 771 007</a>
              <br />
              <a href="https://www.linkedin.com/in/uriel-radzyminski-7690a418a/">
                LinkedIn
              </a>
              <br />
            </div>
          </Media.Body>
        </Media>
      </div>
      <div id="mainInfo">
        <Section title="Perfil">
          <p>
            Estudiante de computación buscando una oportunidad para mejorar sus
            habilidades de programación aprendiendo nuevas tecnologías y por
            medio de experiencia práctica
          </p>
        </Section>
        <Section title="Proyectos personales">
          <h5>Líder Juvenil | 2016 – Presente</h5>
          <p>
            Desde el 2016 tomo parte en un movimiento juvenil dentro de mi
            comunidad, planeando y desarrollando actividades con jóvenes de
            edades de 3 a 14 años. Esta experiencia me dio, y sigue dando,
            habilidades de liderazgo, comunicación, y trabajo en equipo que
            logro aplicar en el día a día.
          </p>
          <h5>Año sabático | 2018</h5>
          <p>
            Tome un año sabático en Israel luego de finalizados mis estudios de
            bachillerato. En este, accedí a diferentes cursos sobre liderazgo y
            comunicación para desarrollar aún más estas habilidades y así
            aplicarlas tanto en mi movimiento juvenil como en mi vida diaria.
            También esta oportunidad la utilizé para mejora mi dominio del
            idioma Hebreo.
          </p>
        </Section>
        <Section title="Educación">
          <h5>Bachillerato Internacional – Escuela Integral</h5>
          <p>2016 – 2017</p>
          <PopTooltip
            title="Actualmente 4to semestre"
            content="Para mas informacion (escolaridad), contactar por mail"
            placement="bottom"
          >
            <h5 style={{ textDecoration: "underline dashed" }}>
              Ingeniería en computación – Facultad de Ingeniería (UDELAR)
            </h5>
          </PopTooltip>
          <p>2019 – Presente</p>
        </Section>
        <Section title="Dominio de lenguas">
          <ul>
            <li>Español - Nativo</li>
            <li>Ingles - Excelente </li>
            <li>Hebreo – Bueno</li>
            <li>Alemán - Básico </li>
            <li>Portugués – Básico</li>
          </ul>
        </Section>
        <Section title="Habilidades">
          <ul>
            <li>Estructuras de datos y análisis de algoritmos.</li>
            <li>Introduccion a programacion orientada a objetos.</li>
            <li>
              <PopTooltip
                title="Frontend"
                content="React, enfocado a aplicaciones de una página, utilizando react-router para similar aplicaciones de varias páginas"
                placement="bottom"
              >
                <p
                  className="m-0"
                  style={{ textDecoration: "underline dashed" }}
                >
                  Bases de diseño web
                </p>
              </PopTooltip>
            </li>
            <li>Disponibilidad para aprender nuevas tecnologías</li>
          </ul>
        </Section>
        <Section title="Certificaciones y logros">
          <ul>
            <li>Examen de Cambridge – Proficency (C2 CEFR)</li>
            <li>Bachillerato Internacional (37)</li>
            <li>Curso de liderazgo Nativ</li>
            <li>
              Representación de Uruguay en la “Olimpíada de Matemática de Países
              del Cono sur”
            </li>
          </ul>
        </Section>
      </div>
    </Container>
  );
};

export default Home;
