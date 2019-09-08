import React from 'react'
import CloseModalBtn from '../buttons/CloseModalBtn'
import './VictoryModal.css'

export default function VictoryModal(props) {
    return (
        <div className='victory-wrap' style={{display: props.victoryDisplayVal}}>
            <CloseModalBtn componentCloseClick={props.victoryCloseClick} />
            <h1>{props.victoryText}</h1>
        </div>
    )
}
