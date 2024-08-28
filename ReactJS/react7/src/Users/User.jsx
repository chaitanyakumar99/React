import React, { Component } from 'react'
import Axios from 'axios'

class User extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                this.setState({ users: resp.data })
            })
            .catch()
    }
    componentWillUnmount() {
        console.log("Unmounting")
    }
    render() {
        return <div>
            <div className="row">
                <div className="col-md-6">
                    {
                        this.state.users.length > 0 ? <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map((user) => {
                                            return <tr>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>


                        </> : <h3></h3>
                    }
                </div>
            </div>
        </div>

    }
}

export default User