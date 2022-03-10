import { SET_PETS, ADD_PET, REMOVE_PET, EDIT_PET } from './actionTypes'

export function fetchPets(){
    return dispatch => {
        fetch("http://localhost:3000/pets")
        .then(r => r.json())
        .then(pets => dispatch({ type: SET_PETS, payload: pets }))
    }
}

export function adoptPet(pet, navigate){
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
        .then(pet => {
            dispatch({ type: ADD_PET, payload: pet })
            navigate("/pets")
        })
        // this is adding the pet to redux
        // adding the pet to state so the dom updates
        // this pet is coming from the backend, so it isn't the same as the pet in the argument
        // also want upon submission and updating the dom to redirect to /pets
    }
}

export function editPet(pet, editMode){
    return dispatch => {
        fetch(`http://localhost:3000/pets/${pet.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(pet)
        })
        .then(r => r.json())
        .then(pet => {
            dispatch({ type: EDIT_PET, payload: pet })
            editMode = false
        })
    }
}

export function rainbowBridge(id){
    return dispatch => {
        console.log(id)
        fetch(`http://localhost:3000/pets/${id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(pet => {
            console.log("second then", pet)
            dispatch({ type: REMOVE_PET, payload: pet })
        })
        // .catch(err => alert(err))
    }
}