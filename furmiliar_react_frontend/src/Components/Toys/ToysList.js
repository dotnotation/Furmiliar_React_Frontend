import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchToys } from '../../Redux/actions/toyActions'
import ToyCard from './ToyCard'
import ToyForm from './ToyForm'
import { useLocation } from 'react-router-dom'

export default function ToysList() {
    const toys = useSelector(state => state.toysReduce.toys)
    const dispatch = useDispatch()
    const location = useLocation()
    const petId = location.state.pet_id
    const petName = location.state.name
    // console.log("props from navigate", props.id)

    useEffect(() => {
        dispatch(fetchToys())
    }, [])

    useEffect(() => {
      const pet = location.state
    }, [location])
    console.log(petId)
    console.log(petName)

  return (
    <div className='toys-list'>
      <div className='toy-box-message'>
        <h2>{petName}'s Toy Box</h2>
      </div>
    {console.log(toys)}
    {<ToyForm />}
    {toys.map(t => <ToyCard key={t.id} {...t}/>)}
  </div>
  )
}
