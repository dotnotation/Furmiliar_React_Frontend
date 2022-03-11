import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteToy } from '../../Redux/actions/toyActions'
import { BsFillTrashFill } from 'react-icons/bs'
import { GrEdit } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

export default function ToyCard(props) {
    console.log(props)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function launchEdit(){
      console.log("hit edit", props)
      navigate(`${props.id}/edit`, {state: {
        id: props.id, 
        photo: props.photo,
        name: props.name, 
        brand: props.brand, 
        price: props.price, 
        url: props.url,
        rating: props.rating,
        needs_repair: props.needs_repair,
        squeaker: props.squeaker,
        crinkle: props.crinkle,
        treat: props.treat,
        pet_id: props.pet_id
      }})
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
        
        <button onClick={launchEdit}>
          <GrEdit />
        </button>
        <button onClick={() => dispatch(deleteToy(props.id))}>
          <BsFillTrashFill />
        </button>
    </div>
  )
}