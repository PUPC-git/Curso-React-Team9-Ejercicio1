import React, { useEffect, useState } from 'react';
import { login } from '../redux/actions/actions';
import { useDispatch } from 'react-redux/es/exports';
//import Mensajes from './Mensajes/Mensajes.view';
import { useNavigate } from 'react-router-dom';
import WebStore from './store/WebStore.view';
import VistaLogin from './VistaLogin.view';

export default function VistaStore() {
    const [acceso, setAcceso] = useState(true);
    const navigate = useNavigate();    

    const dispatch = useDispatch();


    let logged = localStorage.getItem('logged');
   
    console.log('Vista');
    console.log(`valor.....: ${logged}`);

    return (
        <div>
           <VistaLogin/>
            <div>
                { acceso ?
                    <WebStore/>
                :
                    <div>No tienes acceso a la web</div>
                }
            </div>
        </div>
    );
}

