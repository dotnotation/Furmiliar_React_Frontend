import React from 'react'

export default function PetCard(props) {
    console.log(props)
  return (
    <div className='pet-card' key={props.id}>
        <h2>{props.name}</h2>
        <img className='pet-photo' src={props.photo} alt={props.name}></img>
    </div>
  )
}
