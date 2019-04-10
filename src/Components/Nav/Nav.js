import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import "./Nav.css"


class Nav extends Component {
    render(){
        return (
            <div className="nav-container">
                <NavLink exact to="/"><img className="nav-container__logo" src="logo.png" alt="PhotoGuard Logo" title="PhotoGuard Logo"></img></NavLink> 
                <span className="nav-container__company">Photoguard</span>
                <ul className="nav-flex">
                    <div className="ternary-nav">
                        <li className="nav-list"><Link to='/'>Home</Link></li>
                        <li className="nav-list"><Link to='/'>Marketplace</Link></li>
                        <li className="nav-list"><Link to='/verify'>Verify</Link></li>

                        {this.props.loggedUser._id ? 
                            <li className="nav-list"><Link to='/dashboard'>Dashboard</Link></li>
                            :
                            <li className="nav-list"><Link to='/login'>Login</Link></li>
                        }
                        
                        {this.props.loggedUser._id ? 
                            <li className="nav-list" onClick={() => this.props.doLogOutUser()}><Link to='/'>Logout</Link></li>
                            :
                            <li className="nav-list register"><Link to='/register'><button className="nav-list__button">Sign Up</button></Link></li>
                        }
                    </div>
                </ul>
            </div>
        )
    }
}

export default Nav;