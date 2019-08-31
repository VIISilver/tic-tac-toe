import React, { Component, Fragment } from 'react'
import './Cell.css'

export default class Cell extends Component {
    render() {

        const {rowVal} = this.props
        let handleClick = () => {
            console.log(this.props.boardValuesRow[this.props.rowVal])
        }

        return (
            <Fragment>
                <button 
                id={this.props.rowVal}
                onMouseEnter={this.props.hoverInfoRow}
                onClick={handleClick}
                >
                {/* {this.props.rowVal} */}
                {this.props.boardValuesRow[rowVal]}
                </button>
            </Fragment>
        )
    }
}
