import React, { Component } from 'react'
import Cell from './Cell'
import './Row.css'

export default class Row extends Component {

    cellArr = ['a', 'b', 'c']

    render() {

        return (
            <div className='row-wrap'>
                {/* <button>{this.props.rowVal}</button> */}
                {this.cellArr.map((item, key) => (
                    <Cell
                    key={key}
                    cellVal={`${item}${this.props.rowVal}`}
                    clickMoveCell={this.props.clickMoveRow}
                    player1MovesCell={this.props.player1MovesRow}
                    player2MovesCell={this.props.player2MovesRow}
                    />
                ))}
            </div>
        )
    }
}
