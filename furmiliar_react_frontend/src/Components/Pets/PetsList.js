import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPets } from '../../Redux/actions/petActions'
import PetCard from './PetCard'

export default function PetsList() {
    const pets = useSelector(state => state.petsReduce.pets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPets())
    }, [])

    return (
    <div className='pets-list'>
        {pets.map(p => <PetCard key={p.id} id={p.id} name={p.name} photo={p.photo}/>)}
    </div>
    )
}
