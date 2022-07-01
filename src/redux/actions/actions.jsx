export const ACTIONS_MENSAJES = {
    VACIAR: "VACIAR_MENSAJES",
    BORRAR: "BORRAR_MENSAJES",
    CREAR: "CREAR_MENSAJES",
    LEER: "LEER_MENSAJES"
}
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const PRODUCTS_ACTIONS = {
    SET_PRODUCTS: 'SET_PRODUCTS',
    DELETE_PRODUCTS: 'DELETE_PRODUCTS',
    LOAD_PRODUCTS: 'LOAD_PRODUCTS'
}

/* Acción para modificar una lista de productos */
export const setProducts = (products) => {
    return {
      type: PRODUCTS_ACTIONS.SET_PRODUCTS,
      payload: products
    }
}

export const loadProducts = () => {
    return {
        type: PRODUCTS_ACTIONS.LOAD_PRODUCTS
    }
}

export const login = (value) => {
    console.log(`pulsamos login ${value}`);
    return {
        type: value ? 'LOGIN' : 'LOGOUT',
        payload: value
    }
}

export const cambioStyle = (value) => {
    console.log(`pulsamos cambio de estilo ${value}`);
    return {
        type: 'CHANGE_STYLE',
        payload: value
    }
}

export const borrarMensaje = (index) => {
    console.log(`borramos el mensaje ${index}`);
    return {
      type: ACTIONS_MENSAJES.BORRAR,
      payload: index
    }
}

export const vaciarMensajes = () => {
    console.log("vaciamos todos los mensajes");
    return {
        type: ACTIONS_MENSAJES.VACIAR,
    }	
}

export const crearMensaje = (msg) => {
    console.log("creamos un mensaje");
    console.log(`valores recibidos:`);
    console.log(msg);
    console.log("FIN crearMensaje");
  
    return {
      type: ACTIONS_MENSAJES.CREAR,
      payload: msg
    }	
}
  
export const leerMensaje = (index) => {
    console.log(`marcamos el mensaje ${index} como leido`);
    return {
        type: ACTIONS_MENSAJES.LEER,
        payload: index
    }
}

const initialState = {
    mensajes: []
};

export const mensajes = (state = [], action) => {
    console.log(state);
    switch(action.type) {
      case 'BORRAR_MENSAJES':
        state.splice(action.payload, 1);
        return [...state];
      case 'VACIAR_MENSAJES':
        return [];
      case 'CREAR_MENSAJES':
        console.log(state);
        state.push(action.payload);
        return [...state];
      case 'LEER_MENSAJES':
        console.log(action.payload);
        console.log(state);
        state[action.payload].leido = !state[action.payload].leido;
        return [...state];
      /*case 'LOGIN':
        console.log("entrada");
        console.log(state);
        return [{loggedIn: !action.payload}];
      case 'LOGOUT':
        console.log("salida");
        console.log(state);
        return [{ loggedIn: !action.payload}];*/
      default:	
        return [...state];
    }	
}

let nexTodoId = 0;

/**
 * 
 * @param {string} text 
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nexTodoId ++,
            text
        }
    }
}

/**
 * 
 * @param {string} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}