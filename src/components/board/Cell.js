import React, { Component, Fragment } from 'react'
import './Cell.css'

export default class Cell extends Component {
    render() {

        const {cellVal, player1MovesCell, player2MovesCell} = this.props

        return (
            <Fragment>
                <input
                id={cellVal}
                onClick={this.props.clickMoveCell}
                value={player1MovesCell.includes(cellVal) ? 'X' : player2MovesCell.includes(cellVal) ? 'O' : ''}
                // value={cellVal}
                readOnly
                />
            </Fragment>
        )
    }
}
