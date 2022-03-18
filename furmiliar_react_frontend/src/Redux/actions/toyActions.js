import { SET_TOYS, ADD_TOY, REMOVE_TOY, EDIT_TOY } from './actionTypes'

export function fetchToys(){
    return dispatch => {
        fetch("http://localhost:3000/toys")
        .then(r => r.json())
        .then(toys => dispatch({ type: SET_TOYS, payload: toys }))
    }
}

export function adoptToy(toy){
    return dispatch => {
        fetch("http://localhost:3000/toys", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(toy)
        })
        .then(r => r.json())
        .then(toy => {
            dispatch({ type: ADD_TOY, payload: toy })
        })
    }
}

export function editToy(toy, navigate){
    return dispatch => {
        fetch(`http://localhost:3000/toys/${toy.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(toy)
        })
        .then(r => r.json())
        .then(toy => {
            dispatch({ type: EDIT_TOY, payload: toy })
            navigate(-1)
        })
    }
}

export function deleteToy(id){
    return dispatch => {
        fetch(`http://localhost:3000/toys/${id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(toy => {
            dispatch({ type: REMOVE_TOY, payload: toy })
        })
    }
}