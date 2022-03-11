import { useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router'

 
export default function PetEditForm() {
   const location = useLocation()
   // const dispatch = useDispatch()
   // const navigate = useNavigate()
  
   const petId = location.state.id
   const petName = location.state.name
   const petPhoto = location.state.photo
 
   const [name, setName] = useState('')
   const [photo, setPhoto] = useState('')
 
   const petInformation = {
       name: petName,
       photo: petPhoto
   }
 
   console.log("petInformation", petInformation)
 
   function handleSubmit(e){
       e.preventDefault()
       console.log(name, photo)
   }
 
   // const {handleSubmit} = useForm({
   //     defaultValues: petInformation
   // })
 
 return (
   <div>
       {console.log(petId, petName, petPhoto)}
       <h3>Edit {petName}'s Details:</h3>
       <form className='pet-form' onSubmit={handleSubmit}>
           <label htmlFor='pet-name-input'>Pet's Name:</label>
           <input type='text' id='pet-name-input' name='name' value={name} onChange={e => setName(e.target.value)}/>
           <label htmlFor='pet-photo-url-input'>URL of Pet's Photo:</label>
           <input type='text' id='pet-photo-url-input' name='photo' value={photo} onChange={e => setPhoto(e.target.value)}/>
           <div className='full-width-pet'>
               <button type='submit'>Update Pet</button>
           </div>
       </form>
   </div>
 )
}
