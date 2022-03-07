import { SET_TOYS, EDIT_TOY, REMOVE_TOY, ADD_TOY } from '../actions/actionTypes'

const initialState = {
    pets: [],
    toys: [],
    loading: false
}

export default function toysReducers(state = initialState, action){
    switch(action.type) {
        case SET_TOYS:
            return state

        case EDIT_TOY:
            return state

        case REMOVE_TOY:
            return state

        case ADD_TOY:
            return state

        default:
            return state
    }
}