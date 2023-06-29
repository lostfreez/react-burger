const initialState = { isOpen: false, modalType: null };

function modalReducers (state = initialState,action){
    switch (action.type){
        case 'OPEN_MODAL': 
        return {
            isOpen: true, modalType: action.payload
        }
        case 'CLOSE_MODAL':
            return initialState;
        default:
            return state;
    }
}

export default modalReducers;