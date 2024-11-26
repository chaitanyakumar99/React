import React, { Component } from 'react'
import Axios from 'axios'

class Users extends Component {
    users = [];
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    getUserData = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                console.log(resp.data)
                this.setState({ users: resp.data })
            })
            .catch()
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state.users)}</pre>
                <h2>User Component </h2>
                <button onClick={this.getUserData}>Get User Data</button>
                <hr />
                <table border={2}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th> 
                        </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.users.length >0 ? <div></div>:<div><h3>No Data</h3></div>
                      }
                    </tbody> 
                </table>
            </div>
        )
    }
}

export default Users  