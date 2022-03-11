import React from 'react'
import { useDispatch } from 'react-redux'
import { rainbowBridge } from '../../Redux/actions/petActions'
import { useNavigate } from 'react-router'
import { Stack } from 'react-bootstrap'
import { BsFillTrashFill } from 'react-icons/bs'
import { GrEdit } from 'react-icons/gr'


export default function PetCard(props) {
    // console.log(props)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function launchEdit(){
      console.log("hit edit", props)
      navigate(`${props.id}/edit`, {state: {id: props.id, name: props.name, photo: props.photo}})
    }

    // function handleDelete(){
    //   dispatch(rainbowBridge(props))
    //   console.log("handleDelete", props)
    // }

    function openToyBox(){
      console.log("opening toy box", props.id)
      navigate('/toys', {state: { pet_id: props.id, name: props.name}})
    }

  return (
    <div className='pet-card' key={props.id}>
        <h2>{props.name}</h2>
        <img className='pet-photo' src={props.photo} alt={props.name}></img>
        <Stack direction='horizontal' gap='2' className='d-inline-block mb-2 mt-2'>
          <button id='open-toy-box-button' data-action='open' aria-labelledby='open-toy-box-label' role='button' onClick={openToyBox}>Open Toy Box</button>
          <button onClick={launchEdit}>
            <GrEdit />
          </button>
          <button onClick={() => dispatch(rainbowBridge(props.id))}>
            <BsFillTrashFill />
          </button>
        </Stack>
    </div>
  )
}
