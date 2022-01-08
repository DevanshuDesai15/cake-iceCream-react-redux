import { FETCH_USERS_FALIURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

const initialState={
    loading: false,
    users:[],
    errors:''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
            break;
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FALIURE:
            return{
                loading: false,
                users: [],
                error:action.payload
            }
        
        default: return state
        
    }
}

export default reducer 