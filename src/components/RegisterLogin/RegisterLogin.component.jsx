import React, { useState } from 'react';
import './RegisterLogin.component.scss';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';


export default function RegisterLogin() {

    let initialValues = {usuario: '', password: ''};

    const navigate = useNavigate();

    const validaciones = Yup.object().shape({
        usuario: Yup.string().required('Debe introducir un usuario valido').email('Debe ser un email valido'),
        password: Yup.string().required('Debe la contraseña correcta').min(5,'Debe introducir un minimo de 5 caracteres a la contraseña')
    });

    localStorage.setItem('logged', false);
    let registrarUsuario = (event, {setSubmitting}) => {
        console.log(event.usuario);
        console.log(event.password);
        
        localStorage.setItem('credential', event);
        localStorage.setItem('logged', true);
       
        setSubmitting(false);
        alert('Registrado correctamente');
        navigate('/');
    
        //estamos llamando directamente a crearMensaje del actions.jsx
       
    }
      
    return (
        <div style={{display: "flex",
        justifyContent: "center", alignItems: "center"}} className='registerForm'>

            <Formik validationSchema={validaciones} initialValues={initialValues} onSubmit={registrarUsuario}> 
                {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
                    
                    <form onSubmit={handleSubmit} >
                        <h1> Registro de usuario</h1> <br/>
                        
                        <div style={{width: '300px', alignItems: "center", justifyContent: "right", display: "flex"}} class="input-group mb-3">
                             <span class="input-group-text " id="basic-addon1">Usuario: </span>
                            
                            <input className='usuario' placeholder="Introduce el usuario..." type="text" class="form-control"
                                name="usuario" onChange={handleChange}/> 
                        </div><p/>
                        <div style={{width: '300px', alignItems: "center", justifyContent: "right", display: "flex"}}>
                        <span class="input-group-text md-3" id="basic-addon1">Contraseña:</span>

                             
                             <input className='password' placeholder="Introduce la password" type="text" class="form-control"
                                 name="password" onChange={handleChange}/>
                        </div>
                        <p/>
                            {errors.usuario ? (<div>{errors.usuario}</div>) : null}
                            {errors.password ? (<div>{errors.password}</div>) : null}
                            <p/>
                        <button type="submit" class="btn btn-primary" disabled={isSubmitting}>Registrar</button>
                        <p/>
                    </form>
                )}
            </Formik>
        </div>
        
    )

}