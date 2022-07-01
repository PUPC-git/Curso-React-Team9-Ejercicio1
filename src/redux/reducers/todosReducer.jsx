import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';
//import { ACTIONS_MENSAJES } from '../actions/actions';
let initialStat = [];

export const todosReducer = (state = initialStat, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    is: action.payload.id,
                    text:action.payload.text,
                    completed: false
                }
            ]
            
        case TOGGLE_TODO:
            return state.map((todo) =>
                (todo.id === action.payload.id)
                ?
                {
                    ...todo,
                    completed: !todo.completed
                }
                :
                todo
            )

        default:
            return state
    }

}