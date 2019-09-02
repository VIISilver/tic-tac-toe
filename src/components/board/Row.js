import React, { Component } from 'react'
import Cell from './Cell'
import './Row.css'

export default class Row extends Component {

    cellArr = ['a', 'b', 'c']

    render() {

        return (
            <div className='row-wrap'>
                {/* <button>{this.props.boardVal}</button> */}
                {this.cellArr.map((item, key) => (
                    <Cell
                    key={key}
                    rowVal={`${item}${this.props.boardVal}`}
                    clickMoveCell={this.props.clickMoveRow}
                    movesValuesRow={this.props.movesValuesBoard}
                    player1MovesCell={this.props.player1MovesRow}
                    player2MovesCell={this.props.player2MovesRow}
                    />
                ))}
            </div>
        )
    }
}
