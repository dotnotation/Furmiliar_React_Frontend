import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchToys } from '../../Redux/actions/toyActions'
import ToyRandomCard from './ToyRandomCard'

export default function ToyRandom() {
    const toys = useSelector(state => state.toysReduce.toys)
    const dispatch = useDispatch()
    const highlyRated = toys.filter(t => t.rating === 5)
    const random = Math.floor(Math.random()*highlyRated.length)
    const toyOfTheDay = highlyRated[random]

    useEffect(() => {
        dispatch(fetchToys())
    }, [])

    return (
        <div className='random-toy'>
            <h2>Toy of the day:</h2>
            <h4 className='mx-auto px-4'>The toy of the day is a randomly selected toy that is one of the highest rated toys on our app. This will hopefully give you inspiration for your pet's next favorite toy.</h4>
            {toyOfTheDay ? <ToyRandomCard {...toyOfTheDay} /> : <span>It seems like there are no highly rated toys today. Please let us know where your dog's favorite toys is.</span>}
            <div className='buffer'>
                <br></br>
            </div>
        </div>
    )
}
