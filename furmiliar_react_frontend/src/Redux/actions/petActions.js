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
        .then(r => r.json())
        .then(pet => {
            dispatch({ type: ADD_PET, payload: pet })
            navigate("/pets")
        })
    }
}

export function editPet(pet, navigate){
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
            navigate("/pets")
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
            dispatch({ type: REMOVE_PET, payload: pet })
        })
    }
}