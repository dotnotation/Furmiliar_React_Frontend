import { SET_TOYS, EDIT_TOY, REMOVE_TOY, ADD_TOY } from '../actions/actionTypes'

export default function toysReducers(state = [], action){
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