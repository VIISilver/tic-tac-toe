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

    victoryCheck = () => {
        let player1numbers = this.state.player1Moves.map(item => item[1])
        let player2numbers = this.state.player2Moves.map(item => item[1])
        // if (this.state.player1Moves.filter(item => item.includes('1')) && this.state.player1Moves.filter(item => item.includes('2')) && this.state.player1Moves.filter(item => item.includes('3'))) {
        //     alert('X Wins!!')
        // } else if (this.state.player2Moves.filter(item => item.includes('1')) && this.state.player2Moves.filter(item => item.includes('2')) && this.state.player2Moves.filter(item => item.includes('3'))) {
        //     alert('O Wins!!')
        // }
        console.log(player1numbers)
        console.log(player1numbers.includes('1'))
    }

    handleOnClick = (e) => {
        let square = e.target.id
        if (this.state.player1Moves.includes(square) || this.state.player2Moves.includes(square)) {
            return alert('Please select a different Cell')
        } else {
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
        setTimeout(this.victoryCheck(), 1000)
    }

    render() {

        return (
            <div className='board-wrap'>
                <h1>Tic-React-Toe</h1>
                {this.rowArr.map((item, key) => (
                    <Row
                    key={key}
                    boardVal={item}
                    clickMoveRow={this.handleOnClick}
                    player1MovesRow={this.state.player1Moves}
                    player2MovesRow={this.state.player2Moves}
                    />
                ))}
            </div>
        )
    }
}
