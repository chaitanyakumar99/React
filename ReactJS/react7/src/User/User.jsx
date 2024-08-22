import React, { Component, Fragment } from 'react'
import Axios from 'axios'
class User extends Component {
    state={
        users:[]
    }
    componentDidMount(){
      Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((resp)=>{
        console.log(resp);
      })
      .catch()
    }
  render() {
    return (
      <div>
        <h3> User Component</h3>
        <pre>{JSON.stringify(this.state.users)}</pre>
        {
         this.state.users.length > 0 ?  <>
         <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
         </table>

         </> : <h3>No Data</h3>
          
        }
        </div>
    )
  }
}

export default User