import React, { Component } from 'react'
import Row from './Row'
import './Board.css'

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player1Turn: true,
            player1Moves: [],
            player2Moves: []
        }
    }

    rowArr = [1, 2, 3]

    handleOnClick = (e) => {
        let square = e.target.id
        if (this.state.player1Turn) {
            this.setState({
                player1Turn: !this.state.player1Turn,
                player1Moves: this.state.player1Moves.concat(square)
            })
        } else {
            this.setState({
                player1Turn: !this.state.player1Turn,
                player2Moves: this.state.player2Moves.concat(square)
            })
        }
    }

    render() {

        return (
            <div className='board-wrap'>
                <h1>Tic-React-Toe</h1>
                {this.rowArr.map((item, key) => (
                    <Row
                    key={key}
                    boardVal={item}
                    hoverInfoRow={this.handleOnClick}
                    player1MovesRow={this.state.player1Moves}
                    player2MovesRow={this.state.player2Moves}
                    />
                ))}
            </div>
        )
    }
}
