import React, { Component } from 'react'
import Row from './Row'
import './Board.css'

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player1Turn: false,
            player1Moves: [],
            player2Moves: [],
            boardValues: {
                a1: 'X',
                a2: '',
                a3: '',
                b1: '',
                b2: '',
                b3: '',
                c1: '',
                c2: '',
                c3: ''
            }

        }
    }

    rowArr = [1, 2, 3]

    handleOnMouseEnter = (e) => {
        console.log(e.target.id)
        let square = e.target.id
        // this.setState({
        //     boardValues: 'X'
        // })
    }

    render() {

        return (
            <div className='board-wrap'>
                <h1>Tic-React-Toe</h1>
                {this.rowArr.map((item, key) => (
                    <Row
                    key={key}
                    boardVal={item}
                    hoverInfoBoard={this.handleOnMouseEnter}
                    playerTurnBoard={this.state.player1Turn}
                    boardValuesBoard={this.state.boardValues}

                    />
                ))}
            </div>
        )
    }
}
