import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { cambioStyle } from '../../redux/actions/actions';
import './Bootstrap.component.scss';

export default function Bootstrap() {
    const [esDeDia, setDia] = useState(true);
    const dispatch = useDispatch();
  
    let texto = esDeDia ?
      (<div><FontAwesomeIcon icon={faMoon}/></div>) :
      (<div><FontAwesomeIcon icon={faSun}/></div>);
      
    let cambio = () => {
        setDia(!esDeDia);
        localStorage.setItem('cambioStyle', !esDeDia);
        console.log(esDeDia);
        dispatch(cambioStyle(esDeDia));
    }
    return (
      /* Contenido JSX de la página */
      
       <div className="container vh-10 mw-100">
     
         <button className="btn btn-primary" onClick={() => cambio()}>
           {texto}
         </button>
     
     </div>
    );
  }