import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bootstrap from '../Bootstrap/Bootstrap.component';

import './NavigationBar.component.scss';


export default function NavigationBar() {
      
    const navigate = useNavigate();
    let esDeDia = localStorage.getItem('cambioStyle');
        
    useEffect(() => {
        esDeDia = localStorage.getItem('cambioStyle');
    }, []);

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
        <div>
            <nav>
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