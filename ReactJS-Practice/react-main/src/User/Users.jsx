import React, { Component } from 'react'
import Axios from 'axios'

class Users extends Component {
    users=[];
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    getUserData = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                console.log(resp.data)
                this.setState({users:resp.data}) 
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
                            <th>Namre</th>
                            <th>Email</th>
                        </tr>
                        <tbody>
                            <tr>
                                  <td></td>
                            </tr>
                        </tbody>
                    </thead>
                </table>
            </div>
        )
    }
}

export default Users  