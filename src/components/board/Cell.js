import React, { Fragment } from 'react'
import './Cell.css'

export default function Cell(props) {

    const {cellVal, clickMoveCell, player1MovesCell, player2MovesCell} = props

    return (
        <Fragment>
            <input
            id={cellVal}
            onClick={clickMoveCell}
            value={player1MovesCell.includes(cellVal) ? 'X' : player2MovesCell.includes(cellVal) ? 'O' : ''}
            // value={cellVal}
            readOnly
            />
        </Fragment>
    )
}
