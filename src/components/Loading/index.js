import React, { Component } from 'react'
import loadingGIF from '../../images/gif/loading.gif'

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <h4> Wczytywanie produktów..</h4>
                <img src={loadingGIF} alt="load" />
            </div>
        )
    }
}