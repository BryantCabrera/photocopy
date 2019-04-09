import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './Landing.css';

class Landing extends Component {

    render(){
        return(
            <div className='landing'>
                <div className="landing__about">
                    Photoguard offers a way to copyright your creative content with advanced blockchain technology.  

                    Each image you upload will create a blockchain hash code attached to your image data and copyright.  This provides a record of your creative talent while buyers can verify who owns the copyright.
                </div>
                <button className="landing__button">Sign Up</button>
                <img className="landing__img" src="/home/image-post.svg"></img>
            </div>
        )
    }
}

export default withRouter(Landing);