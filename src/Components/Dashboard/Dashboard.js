import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
// import PictureCard from '../PictureCard/PictureCard'
// import Stats from '../Stats/Stats'

class Dashboard extends Component {
    state = {
        search: ''
    }
    render() {
        return (
            <div className="dashboard__maincontainer">
                <div className="dashboard__userprofile--container">
                    <div className="dashboard__userprofile">
                        <div className="dashboard__userprofile--info">
                            <img className="dashboard__userprofile--img" alt="" src={`${this.props.loggedUser.img}`}></img>
                            <div className="dashboard__userprofile--name">Hi, {this.props.loggedUser.name}!</div>
                            <div className="dashboard__userprofile--links">Photos</div>
                            <div className="dashboard__userprofile--links"><Link to='/stats'>Stats</Link></div>
                            <div className="dashboard__userprofile--links">Payment</div>
                            <div className="dashboard__userprofile--links"><Link to='/settings'>Settings</Link></div>
                            {/* <div className="dashboard__userprofile--email">{this.props.loggedUser.email}</div>
                            <div className="dashboard__userprofile--address">Address: 5551 W. 6th. St.{this.props.loggedUser.address}</div>
                            <div className="dashboard__userprofile--bankaccount">**** **** **** 5323{this.props.loggedUser.bankAccount}</div> */}
                            <div className="dashboard__userprofile--buttons">
                                <button onClick={this.props.doDeleteUser}>Delete Your Profile</button>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard__userprofile">
                        <input className="dashboard__userprofile--searchbar" value={this.state.search}></input>
                        <div className="dashboard__userprofile--pictures">
                            <Link to='/stats'>
                            
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" /></Link>
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551771825-1607dd0ad791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551728339-499b333c5c43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551854386-b42759a60dd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551833726-b6549cd73566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551838030-f478473c9f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1483323323858-4916bde7bd5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80" />

                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1495516372021-9c815fa7e668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551838030-f478473c9f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1483323323858-4916bde7bd5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80" />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard