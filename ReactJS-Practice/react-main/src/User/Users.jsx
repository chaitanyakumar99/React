import React, { Component } from 'react'
import Axios from 'axios'

class Users extends Component {
    getUserData = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                console.log(resp.data)
            })
            .catch()
    }
    render() {
        return (
            <div>
                <h2>User Component </h2>
                <button onClick={this.getUserData}>Get User Data</button>
                
            </div>
        )
    }
}

export default Users  