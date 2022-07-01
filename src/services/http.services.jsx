import React, { useState, useEffect } from 'react';
import _axios from "axios";
import { of } from 'rxjs';

	
// Creamos un observable que emite dos valores distintos
const observable = of("Hola ", "mundo!");

let BASE_URL = "https://fakestoreapi.com";

	
// Creamos un observador con las funciones para manejar el estado
	
const observer = {
    next: x => console.log(x),
    error: err => console.error('¡Error! ', err),
    complete: () => console.log('Fin de la traza'),  
}; 
    
// Ejecutamos la suscripción con el observer
    
observable.subscribe(observer);

	
export default function Users() {
    const [todolist, setTodolist] = useState([]);
    useEffect(() => {
        observable.create(subscriber => {
        axios.get(URL)
        .then(res => {
            subscriber.next(res.data);
            subscriber.complete();
        })
        .catch(error => {
            subscriber.error(error)
        });
        })
        .subscribe(
        data => setTodolist(data),
        error => console.error("¡Hay un problema con la petición!", error),
        () => console.log("¡Suscripción completada!")
        );
    }, []);

    useEffect(() => {
        _axios.get(URL)
          .subscribe(
          response => setTodolist(response.data),
          error => console.error("¡Hay un problema con la petición!", error),
          () => console.log("¡Suscripción completada!")
        );
    }, [])
}

/*
observable.subscribe(
  x => console.log(x), // Llamada a next()
  err => console.error('¡Error! ', err), // Llamada a error()
  () => console.log('Fin de la traza') // Llamada a complete()
);
*/



////////////////////////////////////////////////////

const axios = _axios.create({
  baseURL: "https://fakestoreapi.com",
  responseType: "json"
});

// BASE_URL, AUTH_TOKEN y CONTENT_TYPE son variables
// que contendrán el contenido correspondiente.
//*axios.defaults.baseURL = BASE_URL;
//*axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//*axios.defaults.headers.post['Content-Type'] = CONTENT_TYPE;

// Incluimos un interceptor para las peticiones
axios.interceptors.request.use(config => {
    console.log(
      "He lanzado una petición con la siguiente configuración: ",
      config
    );
      
    return config;
  }, error => {
    return Promise.reject(error);
});

// Incluimos un interceptor para las respuestas
axios.interceptors.response.use(response => {
    console.log(
      "He lanzado una petición con la siguiente configuración: ",
      response
    );
  
    const status = response.status;
    if(status < 200 || status >= 300) {
      return Promise.reject(`Response status: ${status}`);
    } else {
      return response;
    }  
  }, error => {
    return Promise.reject(error);
});

// Utilizando axios
const GET_AXIOS = (url) => {
    return axios.get(url)
      .then(response => response.data);
}

const POST_AXIOS = (url, data) => {
    return axios.post(url, data)
      .then(response => response.data);
}

const PUT_AXIOS = (url, data) => {
    return axios.put(url, data)
      .then(response => response.data);
}

const DELETE_AXIOS = (url) => {
    return axios.delete(url)
      .then(response => `${response.status} ${response.statusText}`);
}

////////////////////////////////////////////////////

//USANDO FETCH
/** Devolveremos una Promesa con los
 * datos en formato JSON a solicitar */
 const GET = async (url) => {
 // console.log(BASE_URL + url);
    return await fetch(BASE_URL + url).then(response => response.json());
}
	
const POST = (url, data) => {	
    return fetch(url, {	
        method: 'POST',	
        body: data	
    }).then(response => response.json());	
}

const PUT = (url, data) => {
    return fetch(url, {
        method: 'PUT',
        body: data
    }).then(response => response.json());
}
/*
PUT('https://jsonplaceholder.typicode.com/posts/1', {	
  id: 1, userID: 1, title: 'Post número 1', body: 'Post nuevo'	
})
*/

const DELETE = (url) => {
    return fetch(url, {
        method: 'DELETE',
    }).then(response => `${response.status} ${response.statusText}`);
}
//DELETE('https://jsonplaceholder.typicode.com/users/1')


export { GET, POST, PUT, DELETE, GET_AXIOS, POST_AXIOS, PUT_AXIOS, DELETE_AXIOS }