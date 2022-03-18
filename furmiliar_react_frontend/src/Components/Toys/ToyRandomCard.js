import React from 'react'

export default function ToyRandomCard(props) {
    return (
        <div className='toy-card-random' key={props.id}>
            <img className='toy-photo' src={props.photo} alt={props.name}></img>
            <h4>{props.name}</h4>
            <h5>Brand: {props.brand}</h5>
            <h5>Price: {props.price}</h5>
            <h5>Website: <a href={props.url}>{props.url}</a></h5>
            <h5>Rating: {props.rating}</h5>
            <h5>Squeaker?: {props.squeaker === null ? <span>N/A</span> : props.squeaker.toString()}</h5>
            <h5>Crinkle?: {props.crinkle === null ? <span>N/A</span> : props.crinkle.toString()}</h5>
            <h5>Hides Treats?: {props.treat === null ? <span>N/A</span> : props.treat.toString()}</h5>
        </div>
    )
}
