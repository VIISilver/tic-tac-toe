import React, { Component } from 'react'
import Row from './Row'
import './Board.css'

export default class Board extends Component {

    render() {

        let rowArr = [1, 2, 3]

        return (
            <div className='board-wrap'>
                <h1>Tic-React-Toe</h1>
                {rowArr.map((item, key) => (
                    <Row
                    key={key}
                    boardVal={item}
                    />
                ))}
            </div>
        )
    }
}
