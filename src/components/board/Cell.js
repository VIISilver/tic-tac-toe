import React, { Component } from 'react'
import './Cell.css'

export default class Cell extends Component {
    render() {
        return (
            <div className='cell-wrap'>
                <button id={this.props.rowVal}>{this.props.rowVal}</button>
            </div>
        )
    }
}
