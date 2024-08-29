import React, { Component } from 'react'
import Axios from 'axios'

class User extends Component {
    state = {
        users:[]
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                this.setState({ users:resp.data })
            })
            .catch()
    }
    componentWillUnmount(){
        console.log("unmounting")
    }
    render() {
        return <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    {
                        this.state.users.length > 0 ? <>
                            <table className='table table-hover table-striped'>
                                <thead className='bg-dark text-white'>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 {
                                    this.state.users.map((user)=>{
                                       return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                 }
                                </tbody>
                            </table>


                        </> : <h2></h2>
                    }

                </div>

            </div>

        </div>
    }
}



export default User