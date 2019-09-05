import React from 'react'
import './VictoryModal.css'

export default function VictoryModal(props) {
    return (
        <div className='victory-wrap' style={{display: props.victoryDisplayVal}}>
            <button onClick={props.victoryCloseClick}>X</button>
            <h1>{props.victoryText}</h1>
        </div>
    )
}
