import { SET_PETS, ADD_PET, REMOVE_PET, EDIT_PET } from '../actions/actionTypes'

export default function petsReducers(state = {pets: []}, action){
    switch(action.type) {
        case SET_PETS:
            return action.payload
        
        case ADD_PET:
            return state

        case REMOVE_PET:
            return state

        case EDIT_PET:
            return state
        
        default:
            return state
    }
}