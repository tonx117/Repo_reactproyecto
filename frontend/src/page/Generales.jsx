import { Footer } from "../components/Footer.jsx";
import { Wikinavbar } from "../components/Wikinavbar.jsx";
import "../public/css/generales.css"
import equipamientoindus from "../public/images/equipamientoindus.png"
import seguindus from "../public/images/seguindus.jpg"

export default function Generales() {
  return (
    <div>
      <Wikinavbar />
      <div className="image-equipamientoindus">
        <img heigh="500px" src={equipamientoindus} alt="equipamiento" />
      </div>
    <div class="row-generales">
      <div>
        <img height="360px" src={seguindus} alt="" class="image-seguindus"/>
      </div>
      <div>
        <h1 class="h1-generales">Conceptos básicos de seguridad industrial</h1>
        <p class="texto-generales">
          Se denomina seguridad industrial al conjunto de normas obligatorias
          establecidas para evitar o minimizar, riesgos que puedan
          efectuarse en los ámbitos industriales y los perjuicios derivados de
          la actividad industrial e incluso las enfermedades ocupacionales. Dado que
          por las maquinarias y las herramientas que se utilizan son áreas propensas
          al peligro, mediante la prevención se busca evitar el daño a las personas,
          a los bienes y reducir el impacto en el medio ambiente. La seguridad
          industrial debe ser cumplida obligatoriamente en todas las empresas.
        </p>
        <p class="texto-generales">
          Las empresas o industrias tienen la responsabilidad de generar condiciones
          de trabajo que garanticen protección y seguridad a sus trabajadores; para
          ello deben implementar una serie de normas y condiciones que reduzcan el
          riesgo de sufrir un accidente laboral.
        </p>
      </div>
    </div>

    <div class="row-generales2">
    <div class="column1-generales1">
    <h2 class="h1-generales">Medidas de seguridad industrial indispensables en toda empresa:</h2>
    <li class="texto-generales">
      Abastecimiento de protección personal: todo trabajador debe ser provisto
      de indumentaria para realizar sus actividades laborales de
      forma segura. Por ejemplo arnés, mascaras, guantes, gafas de seguridad y aquello
      que ayude a disminuir el riesgo de tener accidentes laborales.
    </li>
    <li class="texto-generales">
      Garantizar un área de trabajo segura: un espacio de trabajo mal diseñado
      puede ser un gran peligro para los trabajadores. Es imprescindible que los
      centros de trabajo presenten salidas de emergencia accesibles, zonas de
      paso amplias y libres de obstáculos para evitar embotellamiento, salidas
      debidamente señalizadas, poseer un plan para casos de emergencia y tener
      un sistema contra incendios, contar con buena iluminación y buen espacio en el area.
    </li>
    <li class="texto-generales">
      Brindar capacitación: es importante que los trabajadores reciban una
      formación adecuada, para desempeñar su labor de forma segura y competente; así
      mismo, deben ser capacitados para utilizar los elementos de seguridad de
      forma correcta.
    </li>
    </div>
    
    <div class="column2-generales">
    <p class="texto-generales">
      Al invertir en seguridad industrial y reducir los riesgos laborales, las
      empresas disminuyen los costos de operación y obtienen mas ganancias, al
      mismo tiempo que protegen a sus empleados, maquinarias y recursos, dado
      que:
    </p>
    <li class="texto-generales">
      Al no presentarse accidentes se reduce considerablemente el absentismo.
    </li>
    <li class="texto-generales">
      La jornada laboral no se ve interrumpida por accidentes o imprevistos.
    </li>
    <li class="texto-generales">
      Se crea un mejor ambiente laboral donde los trabajadores realizan sus
      tareas más a gusto, mejorando la productividad y competitividad.
    </li>
    <li class="texto-generales">
      Se reducen los costos que generan los daños a los equipos, edificios y se
      evitan los pagos de indemnización.
    </li>
    <p class="texto-generales">
      Aplicando las normas de seguridad industrial, a la vez que se protege la
      vida e integridad del trabajador, se obtienen grandes ahorros financieros.
    </p>
    </div>
    </div>
      <Footer />
    </div>
  );
}
