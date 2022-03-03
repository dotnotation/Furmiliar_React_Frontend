import { SET_PETS } from "../actions/actionTypes"

export default function petsReducers(state = {pets: [], toys: [], loading: false}, action){
    switch(action.type) {
        case SET_PETS:
            return action.payload
        
        default:
            return state
    }
}