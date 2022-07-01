import React, { useEffect, useState } from 'react';
import NavigationBar from '../../components/NavigationBar.component/NavigationBar.component';
import Store from '../../components/Store/Store.component';

import './WebStore.view.scss';


export default function WebStore() {      
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
            <Store/>
        </div>
        
    )

}