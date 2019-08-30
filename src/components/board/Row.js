import React, { Component } from 'react'
import Cell from './Cell'
import './Row.css'

export default class Row extends Component {


    render() {

        let cellArr = ['a', 'b', 'c']

        return (
            <div className='row-wrap'>
                {/* <button>{this.props.boardVal}</button> */}
                {cellArr.map((item, key) => (
                    <Cell
                    key={key}
                    rowVal={`${item}${this.props.boardVal}`}
                    />
                ))}
                
            </div>
        )
    }
}
