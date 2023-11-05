import React from "react";

export default function Wiki() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="box">
          <div className="box-top">
            <img
              className="box-image"
              src="images/generales.jpg"
              alt="Imagen generales"
            />
            <div className="title-flex">
              <h3 className="box-title">Seguridad Industrial</h3>
              <p className="user-follow-info">Generales</p>
            </div>
            <p className="description">
              Información indispensable para la seguridad industrial requerida
              en todas las empresas.
            </p>
          </div>
          <a href="/generales" className="button">
            Leer más.
          </a>
        </div>
        <div className="box">
          <div className="box-top">
            <img
              className="box-image"
              src="images/metalurgia.jpg"
              alt="Metalurgia"
            />
            <div className="title-flex">
              <h3 className="box-title">Seguridad en el torno</h3>
              <p className="user-follow-info">Metalurgia</p>
            </div>
            <p className="description">
              Riesgos, medidas, manejos y cuidados generales para trabajar de
              manera segura en el torno.
            </p>
          </div>
          <a href="/metalurgia" className="button">
            Leer más.
          </a>
        </div>
        <div className="box">
          <div className="box-top">
            <img
              className="box-image"
              src="images/carpinteria.jpg"
              alt="Girl Eating Pizza"
            />
            <div className="title-flex">
              <h3 className="box-title">Seguridad con herramientas</h3>
              <p className="user-follow-info">Carpintería</p>
            </div>
            <p className="description">
              Cuidados, recomendaciones, consejos y paso a paso para la
              utilización de las herramientas de forma adecuada.
            </p>
          </div>
          <a href="/carpinteria" className="button">
            Leer más.
          </a>
        </div>
        <div className="box">
          <div className="box-top">
            <img
              className="box-image"
              src="images/electricidad.jpg"
              alt="Girl Eating Pizza"
            />
            <div className="title-flex">
              <h3 className="box-title">Seguridad con Tableros Eléctricos</h3>
              <p className="user-follow-info">Electricidad</p>
            </div>
            <p className="description">
              Riesgos, consejos, instalación y consecuencias de la energía
              eléctrica para un buen manipulamiento de la misma.
            </p>
          </div>
          <a href="/electricidad" className="button">
            Leer más.
          </a>
        </div>
      </div>
    </section>
  );
}
