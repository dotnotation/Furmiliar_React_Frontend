import React from 'react'

export default function Welcome() {
  return (
    <div className='welcome-message'>
      <h2>Welcome to Furmiliar!</h2>
      <br></br>
      <p>Furmiliar is an app for pet lovers to keep track of their pet's toys. As a pet owner, you often buy toys that your pet either loves or hates. With this app you can document all of the toys and figure out a common theme. Also you can put the link so you can re-buy the toy should anything happen to it, like a set of needle teeth on your new puppy. Another feature on this same thought is marking if the toy needs repaired. I often fix a lot of my dog's toys but have a hard time keeping track of all the toys that need to be repaired. </p>

      <p>To start, first click on the <a href='/pets/new'>Register Your Pet</a> link in the top right corner. Then add your pet's name and a url to a photo of them. You can also just look at <a href='/pets'>other register pets</a> to see other cute pets and get inspiration of new toys to buy. When you click on the open toy box button under a pet, you will be taken to the toys page. On this page you can add, update, or delete toys from that pet's toy box. </p>

      <p>Disclaimer: There is still so many features I want to add to this app. For instance future plans are to add users, a search feature, and maybe even a toy of the day. If you have other suggestions, please feel free to email me at dorthythielsen@gmail.com. </p>
      <img id='paw' src={require('../../Assets/paw.png')} alt='dog paw print' />

    </div>
  )
}
