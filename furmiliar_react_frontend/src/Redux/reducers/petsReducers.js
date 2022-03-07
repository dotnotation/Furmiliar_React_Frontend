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
            console.log("petsReducer", action.payload)
            const newPets = state.pets.filter(pet => pet.id !== action.payload)
            return {
                ...state,
                pets: newPets
            }
            // return {
            //     ...state,
            //     pets: state.pets.filter(pet => pet.id !== action.payload.id)
            // }
            // let newPets = state.pets.filter(pet => pet.id !== action.payload.toString())
            // return { ...state, pets: newPets }

        case EDIT_PET:
            const petIndex = state.pets.findIndex(pet => pet.id === action.payload.id)
            return {
                ...state,
                pets: [
                    ...state.pets.slice(0, petIndex),
                    action.payload,
                    ...state.pets.slice(petIndex + 1)
                ]
            }
        
        default:
            return state
    }
}