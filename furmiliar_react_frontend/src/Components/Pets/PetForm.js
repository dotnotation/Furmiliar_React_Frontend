import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adoptPet } from '../../Redux/actions/petActions'
import { useNavigate } from 'react-router'

export default function PetForm() {
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(adoptPet({name: name, photo: photo}, navigate))
        setName('')
        setPhoto('')
    }

    return (
        <div>
            <h2 id='register-pet'>Register Your Pet:</h2>
            <form className='pet-form' onSubmit={handleSubmit}>
                <label htmlFor='pet-name-input'>Pet's Name:</label>
                <input type='text' id='pet-name-input' value={name} onChange={e => setName(e.target.value)}/>
                
                <label htmlFor='pet-photo-url-input'>URL of Pet's Photo:</label>
                <input type='text' id='pet-photo-url-input' value={photo} onChange={e => setPhoto(e.target.value)}/>
                
                <div className='full-width-pet'>
                    <button type='submit'>Register Pet</button>
                </div>
            </form>
            
            <img id='paw' src={require('../../Assets/paw.png')} alt='dog paw print' />
        </div>
    )
} 
