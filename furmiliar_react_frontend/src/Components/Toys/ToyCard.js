import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useDispatch } from 'react-redux'
import { editToy, deleteToy } from '../../Redux/actions/toyActions'

export default function ToyCard(props) {
    console.log(props)
    const dispatch = useDispatch()

    function handleEdit(){
      console.log("hit edit", props.id)
      // access pet
      // put toy information in form
      // update toy entry based on input
    }

    // function handleDelete(){
    //   dispatch(deleteToy(props))
    //   console.log("handleDelete", props)
    // }

  return (
    <div className='toy-card' key={props.id}>
        <img className='toy-photo' src={props.photo} alt={props.name}></img>
        <h4>{props.name}</h4>
        <h5>Brand: {props.brand}</h5>
        <h5>Price: {props.price}</h5>
        <h5>Website: <a href={props.url}>{props.url}</a></h5>
        <h5>Rating: {props.rating}</h5>
        <h5>Needs Repair?: {props.needs_repair}</h5>
        <h5>Squeaker?: {props.squeaker}</h5>
        <h5>Crinkle?: {props.crinkle}</h5>
        <h5>Hides Treats?: {props.treat}</h5>
        <EditIcon id='toy-edit-button' data-action='edit' aria-labelledby='edit-button-label' role='button' onClick={handleEdit}/>
        <DeleteIcon id='toy-delete-button' data-action='delete'  aria-labelledby='delete-button-label' role='button' onClick={() => dispatch(deleteToy(props.id))}/>
    </div>
  )
}