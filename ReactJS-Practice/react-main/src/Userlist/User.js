import React, { Component } from 'react'
import Userlist from './userlist'

class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: Userlist
        }
    }
    render() {
        return (
            <div>
                <h2>User Component</h2 >
                <pre>{JSON.stringify(this.state.users)}</pre>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user, index) => {
                                return <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default User
