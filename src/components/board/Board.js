import React, { Component } from 'react'
import Row from './Row'
import VictoryModal from '../victoryModal/VictoryModal'
import CatModal from '../catModal/CatModal'
import './Board.css'

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player1Turn: true,
            player1Moves: [],
            player2Moves: [],
            xWinsH1: false,
            oWinsH1: false,
            draw: false,
            victoryModal: false,
        }
    }

    rowArr = [1, 2, 3]

    victoryCheck = () => {
        let vertHorizontalWin = ['111', '222', '333', 'aaa', 'bbb', 'ccc']
        let topLeftDownWin = ['a1', 'b2', 'c3']
        let bottomLeftUpWin = ['a3', 'b2', 'c1']

        let player1Numbers = this.state.player1Moves.map(item => item[1]).sort().join('').concat(this.state.player1Moves.map(item => item[0]).sort().join(''))
        let player1AlphaNum = this.state.player1Moves.sort().join('')

        let player2Numbers = this.state.player2Moves.map(item => item[1]).sort().join('').concat(this.state.player2Moves.map(item => item[0]).sort().join(''))
        let player2AlphaNum = this.state.player2Moves.sort().join('')

        if (vertHorizontalWin.map(item => player1Numbers.includes(item)).includes(true) || 
        !topLeftDownWin.map(item => player1AlphaNum.includes(item)).includes(false) || !bottomLeftUpWin.map(item => player1AlphaNum.includes(item)).includes(false)) {
            this.setState({ xWinsH1: true, victoryModal: true })
        } else if (vertHorizontalWin.map(item => player2Numbers.includes(item)).includes(true) || !topLeftDownWin.map(item => player2AlphaNum.includes(item)).includes(false) || !bottomLeftUpWin.map(item => player2AlphaNum.includes(item)).includes(false)) {
            this.setState({ oWinsH1: true, victoryModal: true })
        }

    }

    catCheck = () => {
        if (this.state.player1Moves.concat(this.state.player2Moves).length === 9 && !(this.state.xWinsH1 && this.state.oWinsH1)) {
            this.setState({ draw: true })
        }

    }

    handleOnClick = (e) => {
        let square = e.target.id
        if (this.state.xWinsH1 || this.state.oWinsH1) {
            return
        }
        if (this.state.player1Moves.includes(square) || this.state.player2Moves.includes(square)) {
            return alert('Please select a different Cell')
        } else {
            if (this.state.player1Turn) {
                this.setState({
                    player1Turn: !this.state.player1Turn,
                    player1Moves: this.state.player1Moves.concat(square)
                }, () => {
                    this.victoryCheck()
                }, () => {
                    this.catCheck()
                })
            } else {
                this.setState({
                    player1Turn: !this.state.player1Turn,
                    player2Moves: this.state.player2Moves.concat(square)
                }, () => {
                    this.victoryCheck()
                }, () => {
                    this.catCheck()
                })
            }
        }
    }

    victoryModalClose = () => {
        this.setState({
            player1Turn: true,
            player1Moves: [],
            player2Moves: [],
            xWinsH1: false,
            oWinsH1: false,
            draw: false,
            victoryModal: false
        })

    }

    render() {

        return (
            <div className='board-wrap'>
                <VictoryModal
                victoryDisplayVal={this.state.victoryModal ? 'block' : 'none'}
                victoryText={this.state.xWinsH1 ? 'X Wins!!!' : 'O Wins!!!'}
                victoryCloseClick={this.victoryModalClose}
                />
                <CatModal
                catDisplayVal={this.state.draw ? 'block' : 'none'}
                catText={'It\'s a cat!!!'}
                catCloseClick={this.victoryModalClose}
                />
                <h1>Tic-React-Toe</h1>
                <h1 className='turn-indicator'><span style={{color: this.state.player1Turn ? '#000000' : '#ebeff5'}}>X</span>&nbsp;&nbsp;&nbsp;<span style={{color: !this.state.player1Turn ? '#000000' : '#ebeff5'}}>O</span></h1>
                {this.rowArr.map((item, key) => (
                    <Row
                        key={key}
                        rowVal={item}
                        clickMoveRow={this.handleOnClick}
                        player1MovesRow={this.state.player1Moves}
                        player2MovesRow={this.state.player2Moves}
                    />
                ))}
                <p>Built by <a href='http://jaredparker.logixexpert.com/'>Jared Parker</a></p>
            </div>
        )
    }
}
