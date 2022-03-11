import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteToy } from '../../Redux/actions/toyActions'
import { BsFillTrashFill } from 'react-icons/bs'
import { GrEdit } from 'react-icons/gr'

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
        <h5>Needs Repair?: {props.needs_repair === null ? <span>N/A</span> : props.needs_repair.toString()}</h5>
        <h5>Squeaker?: {props.squeaker === null ? <span>N/A</span> : props.squeaker.toString()}</h5>
        <h5>Crinkle?: {props.crinkle === null ? <span>N/A</span> : props.crinkle.toString()}</h5>
        <h5>Hides Treats?: {props.treat === null ? <span>N/A</span> : props.treat.toString()}</h5>
        
        <button onClick={handleEdit}>
          <GrEdit />
        </button>
        <button onClick={() => dispatch(deleteToy(props.id))}>
          <BsFillTrashFill />
        </button>
    </div>
  )
}