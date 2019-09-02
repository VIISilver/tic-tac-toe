import React, { Component, Fragment } from 'react'
import './Cell.css'

export default class Cell extends Component {
    render() {

        const {rowVal, player1MovesCell, player2MovesCell} = this.props

        return (
            <Fragment>
                <input
                id={rowVal}
                onClick={this.props.clickMoveCell}
                value={player1MovesCell.includes(rowVal) ? 'X' : player2MovesCell.includes(rowVal) ? 'O' : ''}
                readOnly
                />
            </Fragment>
        )
    }
}
