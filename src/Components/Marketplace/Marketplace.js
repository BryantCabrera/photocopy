import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Marketplace.css'


class Marketplace extends Component {
    render() {
        return (
            <div className="market__container">
                    <div className="market__pictures">
                        <img className="market__pictures-1" alt="" src="https://images.unsplash.com/photo-1551771825-1607dd0ad791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                        <NavLink exact to="/stats"><img className="market__pictures-1" alt="" src="https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" /></NavLink>
                        <img className="market__pictures-1" alt="" src="https://images.unsplash.com/photo-1551728339-499b333c5c43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                        <img className="market__pictures-1" alt="" src="https://images.unsplash.com/photo-1551854386-b42759a60dd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />

                        <img className="market__pictures-1" alt="" src="https://images.unsplash.com/photo-1551833726-b6549cd73566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                        <img className="market__pictures-1" alt="" src="https://images.unsplash.com/photo-1551838030-f478473c9f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                        <img className="market__pictures-1" alt="" src="https://images.unsplash.com/photo-1483323323858-4916bde7bd5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                        <img className="market__pictures-1" alt="" src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80" />

                        <img className="market__pictures-1" alt="" src="https://images.unsplash.com/photo-1495516372021-9c815fa7e668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                        <img className="market__pictures-1" alt="" src="https://images.unsplash.com/photo-1551838030-f478473c9f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                        <img className="market__pictures-1" alt="" src="https://images.unsplash.com/photo-1483323323858-4916bde7bd5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                        <img className="market__pictures-1" alt="" src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80" />
                </div>
            </div>
        )
    }
}

export default Marketplace