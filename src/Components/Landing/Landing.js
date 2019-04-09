import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

class Landing extends Component {

    render(){
        return(
            <div className='landing'>
                <div className="landing__about">
                    <button>Sign Up</button>
                </div>
                    <img src=""></img>

            </div>
        )
    }
}

export default withRouter(Landing);