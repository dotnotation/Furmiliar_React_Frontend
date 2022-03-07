import { SET_PETS, ADD_PET, REMOVE_PET, EDIT_PET } from '../actions/actionTypes'

const initialState = {
    pets: [],
    loading: false
}

export default function petsReducers(state = initialState, action){
    switch(action.type) {
        case SET_PETS:
            return {
                ...state,
                pets: action.payload
            }
        
        case ADD_PET:
            return {
                ...state, 
                pets: [...state.pets, action.payload]
            }

        case REMOVE_PET: 
            return state

        case EDIT_PET:
            return state
        
        default:
            return state
    }
}