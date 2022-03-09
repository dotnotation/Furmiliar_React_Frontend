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
    const pet = location.state.pet_id
    // console.log("props from navigate", props.id)

    useEffect(() => {
        dispatch(fetchToys())
    }, [])

    useEffect(() => {
      const pet = location.state
    }, [location])
    console.log(pet)

  return (
    <div className='toys-list'>
    {console.log(toys)}
    {<ToyForm />}
    {toys.map(t => <ToyCard key={t.id} {...t}/>)}
</div>
  )
}
