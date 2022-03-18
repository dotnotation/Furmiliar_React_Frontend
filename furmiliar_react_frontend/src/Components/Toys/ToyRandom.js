import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchToys } from '../../Redux/actions/toyActions'

export default function ToyRandom() {
    const dispatch = useDispatch()
    const toy = useSelector(state => state.toysReduce.toys)
    const highlyRated = toy.filter(t => t.rating === 5)
    const randomHighlyRated = highlyRated[Math.floor(Math.random()*highlyRated.length)]
    console.log(randomHighlyRated)

    useEffect(() => {
        dispatch(fetchToys())
    }, [])

    return (
        <div className='Random-Toy'>
            <h2>Highly Rated Toy</h2>
            <div className='toy-card' key={randomHighlyRated.id}>
                <img className='toy-photo' src={randomHighlyRated.photo} alt={randomHighlyRated.name}></img>
                <h4>{randomHighlyRated.name}</h4>
                <h5>Brand: {randomHighlyRated.brand}</h5>
                <h5>Price: {randomHighlyRated.price}</h5>
                <h5>Website: <a href={randomHighlyRated.url}>{randomHighlyRated.url}</a></h5>
                <h5>Rating: {randomHighlyRated.rating}</h5>
                <h5>Needs Repair?: {randomHighlyRated.needs_repair === null ? <span>N/A</span> : randomHighlyRated.needs_repair.toString()}</h5>
                <h5>Squeaker?: {randomHighlyRated.squeaker === null ? <span>N/A</span> : randomHighlyRated.squeaker.toString()}</h5>
                <h5>Crinkle?: {randomHighlyRated.crinkle === null ? <span>N/A</span> : randomHighlyRated.crinkle.toString()}</h5>
                <h5>Hides Treats?: {randomHighlyRated.treat === null ? <span>N/A</span> : randomHighlyRated.treat.toString()}</h5>
            </div>
        </div>
    )
}
