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
                    hoverInfoRow={this.props.hoverInfoBoard}
                    movesValuesRow={this.props.movesValuesBoard}
                    />
                ))}
            </div>
        )
    }
}
