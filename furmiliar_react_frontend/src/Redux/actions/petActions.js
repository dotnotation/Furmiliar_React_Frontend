import { SET_PETS, ADD_PET, REMOVE_PET, EDIT_PET } from './actionTypes'

export function fetchPets(){
    return dispatch => {
        fetch("http://localhost:3000/pets")
        .then(r => r.json())
        .then(pets => dispatch({ type: SET_PETS, payload: pets }))
    }
}

export function adoptPet(pet){
    return dispatch => {
        fetch("http://localhost:3000/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(pet)
        })
        // above is persisting the pet to the backend
        .then(r => r.json())
        .then(pet => dispatch({ type: ADD_PET, payload: pet }))
        // this is adding the pet to redux
        // adding the pet to state so the dom updates
        // this pet is coming from the backend, so it isn't the same as the pet in the argument
    }
}