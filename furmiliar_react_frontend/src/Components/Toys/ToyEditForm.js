import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { editToy } from '../../Redux/actions/toyActions'

export default function ToyEditForm() {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    
    const toyId = location.state.id
    const petId = location.state.pet_id
    const toyName = location.state.name
    const toyPhoto = location.state.photo
    const toyBrand = location.state.brand
    const toyPrice = location.state.price
    const toyUrl = location.state.url
    const toyRating = location.state.rating
    const toyRepair = location.state.squeaker === null ? 'true' : location.state.needs_repair.toString()
    const toySqueaker = location.state.squeaker === null ? 'true' : location.state.squeaker.toString()
    const toyCrinkle = location.state.crinkle === null ? 'true' : location.state.squeaker.toString()
    const toyTreat = location.state.treat === null ? 'true' : location.state.treat.toString()


    const [id] = useState(toyId)
    const [photo, setPhoto] = useState(toyPhoto)
    const [name, setName] = useState(toyName)
    const [brand, setBrand] = useState(toyBrand)
    const [price, setPrice] = useState(toyPrice)
    const [url, setUrl] = useState(toyUrl)
    const [rating, setRating] = useState(toyRating)
    const [needs_repair, setRepair] = useState(toyRepair)
    const [squeaker, setSqueaker] = useState(toySqueaker)
    const [crinkle, setCrinkle] = useState(toyCrinkle)
    const [treat, setTreat] = useState(toyTreat)
    const [pet_id] = useState(petId)

    function handleSubmit(e){
        e.preventDefault()
        console.log(needs_repair)
        dispatch(editToy({
            id: id,
            photo: photo,
            name: name,
            brand: brand,
            price: price,
            url: url,
            rating: rating,
            needs_repair: needs_repair,
            squeaker: squeaker,
            crinkle: crinkle,
            treat: treat,
            pet_id: pet_id
        }, navigate))
    }

    return (
        <div>
            <h2>Edit {toyName}'s Details:</h2>
            <form className='toy-form' onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor='toy-photo-url-input'>Photo URL:</label>
                    <input type='text' id='toy-photo-url-input' value={photo} onChange={e => setPhoto(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor='toy-name-input'>Name:</label>
                    <input type='text' id='toy-name-input' value={name} onChange={e => setName(e.target.value)}/>
                </div>
            
                <div>
                    <label htmlFor='toy-brand-input'>Brand:</label>
                    <input type='text' id='toy-brand-input' value={brand} onChange={e => setBrand(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor='toy-price-input'>Price:</label>
                    <input type='text' id='toy-price-input' value={price} onChange={e => setPrice(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor='toy-url-input'>Website:</label>
                    <input type='text' id='toy-url-input' value={url} onChange={e => setUrl(e.target.value)}/>
                </div>
        
                <div>
                    <label htmlFor='toy-rating-input'>Rating 1-5:</label>
                    <input type='text' id='toy-rating-input' value={rating} onChange={e => setRating(e.target.value)}/>
                </div>

                <div>
                    <strong>Needs Repair?:</strong>
                    <input type='radio' id='toy-repair-input-true' label='true' value='true' checked={needs_repair === 'true'} onChange={e => setRepair(e.target.value)}/>
                    <label htmlFor='toy-rating-input-true'>True</label>
                    <input type='radio' id='toy-repair-input-false' label='false' value='false' checked={needs_repair === 'false'} onChange={e => setRepair(e.target.value)}/>
                    <label htmlFor='toy-rating-input-false'>False</label>
                </div>

                <div>
                    <strong>Squeaker?:</strong>
                    <input type='radio' id='toy-squeaker-input-true' label='true' value='true' checked={squeaker === 'true'} onChange={e => setSqueaker(e.target.value)}/>
                    <label htmlFor='toy-squeaker-input-true'>True</label>
                    <input type='radio' id='toy-squeaker-input' label='false' value='false' checked={squeaker === 'false'} onChange={e => setSqueaker(e.target.value)}/>
                    <label htmlFor='toy-squeaker-input-false'>False</label>
                </div>

                <div>
                    <strong>Crinkle?:</strong>
                    <input type='radio' id='toy-crinkle-input-true' label='true' value='true' checked={crinkle === 'true'} onChange={e => setCrinkle(e.target.value)}/>
                    <label htmlFor='toy-crinkle-input-true'>True</label>
                    <input type='radio' id='toy-crinkle-input-false' label='false' value='false' checked={crinkle === 'false'} onChange={e => setCrinkle(e.target.value)}/>
                    <label htmlFor='toy-crinkle-input-false'>False</label>
                </div>

                <div>
                    <strong>Hides Treats?:</strong>
                    <input type='radio' id='toy-treat-input-true' label='true' value='true' checked={treat === 'true'} onChange={e => setTreat(e.target.value)}/>
                    <label htmlFor='toy-treat-input-true'>True</label>
                    <input type='radio' id='toy-treat-input-false' label='false' value='false' checked={treat === 'false'} onChange={e => setTreat(e.target.value)}/>
                    <label htmlFor='toy-treat-input-false'>False</label>
                </div>

                <div className='hidden'>
                    <input readOnly value={pet_id}/>
                    <input readOnly value={id}/>
                </div>
            
                <div className='full-width'>
                    <button type='submit'>Update Toy</button>
                </div>
            </form>
        </div>
    )
}
