import React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';

export default function PetCard(props) {
    console.log(props)
  return (
    <div className='pet-card' key={props.id}>
        <h2>{props.name}</h2>
        <img className='pet-photo' src={props.photo} alt={props.name}></img>
        <EditIcon id='pet-edit-button' data-action='edit' name='edit'/>
        <DeleteIcon id='pet-delete-button' data-action='delete' name='delete' />
    </div>
  )
}
