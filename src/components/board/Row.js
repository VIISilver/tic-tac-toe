import React from 'react'
import Cell from './Cell'
import './Row.css'

export default function Row(props) {


    const {rowVal, clickMoveRow, player1MovesRow, player2MovesRow} = props

    const cellArr = ['a', 'b', 'c']

    return (
        <div className='row-wrap'>
            {cellArr.map((item, key) => (
                <Cell
                key={key}
                cellVal={`${item}${rowVal}`}
                clickMoveCell={clickMoveRow}
                player1MovesCell={player1MovesRow}
                player2MovesCell={player2MovesRow}
                />
            ))}
        </div>
    )

}
