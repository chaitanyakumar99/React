import react from 'react'
import Axios from 'axios'
class User extends react.Component {
    state={
        users:[]
    }
    componentDidMount(){
      Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((resp)=>{
        this.setState({users:resp.data})
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
              this.state.users.map((User)=>{
                return <tr key={User.id}>
                  <td>{User.id}</td>
                  <td>{User.name}</td>
                  <td>{User.email}</td>

                </tr>
              })
            }
          </tbody>
         </table>

         </> : <h3>No Data</h3>
          
        }
        </div>
    )
  }
}

export default User