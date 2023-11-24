import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// Crear instancia de Socket.io para la conexión con el servidor
const socket = io('http://localhost:4000');

export function BotonSocket({ porcentaje }) {

// Estados para acumulador de empresas y porcentaje final
  const [acumuladorEmpresas, setAcumuladorEmpresas] = useState(0);
  const [porcentajeFinal, setPorcentajeFinal] = useState(0)

// Efecto para manejar eventos del servidor Socket.io
useEffect(() => {
  // Escucha el evento send data y establece porcentajeFinal con el resultado
    socket.on('send data', function (porcentaje) {
        setPorcentajeFinal(porcentaje);
    });  

    // Escucha el evento all enterprises y establece acumuladorEmpresas con el resultado
    //acumuladorEmpresas tiene la suma de todos los envios(se hizo en el backend)
    socket.on("all enterprises", function(numeroEmpresas){
      setAcumuladorEmpresas(numeroEmpresas);
    })
  },[
    acumuladorEmpresas,
  ]);

  //La primera vez que se renderiza el componente
  //Se emite el evento all enterprises y el evento get percentage que traen los envios y el porcentaje promedio
  useEffect(() => {
    socket.emit('all enterprises');
    socket.emit('get percentage');
  }, [])

  
  //Función para enviar el porcentaje a traves del click
  const handleClick = () => {
    console.log(`Mensaje enviado al servidor: ${porcentaje}%`);
    //Se sumá en uno la cantidad de empresas o envios
    setAcumuladorEmpresas((prevEmpresas) => prevEmpresas + 1);
    //Se envia el porcentaje de cumplimiento que tiene el envio
    socket.emit('send data', (porcentaje)); 
  };

  return (
    <>
      <p>
          Porcentaje Global: {porcentajeFinal ? porcentajeFinal.toFixed(2) : 0}% - Envíos({acumuladorEmpresas})
      </p>
      <button id="enviador" type="button" onClick={handleClick}>
        Enviar
      </button>
    </>
  );
}

BotonSocket.propTypes = {
  porcentaje: PropTypes.number.isRequired,
};
