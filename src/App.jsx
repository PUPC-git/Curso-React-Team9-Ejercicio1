import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

import './App.css';
//import { login } from './redux/actions/actions';

//import Mensajes from './views/Mensajes/Mensajes.view';
import Vista from './views/Vista.view';
import RegisterLogin from './components/RegisterLogin/RegisterLogin.component';
import { useEffect } from 'react';
//import WebLogin from './views/loggin/WebLogin.view';
import Store from './components/Store/Store.component';
import VistaStore from './views/VistaStore.view';

function App() {
  //const dispatch = useDispatch();
  //const login = useSelector(state => rootReducer.login);
  //let log = () => { dispatch(login()); }
  //console.log(log);
  //console.log(login);

  
  //console.log(reducer);
  let logged = localStorage.getItem('logged');

  useEffect(() => {
    logged = localStorage.getItem('logged');
    //logged = localStorage.getItem('credential');
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Vista/>}>
              {
                logged ?
                <Route exact path="/main" element={<Vista/>}/>
                : 
                <Route path='/main' element={<Navigate to='/login'/>}/>
              }
            </Route>
            <Route path='/login' element={<RegisterLogin/>}/>
            <Route path='/store' element={<VistaStore/>}>
              {
                logged ?
                <Route exact path="/store" element={<VistaStore/>}/>
                : 
                <Route path='/' element={<Navigate to='/login'/>}/>
              }
            </Route>
            <Route path='/register' element={<RegisterLogin/>}/>
             
            
            
          </Routes>
        
        </BrowserRouter>
        
        
        
        
      </div>
    </div>
  );
}

export default App;
