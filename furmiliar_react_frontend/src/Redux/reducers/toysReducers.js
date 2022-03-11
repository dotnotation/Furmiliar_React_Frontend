import { SET_TOYS, EDIT_TOY, REMOVE_TOY, ADD_TOY } from '../actions/actionTypes'

const initialState = {
    toys: []
}

export default function toysReducers(state = initialState, action){
    switch(action.type) {
        case SET_TOYS:
            return {
                ...state,
                toys: action.payload
            }

        case EDIT_TOY:
            const toyIndex = state.toys.findIndex(toy => toy.id === action.payload.id)
            return {
                ...state,
                toys: [
                    ...state.toys.slice(0, toyIndex),
                    action.payload,
                    ...state.toys.slice(toyIndex + 1)
                ]
            }

        case REMOVE_TOY:
            console.log("toysReducer", action.payload)
            const newToys = state.toys.filter(toy => toy.id !== action.payload)
            return {
                ...state,
                toys: newToys
            }

        case ADD_TOY:
            return {
                ...state, 
                toys: [...state.toys, action.payload]
            }

        default:
            return state
    }
}