import { SET_PETS, ADD_PET, REMOVE_PET, EDIT_PET } from "./actionTypes"

export const fetchPets = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/pets")
        .then(r => r.json())
        .then(pets => dispatch({ type: SET_PETS, payload: pets }))
    }
}