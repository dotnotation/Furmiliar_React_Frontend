import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

export default function ToyEditForm(props) {
    const dispatch = useDispatch()
    const location = useLocation()

    const [photo, setPhoto] = useState('')
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [url, setUrl] = useState('')
    const [rating, setRating] = useState('')
    const [needs_repair, setRepair] = useState('')
    const [squeaker, setSqueaker] = useState('')
    const [crinkle, setCrinkle] = useState('')
    const [treat, setTreat] = useState('')
    const [pet_id] = useState(props.pet_id)

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div>
            <h2>Edit Toy</h2>
            <form className='toy-form' onSubmit={handleSubmit}>
                <div className='full-width'>
                    <h3>Add a New Toy:</h3>
                </div>
                
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
                </div>
            
                <div className='full-width'>
                    <button type='submit'>Add Toy</button>
                </div>
            </form>
        </div>
    )
}
