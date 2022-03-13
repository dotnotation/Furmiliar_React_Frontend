import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { editPet } from '../../Redux/actions/petActions'

 
export default function PetEditForm() {
   const location = useLocation()
   const dispatch = useDispatch()
   const navigate = useNavigate()
  
   const petId = location.state.id
   const petName = location.state.name
   const petPhoto = location.state.photo
 
   const [name, setName] = useState(petName)
   const [photo, setPhoto] = useState(petPhoto)
   const [id] = useState(petId)
 
   function handleSubmit(e){
       e.preventDefault()
       console.log(name, photo, id)
       dispatch(editPet({name: name, photo: photo, id: id}, navigate))
   }
 
    return (
        <div>
            <h2 id='edit-detail-message'>Edit {petName}'s Details:</h2>
            <form className='pet-form' onSubmit={handleSubmit}>
                <label htmlFor='pet-name-input'>Pet's Name:</label>
                <input type='text' id='pet-name-input' name='name' value={name} onChange={e => setName(e.target.value)}/>
                
                <label htmlFor='pet-photo-url-input'>URL of Pet's Photo:</label>
                <input type='text' id='pet-photo-url-input' name='photo' value={photo} onChange={e => setPhoto(e.target.value)}/>
                
                <div className='hidden'>
                    <input readOnly value={id}></input>
                </div>
                
                <div className='full-width-pet'>
                    <button type='submit'>Update Pet</button>
                </div>
            </form>
            
            <div className='back-button'>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    )
}
