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
                ¿Las salidas de emergencia están claramente señalizadas y
                despejadas?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="2"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Los extintores están presentes en las ubicaciones designadas y
                están llenos?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="3"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Existe un plan de evacuación claramente definido y conocido por
                todo el personal y estudiantes?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="4"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Se realizan inspecciones regulares en busca de posibles fugas
                de gas u otros riesgos químicos?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="5"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Se implementan controles de acceso para garantizar que solo
                personas autorizadas ingresen a áreas restringidas?
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
                ¿La señalización de seguridad, como salidas de emergencia y
                rutas de evacuación, está claramente visible y actualizada?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="2"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Las áreas exteriores, como estacionamientos, están bien
                iluminadas y seguras?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="3"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Existen medidas de seguridad adicionales para proteger equipos
                y materiales valiosos en la institución?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="4"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Se lleva a cabo una inspección de los sistemas de fontanería
                para prevenir riesgos de inundación?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="5"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Los procedimientos de primeros auxilios están claramente
                establecidos y comunicados?
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
                ¿Se realizan inspecciones regulares de los sistemas de
                ascensores y escaleras mecánicas?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="2"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿El personal de seguridad realiza patrullas regulares para
                identificar posibles riesgos?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="3"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Existe un protocolo para la gestión de situaciones de acoso o
                bullying?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="4"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Se llevan a cabo inspecciones regulares de los sistemas de
                fontanería y drenaje?
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="5"
                  onChange={handleCheckboxChange}
                />{" "}
                ¿Se realiza una verificación regular de los sistemas de control
                de acceso, como tarjetas magnéticas?
              </label>
              <br />
            </div>
          </section>
        </form>
        <div id="botoncheck">
          <input type="button" value="Imprimir" id="imprimirBtn" />
          <form action="http://localhost:4000/api/" method="POST" encType="multipart/form-data" id="enviogoogle">
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
