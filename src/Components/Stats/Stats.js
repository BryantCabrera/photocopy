import React, { Component } from 'react'
import './Stats.css'


class Stats extends Component {
    render() {
        return (
            <div className="stats">
                <div className="stats__photo">
                    <img className="stats__photo--img" src="https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="Ella" title="Ella">
                    </img>
                    <div className="stats__photo--info">
                        <span className="stats__photo--info--title">Ella</span>
                        <span className="stats__photo--info--creator">Taken by Bryant Cabrera on 4/10/2019</span>
                        <span className="stats__photo--info--description">Beauty personified.</span>
                        <div className="stats__photo--info--stats">
                            <span className="stats__photo--info--users">9</span>
                            <span className="stats__photo--info--price">$15</span>
                        </div>
                        { this.props.loggedUser._id && this.props.loggedUser.email != 'a@a.com' ? 
                        <div className="stats__photo--info--buttons">
                            <button className="stats__photo--info--button1">Report</button>
                            <button className="stats__photo--info--button2">Purchase</button>
                        </div>
                        :
                        ''
                        }
                    </div>
                </div>
                <div className="stats__users">
                    LICENSED TO:
                </div>
                <div className="Rectangle">
                    <div className="March-1st-2019-120">
                        March-1st-2019-120
                    </div>
                    <div className="flags">
                        <img alt="" src="./images/china.png"></img>
                    </div>
                    <div className="Los-Angeles-CA">
                        China
                    </div>
                    <div className="Los-Angeles-CA">
                        Tim Wu
                    </div>
                </div>

                <div className="Rectangle">
                    <div className="March-1st-2019-120">
                        March-1st-2019-120
                    </div>
                    <div className="flags">
                        <img alt="" src="./images/canada.png"></img>
                    </div>
                    <div className="Los-Angeles-CA">
                        China
                    </div>
                    <div className="Los-Angeles-CA">
                        Suzie-Anderson
                    </div>
                </div>

                <div className="Rectangle">
                    <div className="March-1st-2019-120">
                        March-1st-2019-120
                    </div>
                    <div className="flags">
                        <img alt="" src="./images/czech.png"></img>
                    </div>
                    <div className="Los-Angeles-CA">
                        Czech
                    </div>
                    <div className="Los-Angeles-CA">
                        Thomas Payne
                    </div>
                </div>

                <div className="Rectangle">
                    <div className="March-1st-2019-120">
                        March-1st-2019-120
                    </div>
                    <div className="flags">
                        <img src="./images/china.png"></img>
                    </div>
                    <div className="Los-Angeles-CA">
                        China
                    </div>
                    <div className="Los-Angeles-CA">
                        Alan Li
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats
