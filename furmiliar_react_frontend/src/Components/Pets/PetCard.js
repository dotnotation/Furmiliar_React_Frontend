import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useDispatch } from 'react-redux'
import { editPet, rainbowBridge } from '../../Redux/actions/petActions'

export default function PetCard(props) {
    console.log(props)
    const dispatch = useDispatch()

    function handleEdit(){
      console.log("hit edit", props.id)
    }

    function handleDelete(){
      console.log("hit delete", props.id)
    }
  return (
    <div className='pet-card' key={props.id}>
        <h2>{props.name}</h2>
        <img className='pet-photo' src={props.photo} alt={props.name}></img>
        <EditIcon id='pet-edit-button' data-action='edit' aria-labelledby='edit-button-label' role='button' onClick={handleEdit}/>
        <DeleteIcon id='pet-delete-button' data-action='delete'  aria-labelledby='delete-button-label' role='button' onClick={handleDelete}/>
    </div>
  )
}
