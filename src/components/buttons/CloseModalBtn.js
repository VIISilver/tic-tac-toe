import React, { Fragment } from 'react'
import './CloseModalBtn.css'

export default function CloseModalBtn(props) {
    return (
        <Fragment>
            <button onClick={props.componentCloseClick}>&times;</button>
        </Fragment>
    )
}
