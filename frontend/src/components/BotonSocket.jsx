import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// La URL debe ser la del servidor Socket.IO
const socket = io('http://localhost:5173');

export function BotonSocket({ porcentaje }) {
    const [acumuladorPorcentaje, setAcumuladorPorcentaje] = useState(0)
    const [acumuladorEmpresas, setAcumuladorEmpresas] = useState(0);
    const [porcentajeFinal, setPorcentajeFinal] = useState()

    // Escuchamos el evento "mensaje" y lo manejamos con una función callback
    socket.on('mensaje', (data) => {
        console.log('Mensaje del servidor:', data);
    });

useEffect(()=>{
    setPorcentajeFinal(acumuladorPorcentaje/acumuladorEmpresas);
    socket.emit('enviar', porcentajeFinal);

},[acumuladorEmpresas, acumuladorPorcentaje, porcentajeFinal])


    const handleClick = () => {
        console.log(`Mensaje enviado al servidor:  ${porcentaje}%`);
        setAcumuladorPorcentaje((prevPorcentaje) => {
            const updatedPorcentaje = prevPorcentaje + porcentaje;
            console.log("updatedporcentaje: ",updatedPorcentaje)
            return updatedPorcentaje
        });
        setAcumuladorEmpresas((prevEmpresas) =>{
            const updatedEmpresas = prevEmpresas + 1
            console.log("empresas: ",updatedEmpresas)
            return updatedEmpresas
        })
    };



    return(
    <>
        <p>Porcentaje promedio global: {porcentajeFinal ? (porcentajeFinal).toFixed(2) : 0}% - Envios({acumuladorEmpresas})</p>
        <button id="enviador" type="button" onClick={handleClick}>Enviar</button> 
    </>
    )
}
BotonSocket.propTypes = {
    porcentaje: PropTypes.number.isRequired,
};
