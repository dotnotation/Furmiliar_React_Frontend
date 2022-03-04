import { useState } from 'react'

export default function PetForm() {
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')

  return (
    <form className='toy-box-form'>
        <label htmlFor='pet-name-input'>Pet's Name:</label>
        <input type='text' id='pet-name-input' value={name} onChange={e => setName(e.target.value)}/>
        <label htmlFor='pet-photo-url-input'>URL of Pet's Photo:</label>
        <input type='text' id='pet-photo-url-input' value={photo} onChange={e => setPhoto(e.target.value)}/>
        <button type='submit'>Register Pet</button>
    </form>
  )
} 
