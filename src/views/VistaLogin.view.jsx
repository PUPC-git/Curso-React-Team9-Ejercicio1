import React, { useEffect, useState } from 'react';
import LoginButton from '../components/LoginButton.component';
import LogoutButton from '../components/LogoutButton.component';
import { login } from '../redux/actions/actions';
import { useDispatch } from 'react-redux/es/exports';
//import Mensajes from './Mensajes/Mensajes.view';
import { useNavigate } from 'react-router-dom';
import RegisterLogin from '../components/RegisterLogin/RegisterLogin.component';

export default function VistaLogin() {
    const [acceso, setAcceso] = useState(true);
    const navigate = useNavigate();    

    const dispatch = useDispatch();

    let accederLogin = () => { 
        dispatch(login(true)); setAcceso(true);
        navigate('/login');
    };
    let accederLogout = () => { 
        dispatch(login(false)); setAcceso(false);
        localStorage.setItem('logged', false);
        localStorage.setItem('credential', null);
        navigate('/');
    }

    let boton;

    let logged = localStorage.getItem('logged');
   
    console.log('Vista');
    console.log(`valor.....: ${logged}`);
    if(acceso) 
       boton = <LogoutButton onClick={accederLogout}/>
    else 
       boton = <LoginButton onClick={accederLogin}/>

    return (
        <div>
            <div style={{color: 'red',backgroundColor: "black", paddingTop: '12px', paddingBottom: '12px', position: 'relative', left: 'auto'}}> 

                { acceso ? 
                    <div>Entra</div>
                :
                    (
                        <div>
                            Sale 
                            { logged ?
                                <div>Sale</div> 
                            :
                               <RegisterLogin/>
                            }
                            <p/>
                        </div>
                    )
                    
                }
                {boton} 
            </div>            
        </div>
    );
}

