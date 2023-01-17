import React from 'react'
import data from './data'

export default function Card(props){
    return(
        <div className='card-box'>
            <img src=''/>
            <div className='card-info'>
                <div className='card-location'>

                </div>
                <h1 className='card-dest'></h1>
                <p className='card-date'></p>
                <p className='card-text'></p>
            </div>
        </div>
    )
}