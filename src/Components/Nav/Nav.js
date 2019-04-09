import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import "./Nav.css"


class Nav extends Component {
    render(){
        return (
            <div className="nav-container">
                <NavLink exact to="/"><img src="logo.png" alt="PhotoGuard Logo" title="PhotoGuard Logo"></img></NavLink>
                <ul className="nav-flex">
                    <div className="ternary-nav">
                        <li id="list1" className="nav-list"><Link to='/dashboard'>Dashboard</Link></li>
                        <li id="list1" className="nav-list"><Link to='/login'>Login</Link></li>
                        <li id="list1" className="nav-list"><Link to='/register'>Register</Link></li>
                        <li id="list1" className="nav-list" onClick={() => this.props.doLogOutUser()}><Link to='/'></Link>Logout</li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Nav