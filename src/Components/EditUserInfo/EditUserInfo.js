import React, { Component } from 'react'

class EditUserInfo extends Component {
    state = {
        name: '',
        img: '',
        address: '',
        bankAccount: ''
    }

    doHandleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    doHandleSubmit = (e) => {
        e.preventDefault()
        const creator = {
            ...this.state,
            email: this.props.loggedUser.email,
            _id: this.props.loggedUser._id
        }
        console.log(creator, 'this is the changed user')
        this.props.doEditUser(creator)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.doHandleSubmit}>
                    <h1>Edit Your Profile</h1>
                    <input name="name" type="text" defaultValue={this.state.name} onChange={this.doHandleInput} placeholder={this.props.loggedUser.name}/>
                    <input name="img" type="text" defaultValue={this.state.img} onChange={this.doHandleInput} placeholder={this.props.loggedUser.img}/>
                    <input name="address" type="text" defaultValue={this.state.address} onChange={this.doHandleInput} placeholder={this.props.loggedUser.address}/>
                    <input name="bankAccount" type="number" maxlength="16" defaultValue={this.state.bankAccount} onChange={this.doHandleInput} placeholder={this.props.loggedUser.bankAccount}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default EditUserInfo