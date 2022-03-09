import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchToys } from '../../Redux/actions/toyActions'
import ToyCard from './ToyCard'
import ToyForm from './ToyForm'

export default function ToysList() {
    const toys = useSelector(state => state.toysReduce.toys)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchToys())
    }, [])

  return (
    <div className='toys-list'>
    {console.log(toys)}
    {<ToyForm />}
    {toys.map(t => <ToyCard key={t.id} {...t}/>)}
</div>
  )
}
