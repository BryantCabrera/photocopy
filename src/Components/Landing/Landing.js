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
                <NavLink exact to="/register" className="landing__button--link"><button className="landing__button">Sign Up</button></NavLink>
                <img className="landing__img" src="/home/image-post.svg" alt="Landing Image" title="Landing Image"></img>

                <img className="landing__userflow" src="/home/userflow.png" alt="Userflow" title="Userflow"></img>
                
                {/* <div className="landing__userflow">
                    <p className="landing__userflow__title1">Content Creators</p>
                    <p className="landing__userflow__title2">PhotoGuard</p>
                    <p className="landing__userflow__title3">Content Buyers</p>
                    <div className="landing__userflow__icon icon1">
                        <img className="landing__userflow__icon--img" src="/home/takephoto.svg" alt="Take Photo" title="Take Photo"></img>
                        <p className="landing__userflow__icon--text">Create your content</p>
                    </div>

                    <div className="landing__userflow__play1">
                        <img src="/home/play1.svg" alt="Forward" title="Forward"></img>
                    </div>

                    <div className="landing__userflow__icon icon2">
                        <img className="landing__userflow__icon--img" src="/home/uploadphoto.svg" alt="Upload Photo" title="Upload Photo"></img>
                        <p className="landing__userflow__icon--text">Upload and copyright your content</p>
                    </div>

                    <div className="landing__userflow__icon icon3">
                        <img className="landing__userflow__icon--img" src="/home/photoprotected.svg" alt="Protect Photo" title="Protect Photo"></img>
                        <p className="landing__userflow__icon--text">Approved copyrighted creative content for use</p>
                    </div>

                    <div className="landing__userflow__icon icon4">
                        <img className="landing__userflow__icon--img" src="/home/searchforphoto.svg" alt="Pick Photo" title="Pick Photo"></img>
                        <p className="landing__userflow__icon--text">Pick the content you would like to purchase </p>
                    </div>

                    <div className="landing__userflow__icon icon5">
                        <img className="landing__userflow__icon--img" src="/home/browsephoto.svg" alt="Browse Photo" title="Browse Photo"></img>
                        <p className="landing__userflow__icon--text">Browse creative content</p>
                    </div>
                    
                </div> */}
            </div>
        )
    }
}

export default withRouter(Landing);