
let initialStat = [];

export const loggin = (state = initialStat, action) => {
    switch(action.type) {
        case 'LOGIN':
            return [
                ...state,
               {
                    login: true
               }
            ]
            
        case 'LOGOUT':
            return [
                ...state,
                {
                    login: false
                }
            ]

        default:
            return state
    }

}