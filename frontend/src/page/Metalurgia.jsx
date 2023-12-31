import { Wikinavbar } from "../components/Wikinavbar.jsx";
import { Footer } from "../components/Footer.jsx";
import torno from "../public/images/torno.png"
import "../public/css/metalurgia.css"
import seguridadtorno from "../public/images/seguridad-torno.png"

export default function Metalurgia() {
  return (
    <div>
      <Wikinavbar />
      <h1 className="h1-metalurgia">Seguridad en el torno</h1>
      <div className="grid-container-metalurgia">
       <div className="container-img">
        <img height="250px" src={torno} alt="" className="imagen-torno"/>
       </div>
      <div className="container-riesgos">
      <p>
        Los riesgos más comunes asociados al trabajo en el torno son los
        siguientes:
      </p>
      <li>
        Proyección de partículas y fragmentos (virutas, fragmentos de pieza y/o
        herramienta, etc.).
      </li>
      <li>
        Atrapamiento por o entre objetos (carros, plato de garras, pieza,
        engranajes, etc.).
      </li>
      <li>Golpes y cortes por objetos y herramientas.</li>
      <li>Caída de piezas y/o materiales en su manipulación.</li>
      <li>
        Caída de personas al mismo nivel (por resbalones, tropiezos, etc.).
      </li>
      <li>Exposición a sustancias nocivas.</li>
      <li>Emisión de vapores, polvo, gases.</li>
      <li>Exposición a contactos eléctricos.</li>
      <li>Ruido y/o vibraciones.</li>
      </div>

      <div className="container-medidas1">
      <p>
        Una vez detectados los riesgos, se deberán implantar las siguientes
        medidas para trabajar de forma segura en el torno:
      </p>

      <h2>
        En cuanto a la ropa de trabajo, equipos de protección individual, etc.:
      </h2>
      <li>
        Las mangas del buzo o de la bata terminarán en tejido elástico; en su
        defecto, se deberán remangar por encima de los codos.
      </li>
      <li>Usar las gafas de seguridad.</li>
      <li>Usar botas de seguridad con puntera reforzada.</li>
      <li>
        Utilización de gorro para las personas que tengan el pelo largo,
        quedando prohibido el uso de corbatas, bufandas, pulseras, collares,
        anillos, etc.
      </li>
      </div>

      <div className="container-medidas2">
      <h2>En cuanto al manejo del torno:</h2>
      <li>
        NUNCA dejar la llave del plato de garras en el plato después de haber
        apretado una pieza.
      </li>
      <li>
        La palanca de bloqueo de la torreta portaherramientas debe estar bien
        apretada, así como los tornillos que sujetan la herramienta.
      </li>
      <li>
        Todo resguardo de que disponga el torno debe estar colocado y fijado.
      </li>
      <li>
        No manipular directamente la viruta con la mano. Utilizar siempre
        guantes, ganchos, etc.
      </li>
      <li>
        Es muy peligroso limpiar las roscas a mano, sobre todo, cuando se trata
        de interiores de pequeño diámetro.
      </li>
      <li>No frenar el plato con la mano, y mucho menos cogiendo la pieza.</li>
      <li>
        Evitar realizar operaciones manuales como el limado, lijado, etc. con la
        pieza girando.
      </li>
      <li>
        No comprobar la aspereza de las superficies con la mano si la pieza esta
        girando.
      </li>
      <li>Nunca engrasar un mecanismo en movimiento.</li>
      </div>
      </div>
      
      <div className="container-tornoimg">
        <img src={seguridadtorno} alt="" />
      </div>

      <div className="container-cuidados">
      <h2>Cuidados generales:</h2>
      <li>
        El torno debe disponer de una seta de emergencia al alcance inmediato
        del operario y de una pantalla de protección contra impactos tanto en el
        plato de garras como en el delantal.
      </li>
      <li>
        El circuito eléctrico del torno debe estar conectado a tierra, así como
        el cuadro eléctrico al que esté conectado el torno debe disponer de un
        interruptor diferencial.
      </li>
      <li>Parar siempre la máquina antes de tomar medidas.</li>
      <li>
        Mantener el puesto de trabajo limpio, para evitar resbalones con el
        aceite, etc.
      </li>
      <li>No dejar que se acumule demasiada viruta en la bandeja inferior.</li>
      <li>
        Colocar y asegurar las tapas protectoras de la caja de velocidades en su
        posición correcta.
      </li>
      </div>
      <Footer />
    </div>
  );
}
