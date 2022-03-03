import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPets } from '../../Redux/actions/petActions'

export default function PetsList() {
    const pets = useSelector(state => state.pets)
    console.log(pets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPets())
    }, [])
    // pass in a callback and then a second argument of a dependency array
    // if we are using it as a componentDidMount, the dependency array will be empty
    // in the callback you want to call dispatch and the action creator
    console.log(pets)
    return (
    <div>
        <h1>Pet's List</h1>
        {/* {pets.map(p => <span key={p.id} className="pet-card">
            {p.name}
        </span>)} */}
        {pets.map(p => <li key={p.id}>{p.name}</li>)}
    </div>
    )
}
