import React, { useEffect, useState } from 'react';
import NavigationBar from '../../components/NavigationBar.component/NavigationBar.component';
import Mensajes from '../Mensajes/Mensajes.view';

import './WebLogin.view.scss';


export default function WebLogin() {      
    let logged = localStorage.getItem('credential');

    
    let esDeDia = localStorage.getItem('cambioStyle');
        
    useEffect(() => {
        esDeDia = localStorage.getItem('cambioStyle');

    }, []);
    
    return (
        <div className="bootstrap" style={
            {backgroundColor: esDeDia ? "#ffffff" : "#282c34"}
          }>
            <NavigationBar/>
            <Mensajes/>
        </div>
        
    )

}