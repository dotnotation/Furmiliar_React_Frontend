import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer className='row'>
            <div className='col-md-6 mt-md-0 mt-3'>
                <span>This App was made with React/Redux using React Router 6 and hooks.</span>
            </div>
            <div className='col-md-3 mb-md-0 mb-3'>
                <a href='https://github.com/dotnotation'>
                    <AiFillGithub />
                </a>
            </div>

            <div className='col-md-3 mb-md-0 mb-3'>© 2022 Copyright: Dorthy Thielsen</div>
        </footer>
  )
}
