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

    victoryCheck = (cellId, playerTurn) => {
        // let player1Arr = this.state.player1Moves
        // let player2Arr = this.state.player2Moves
        // let player1Added = playerTurn ? player1Arr.concat(cellId) : player1Arr
        // let player2Added = !playerTurn ? player2Arr.concat(cellId) : player2Arr
        let player1numbers = this.state.player1Moves.map(item => item[1]).sort().join('')
        let player2numbers = this.state.player2Moves.map(item => item[1]).sort().join('')

        if (player1numbers.includes('123') || player1numbers.includes('111') || player1numbers.includes('222') || player1numbers.includes('333')) {
            alert('X Wins!!')
        } else if (player2numbers.includes('123') || player2numbers.includes('111') || player2numbers.includes('222') || player2numbers.includes('333')) {
            alert('O Wins!!')
        }
        console.log(player1numbers)
    }

    handleOnClick = (e, playerTurn) => {
        let square = e.target.id
        if (this.state.player1Moves.includes(square) || this.state.player2Moves.includes(square)) {
            return alert('Please select a different Cell')
        } else {
            if (this.state.player1Turn) {
                this.setState({
                    player1Turn: !this.state.player1Turn,
                    player1Moves: this.state.player1Moves.concat(square)
                }, () => {
                    this.victoryCheck(e, playerTurn)
                })
            } else {
                this.setState({
                    player1Turn: !this.state.player1Turn,
                    player2Moves: this.state.player2Moves.concat(square)
                }, () => {
                    this.victoryCheck(e, playerTurn)
                })
            }
        }
    }

    render() {

        return (
            <div className='board-wrap'>
                <h1>Tic-React-Toe</h1>
                {this.rowArr.map((item, key) => (
                    <Row
                    key={key}
                    rowVal={item}
                    clickMoveRow={this.handleOnClick}
                    player1MovesRow={this.state.player1Moves}
                    player2MovesRow={this.state.player2Moves}
                    />
                ))}
            </div>
        )
    }
}
