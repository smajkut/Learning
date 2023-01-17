import React from 'react'
import NavIcon from '../public/img/icon.svg'

export default function Nav() {
    return (
        <nav className='nav-bar'>
            <img src={NavIcon}/>
            <h1>my travel journal.</h1>
        </nav>
    )
}