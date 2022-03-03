export default function petsReducers(state = {pets: [], toys: [], loading: false}, action){
    switch(action.type) {
        case "SET_PETS":
            return state
        default:
            return state

    }
}