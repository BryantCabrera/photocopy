import React, { Component } from 'react'
import './Stats.css'


class Stats extends Component {
    render() {
        return (
            <div>
                <div className="stats--users">
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
