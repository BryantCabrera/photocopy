import React, { Component } from 'react'
import './Stats.css'


class Stats extends Component {
    state = {
        receiptDisplay: 'none'
    }

    toggleReceipt = () => {
        const receipt = this.state.receiptDisplay === 'block' ? 'none' : 'block';

        this.setState({
            receiptDisplay: receipt
        });
    }

    render() {
        return (
            <div className="stats">
                <div className="receipt" style={{ display: `${this.state.receiptDisplay}` }}>
                    <img onClick={this.toggleReceipt} className="receipt__img" src="https://cdn-images-1.medium.com/max/1600/1*65YyD4wdDRTFJOrJ3f9xxw.png" style={{ display: `${this.state.receiptDisplay}` }} alt="Receipt" title="Receipt">
                    </img>
                </div>

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
                        { this.props.loggedUser._id && this.props.loggedUser.email !== 'a@a.com' ? 
                        <div className="stats__photo--info--buttons">
                            <button className="stats__photo--info--button1">Report</button>
                            <button onClick={this.toggleReceipt} className="stats__photo--info--button2">Purchase</button>
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
                        <img src="./images/china.png" alt="China flag" title="China flag"></img>
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
                        <img src="./images/canada.png" alt="Canada flag" title="Canada flag"></img>
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
                        <img src="./images/czech.png" alt="Czech flag" title="Czech flag"></img>
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
                        <img src="./images/china.png" alt="China flag" title="China flag"></img>
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

export default Stats;