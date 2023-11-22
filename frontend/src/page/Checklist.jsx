import { useState } from "react";
import { Navbar } from "../components/Navbar.jsx";
import { BotonSocket } from "../components/BotonSocket.jsx";



export default function Checklist() {
  const [valorFinal, setValorFinal] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);


  const [valorSection1, setValorSection1] =  useState(0)
  const [valorSection2, setValorSection2] =  useState(0)
  const [valorSection3, setValorSection3] =  useState(0)

  const handleCheckboxChange = (e) => {

    const elementoOrigen = e.target;
    if (elementoOrigen.checked) {
      setValorFinal((prevValor) => {
        const updatedValor = prevValor + 1;
        setPorcentaje((updatedValor * 100 / 15));
        return updatedValor
      });
      switch(true){
        case elementoOrigen.classList.contains("ig-check"):
          // código si tiene la claseIG
          setValorSection1((prevIG) => prevIG + 1)
        break;
        case elementoOrigen.classList.contains("sg-check"):
          // código si tiene la claseSG
          setValorSection2((prevSG) => prevSG + 1)
        break;
        case elementoOrigen.classList.contains("hg-check"):
          // código si tiene la claseHG
          setValorSection3((prevHG) => prevHG + 1)
        break;
        default:
          // código por defecto si no coincide con ninguna clase
        break;
      }
      
    }else if(!elementoOrigen.checked) {
      setValorFinal((prevValor) => {
        const updatedValor = prevValor - 1;
        setPorcentaje(updatedValor * 100 / 15);
        return updatedValor
      });
      switch(true){
        case elementoOrigen.classList.contains("ig-check"):
          // código si tiene la clase1
          setValorSection1((prevIG) => prevIG - 1)
        break;
        case elementoOrigen.classList.contains("sg-check"):
          // código si tiene la clase2
          setValorSection2((prevSG) => prevSG - 1)
        break;
        case elementoOrigen.classList.contains("hg-check"):
          // código si tiene la clase3
          setValorSection3((prevHG) => prevHG - 1)
        break;
        default:
          // código por defecto si no coincide con ninguna clase
        break;
      }
    }


  }


  return (
    <>
      <Navbar />
      <form>
        {/* ... */}
        <section>
          {/* ... */}
          <div>
            <h3>Instalaciones Generales: {valorSection1}/5</h3>
            <label>
              <input
                type="checkbox"
                className="ig-check"
                value="1"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
            <label>
              <input
                type="checkbox"
                className="ig-check"
                value="2"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
            <label>
              <input
                type="checkbox"
                className="ig-check"
                value="3"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
            <label>
              <input
                type="checkbox"
                className="ig-check"
                value="4"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
            <label>
              <input
                type="checkbox"
                className="ig-check"
                value="5"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
          </div>
          <div>
            <h3>Seguridad: {valorSection2}/5</h3>
            <label>
              <input
                type="checkbox"
                className="sg-check"
                value="1"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
            <label>
              <input
                type="checkbox"
                className="sg-check"
                value="2"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
            <label>
              <input
                type="checkbox"
                className="sg-check"
                value="3"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
            <label>
              <input
                type="checkbox"
                className="sg-check"
                value="4"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
            <label>
              <input
                type="checkbox"
                className="sg-check"
                value="5"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
          </div>
          <div>
            <h3>Higiene: {valorSection3}/5</h3>
            <label>
              <input
                type="checkbox"
                className="hg-check"
                value="1"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
            <label>
              <input
                type="checkbox"
                className="hg-check"
                value="2"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
            <label>
              <input
                type="checkbox"
                className="hg-check"
                value="3"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
            <label>
              <input
                type="checkbox"
                className="hg-check"
                value="4"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
            <label>
              <input
                type="checkbox"
                className="hg-check"
                value="5"
                onChange={handleCheckboxChange}
              />{" "}
              Existen salidas de emergencia claramente señalizadas.
            </label><br />
          </div>
        </section>
      </form>
      <hr style={{ 
        color: "black",
        backgroundColor: "black",
        height: 2,
        width: 20 + "px",
        margin: 20 + "px"
      }}/>
      
      <h2>Se cumplen {valorFinal} de 15 reglas</h2>
      <p>Cumplimiento: {(porcentaje).toFixed(2) + "%"}</p>
      <BotonSocket porcentaje={porcentaje}>
      </BotonSocket>


    </>
  );}
