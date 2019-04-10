import React, { Component } from 'react'
import './PictureCard.css'

class PictureCard extends Component {
    render() {
        return (
            <div>
                <div class="container">

                    <div class="card-wrapper">

                        <div class="card">

                            <div class="card-image">
                                <img src="https://image.ibb.co/dUTfmJ/profile_img.jpg" alt="profile one" />
                            </div>

                            <ul class="social-icons">
                                <li>
                                    <a href="www.facebook.com" title="facebook" target="_blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="www.instagram.com" title="instagram" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="www.twitter.com" title="twitter" target="_blank">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="www.dribbble.com" title="dribbble" target="_blank">
                                        <i className="fab fa-dribbble"></i>
                                    </a>
                                </li>
                            </ul>

                            <div class="details">
                                <br />
                                <h2>John Smith <br />
                                    <span className="job-title">UI Developer</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default PictureCard