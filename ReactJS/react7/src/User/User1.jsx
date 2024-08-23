import React, { Component } from 'react'
import Axios from 'axios'

class User1 extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                this.setState({ users: resp.data })
            })
            .catch(() => {
                console.log("err");
            })

    }
    render() {
        return (
            <div>
                <h2>User1 Component</h2>
                <pre>{JSON.stringify(this.state.users)}</pre>
                {
                    this.state.users.length > 0 ? <>
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
                                    this.state.users.map((user) => {
                                        return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </> : <h2>No Data</h2>
                }
            </div>
        )
    }
}


export default User1
