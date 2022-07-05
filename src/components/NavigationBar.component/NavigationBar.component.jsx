import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bootstrap from '../Bootstrap/Bootstrap.component';

import './NavigationBar.component.scss';


export default function NavigationBar() {
      
    const navigate = useNavigate();
//    const [esDeDia, setEsDeDia] = useState(false);  
          
    let esDeDia = localStorage.getItem("cambioStyle");
/*
    const [esDeDia, setEsDeDia] = useState(() => {
        console.log("entramos al bar");
        console.log(localStorage.getItem("cambioStyle"));
        return localStorage.getItem("cambioStyle");
    })*/

    let navInicio = () => {
        navigate("/main");
    }
    let navStore = () => {
        navigate("/store");
    }
    let navRegister = () => {
        navigate("/register");
    }
    
    return (
        <div  >
            <nav style={{backgroundColor: esDeDia ? "#ffffff" : "#282c34"}}>
                <ul>
                    <li><a href="#" onClick={navInicio}>Inicio</a></li>
                    <li><a href="#" onClick={navStore}>Store</a></li>                    
                    <li><a href="#" onClick={navRegister}>Registro</a></li>
                    <li><Bootstrap/></li>
                </ul>
            </nav>
        </div>
        
    )

}