import React, { Component } from 'react'
import Row from './Row'
import './Board.css'

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player1turn: false

        }
    }

    rowArr = [1, 2, 3]

    handleOnMouseEnter = (e) => {
        console.log(e)
    }

    render() {

        return (
            <div className='board-wrap'>
                <h1>Tic-React-Toe</h1>
                {this.rowArr.map((item, key) => (
                    <Row
                    key={key}
                    boardVal={item}
                    />
                ))}
            </div>
        )
    }
}
