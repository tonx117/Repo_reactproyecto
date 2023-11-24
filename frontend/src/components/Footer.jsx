import "../public/css/footer.css"
export const Footer = () => {
  return (
    <footer>
    <div className="container-footer">
      <div className="contactos-importantes"> 
        <h4>Contacto</h4>
        <p>Super intendencia de Riesgos en el Trabajo: </p>
        <p>(0-800-666-6778)</p>
      </div>
      <div className="contactos-importantes2">
        <ul>
          <p>Aseguradoras de Riesgo del Trabajo:</p>
          <li>Centro de Atención al Cliente 0800-333-1278 - Lunes a Viernes de 8 a 20.</li>
          <li>Coordinación de Emergencias Médicas: 0800-333-1333</li>
        </ul>
      </div>
      </div>
    </footer>
  );
};
