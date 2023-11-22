import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const socket = io('http://localhost:4000');


export function BotonSocket({ porcentaje }) {
  const [acumuladorEmpresas, setAcumuladorEmpresas] = useState(0);
  const [porcentajeFinal, setPorcentajeFinal] = useState(0)


useEffect(() => {
    // Envia el porcentajeFinal actualizado
    socket.on('chat message', function (porcentaje) {
        setPorcentajeFinal(porcentaje);
    });  

    socket.on("all enterprises", function(numeroEmpresas){
      setAcumuladorEmpresas(numeroEmpresas);
    })
  },[
    acumuladorEmpresas,
  ]);

  useEffect(() => {
    socket.emit('all enterprises');
    socket.emit('get percentage');
  }, [])
  
  const handleClick = () => {
    console.log(`Mensaje enviado al servidor: ${porcentaje}%`);
    setAcumuladorEmpresas((prevEmpresas) => prevEmpresas + 1);
    socket.emit('chat message', (porcentaje)); 
  };

  return (
    <>
      <ul id="messages">

      </ul>
      <p id="procentajeGlobal">
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
