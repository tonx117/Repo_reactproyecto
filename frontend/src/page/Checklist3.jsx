import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar.jsx";
import { BotonSocket } from "../components/BotonSocket.jsx";
import { Footer } from "../components/Footer.jsx";
import "../public/css/checklist.css";

export default function Checklist() {
  const [valorFinal, setValorFinal] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  const [valorSection1, setValorSection1] = useState(0);
  const [valorSection2, setValorSection2] = useState(0);
  const [valorSection3, setValorSection3] = useState(0);

  const handleCheckboxChange = (e) => {
    const elementoOrigen = e.target;
    if (elementoOrigen.checked) {
      setValorFinal((prevValor) => {
        const updatedValor = prevValor + 1;
        setPorcentaje((updatedValor * 100) / 15);
        return updatedValor;
      });
      switch (true) {
        case elementoOrigen.classList.contains("ig-check"):
          // código si tiene la claseIG
          setValorSection1((prevIG) => prevIG + 1);
          break;
        case elementoOrigen.classList.contains("sg-check"):
          // código si tiene la claseSG
          setValorSection2((prevSG) => prevSG + 1);
          break;
        case elementoOrigen.classList.contains("hg-check"):
          // código si tiene la claseHG
          setValorSection3((prevHG) => prevHG + 1);
          break;
        default:
          // código por defecto si no coincide con ninguna clase
          break;
      }
    } else if (!elementoOrigen.checked) {
      setValorFinal((prevValor) => {
        const updatedValor = prevValor - 1;
        setPorcentaje((updatedValor * 100) / 15);
        return updatedValor;
      });
      switch (true) {
        case elementoOrigen.classList.contains("ig-check"):
          // código si tiene la clase1
          setValorSection1((prevIG) => prevIG - 1);
          break;
        case elementoOrigen.classList.contains("sg-check"):
          // código si tiene la clase2
          setValorSection2((prevSG) => prevSG - 1);
          break;
        case elementoOrigen.classList.contains("hg-check"):
          // código si tiene la clase3
          setValorSection3((prevHG) => prevHG - 1);
          break;
        default:
          // código por defecto si no coincide con ninguna clase
          break;
      }
    }
  };

  useEffect(() => {
    const imprimirBtn = document.querySelector("#imprimirBtn");

    const handleImprimirClick = () => {
      let botoncheck = document.getElementById("botoncheck");
      botoncheck.style.display = "none";

      const checks = document.querySelectorAll(".mycheck");
      checks.forEach((check) => check.classList.remove("mycheck"));

      window.print();

      botoncheck.style.display = "block";
      checks.forEach((check) => check.classList.add("mycheck"));
    };

    imprimirBtn.addEventListener("click", handleImprimirClick);

    return () => {
      imprimirBtn.removeEventListener("click", handleImprimirClick);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="body">
        <form className="form">
          {/* ... */}
          <section className="section">
            {/* ... */}
            <div>
              <h3 className="h3">Instalaciones Generales: {valorSection1}/5</h3>
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="1"
                  onChange={handleCheckboxChange}
                />{" "}
               ¿Las áreas de trabajo están claramente señalizadas con advertencias de seguridad y rutas de evacuación?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="2"
                  onChange={handleCheckboxChange}
                />{" "}
               ¿Se realizan inspecciones diarias para asegurar que todas las herramientas y equipos estén en buen estado de funcionamiento?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="3"
                  onChange={handleCheckboxChange}
                />{" "}
              ¿Existen controles de acceso para restringir la entrada a áreas peligrosas o en construcción?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="4"
                  onChange={handleCheckboxChange}
                />{" "}
              ¿Las áreas de trabajo cuentan con sistemas de iluminación adecuados para realizar tareas seguras?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="5"
                  onChange={handleCheckboxChange}
                />{" "}
              ¿Se lleva a cabo una inspección regular de los sistemas de andamios para garantizar su estabilidad y seguridad?
              </label>
              <br />
            </div>
            <div>
              <h3 className="h3">Seguridad: {valorSection2}/5</h3>
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="1"
                  onChange={handleCheckboxChange}
                />{" "}
            ¿Existe un programa de orientación y capacitación en seguridad para todos los trabajadores de la construcción?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="2"
                  onChange={handleCheckboxChange}
                />{" "}
             ¿Se implementan medidas de seguridad para prevenir caídas desde alturas, como barandas y redes de seguridad?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="3"
                  onChange={handleCheckboxChange}
                />{" "}
              ¿Existe un plan de respuesta a emergencias que incluya evacuación y primeros auxilios?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="4"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿El personal de construcción utiliza equipo de protección personal (EPP) adecuado para las tareas específicas?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="5"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Se realizan inspecciones periódicas de las instalaciones eléctricas temporales utilizadas en la obra?
              </label>
              <br />
            </div>
            <div>
              <h3 className="h3">Higiene: {valorSection3}/5</h3>
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="1"
                  onChange={handleCheckboxChange}
                />{" "}
              ¿El personal de seguridad realiza revisiones periódicas de los procedimientos de manejo y almacenamiento de materiales?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="2"
                  onChange={handleCheckboxChange}
                />{" "}
               ¿Se implementan medidas para prevenir la exposición a sustancias químicas utilizadas en la construcción?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="3"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Existen procedimientos específicos para la seguridad en la manipulación de materiales pesados y maquinaria?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="4"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Existen medidas para controlar el polvo y la contaminación del aire en la obra?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="5"
                  onChange={handleCheckboxChange}
                />{" "}
               ¿Existen procedimientos para el manejo seguro de herramientas manuales y eléctricas?
              </label>
              <br />
            </div>
          </section>
        </form>
        <div id="botoncheck">
          <input type="button" value="Imprimir" id="imprimirBtn" />
          <form action="http://localhost:4000/api/" method="POST" enctype="multipart/form-data" id="enviogoogle">
            <input type="file" name="PDFfile" accept="application/pdf" />
            <input type="submit" value="Enviar a Google Drive"/>
          </form>
        </div>
        <hr
          style={{
            color: "black",
            backgroundColor: "black",
            height: 2,
            width: 20 + "px",
            margin: 20 + "px",
          }}
        />

        <h2 className="h2">Se cumplen {valorFinal} de 15 reglas</h2>
        <p>Cumplimiento: {porcentaje.toFixed(2) + "%"}</p>
        <BotonSocket porcentaje={porcentaje}></BotonSocket>
      </section>

      <Footer />
    </>
  );
}
