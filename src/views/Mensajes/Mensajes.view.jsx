/* Mensajes.view.jsx */
import React, { useState } from 'react';
import './Mensajes.view.scss';
import MensajesHeader from '../../components/MensajesHeader/MensajesHeader.component';
import MensajesTable from '../../components/MensajesTable/MensajesTable.component';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { borrarMensaje, leerMensaje, vaciarMensajes } from '../../redux/actions/actions';

export default function Mensajes({asunto, email, mensaje}) {
    console.log(`mensaje... ${asunto}`);
    const mensajes = useSelector(state => state);  // El estado inicial será '[]'
    const dispatch = useDispatch();
    //const [mensajes, setMensajes] = useState([]);

   /* let crear = ({asunto, email, mensaje}) => {
        console.log("creamos mensaje");
        console.log(`asunto ${asunto}`)
        let nuevo = {
            "asunto": asunto,
            "email": email,
            "mensaje": mensaje,
            "leido": false
        };
        dispatch(crearMensaje(nuevo));
    }*/
    let vaciar = () => { dispatch(vaciarMensajes()); }
    let eliminar = (index) => { dispatch(borrarMensaje(index)); }
    let leer = (index) => { dispatch(leerMensaje(index)) }

    return (
        <div className="Mensajes">
            <MensajesHeader //clickNuevo={crear} 
                 clickEliminar={vaciar}></MensajesHeader>
    
            <MensajesTable mensajes={mensajes} clickEliminarUno={eliminar}
            clickMarcarLeido={leer}></MensajesTable>
        </div>
    );
}