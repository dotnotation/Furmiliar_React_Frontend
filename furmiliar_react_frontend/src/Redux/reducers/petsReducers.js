import { SET_PETS, ADD_PET, REMOVE_PET, EDIT_PET } from '../actions/actionTypes'

export default function petsReducers(state = {pets: []}, action){
    switch(action.type) {
        case SET_PETS:
            return action.payload
        
        default:
            return state
    }
}