
let initialStat = [];

export const changeStyle = (state = initialStat, action) => {
    switch(action.type) {
        case 'CHANGE_STYLE':
            return [
                ...state,
               {
                    changeStyle: true
               }
            ]

        default:
            return state
    }

}