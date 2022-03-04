import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPets } from '../../Redux/actions/petActions'
import PetCard from './PetCard'

export default function PetsList() {
    const pets = useSelector(state => state.pets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPets())
    }, [])
    // pass in a callback and then a second argument of a dependency array
    // if we are using it as a componentDidMount, the dependency array will be empty
    // in the callback you want to call dispatch and the action creator
    return (
    <div className='pets-list'>
        {console.log(pets)}
        {/* {pets.map(p => {
            return (
            <span className='pet-card' key={p.id}>
                <h2>{p.name}</h2>
                <img className="pet-photo" src={p.photo} alt={p.name}></img>
            </span>)
        })} */}
        {pets.map(p => <PetCard id={p.id} name={p.name} photo={p.photo}/>)}
        {/* {pets.map(p => <li key={p.id}>{p.name}</li>)} */}
    </div>
    )
}
