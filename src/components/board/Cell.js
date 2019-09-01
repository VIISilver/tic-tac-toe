import React, { Component, Fragment } from 'react'
import './Cell.css'

export default class Cell extends Component {
    render() {

        const {rowVal, movesValuesRow} = this.props

        let handleClick = () => {
            console.log(this.props.boardValuesRow[this.props.rowVal])
        }

        return (
            <Fragment>
                <button 
                id={rowVal}
                onMouseEnter={this.props.hoverInfoRow}
                onClick={handleClick}
                >
                    {movesValuesRow.player1Moves.includes(rowVal) ? 'X' : movesValuesRow.player2Moves.includes(rowVal) ? 'O' : ''}
                </button>
            </Fragment>
        )
    }
}
