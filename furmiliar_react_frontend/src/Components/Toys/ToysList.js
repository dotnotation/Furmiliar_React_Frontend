import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchToys } from '../../Redux/actions/toyActions'
import ToyCard from './ToyCard'
import ToyForm from './ToyForm'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ToysList() {
  const toys = useSelector(state => state.toysReduce.toys)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const petId = location.state.pet_id
  const petName = location.state.name

  useEffect(() => {
    dispatch(fetchToys())
  }, [])

  const currentPetToys = toys.filter(t => t.pet_id === petId)

  return (
    <div className='toys-list'>
      <div className='toy-box-message'>
        <h2>{petName}'s Toy Box</h2>
      </div>
    {console.log("currentPetToys", currentPetToys)}
    {<ToyForm pet_id={petId}/>}
    <div className='back-button'>
        <button onClick={() => navigate(-1)}>Back</button>
    </div>
    <div className='toys'>
      {currentPetToys.length === 0 ? <h3>This pet has no toys yet. Please use the form above to add a toy.</h3> : currentPetToys.map(t => <ToyCard key={t.id} {...t}/>)}
    </div>
  </div>
  )
}
