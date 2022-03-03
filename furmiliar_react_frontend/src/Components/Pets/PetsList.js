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
    <div className='pet-cards'>
        <h1>Pets</h1>

        {pets.map(p => 
            <span className='pet-card' key={p.id}>
                <h2>{p.name}</h2>
                <img className="pet-photo" src={p.photo}></img>
            </span>)}
    </div>
    )
}
