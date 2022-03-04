import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adoptPet } from '../../Redux/actions/petActions'

export default function PetForm() {
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        // take data and send it to redux so need dispatch
        dispatch(adoptPet({name: name, photo: photo}))
        setName("")
        setPhoto("")
    }

    return (
        <form className='toy-box-form' onSubmit={handleSubmit}>
            <label htmlFor='pet-name-input'>Pet's Name:</label>
            <input type='text' id='pet-name-input' value={name} onChange={e => setName(e.target.value)}/>
            <label htmlFor='pet-photo-url-input'>URL of Pet's Photo:</label>
            <input type='text' id='pet-photo-url-input' value={photo} onChange={e => setPhoto(e.target.value)}/>
            <button type='submit'>Register Pet</button>
        </form>
    )
} 
