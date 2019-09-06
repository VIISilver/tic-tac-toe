import React from 'react'
import angryCat from '../../assets/cat.jpg'
import './CatModal.css'

export default function CatModal(props) {
    return (
        <div className='cat-wrap' style={{display: props.catDisplayVal}}>
            <button onClick={props.catCloseClick}>X</button>
            <h1>{props.catText}</h1>
            <img src={angryCat} alt='Angry cat staring down the user.' />
            
        </div>
    )
}
