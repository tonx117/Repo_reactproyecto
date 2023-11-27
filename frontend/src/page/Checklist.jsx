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
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="2"
                  onChange={handleCheckboxChange}
                />{" "}
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="3"
                  onChange={handleCheckboxChange}
                />{" "}
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="4"
                  onChange={handleCheckboxChange}
                />{" "}
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="ig-check mycheck input"
                  value="5"
                  onChange={handleCheckboxChange}
                />{" "}
                Existen salidas de emergencia claramente señalizadas.
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
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="2"
                  onChange={handleCheckboxChange}
                />{" "}
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="3"
                  onChange={handleCheckboxChange}
                />{" "}
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="4"
                  onChange={handleCheckboxChange}
                />{" "}
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="sg-check mycheck input"
                  value="5"
                  onChange={handleCheckboxChange}
                />{" "}
                Existen salidas de emergencia claramente señalizadas.
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
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="2"
                  onChange={handleCheckboxChange}
                />{" "}
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="3"
                  onChange={handleCheckboxChange}
                />{" "}
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="4"
                  onChange={handleCheckboxChange}
                />{" "}
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
              <label className="label">
                <input
                  type="checkbox"
                  className="hg-check mycheck input"
                  value="5"
                  onChange={handleCheckboxChange}
                />{" "}
                Existen salidas de emergencia claramente señalizadas.
              </label>
              <br />
            </div>
          </section>
          <div id="botoncheck">
            <input type="button" value="Imprimir" id="imprimirBtn" />
          </div>
        </form>
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
