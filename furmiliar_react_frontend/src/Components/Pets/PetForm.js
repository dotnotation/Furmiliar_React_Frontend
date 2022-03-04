import React from 'react'

export default function PetForm() {
  return (
    <form className='toy-box-form'>
        <label htmlFor='pet-name-input'>Pet's Name:</label>
        <input type='text' id='pet-name-input' />
        <label htmlFor='pet-photo-url-input'>URL of Pet's Photo:</label>
        <input type='text' id='pet-photo-url-input' />
        <button type='submit'>Register Pet</button>
    </form>
  )
}
