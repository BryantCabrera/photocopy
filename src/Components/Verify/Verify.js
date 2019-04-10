import React, { Component } from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom'
import "./Verify.css"


class Verify extends Component {
    render(){
        return (
            <div className="verify">
                <p className="verify__text">
                    Not sure if the image is copyrighted?
                </p>
                <button className="verify__button">Upload Image and Verify</button>
            </div>
        )
    }
}

export default withRouter(Verify);