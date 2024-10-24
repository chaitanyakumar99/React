import React from "react";
import Employee from "./Employee";

class User extends React.Component{
 empId=101
 empName="Varma"
 empDetails={
    loc:"Hyderabad",
    email:"varma@123.com",
    sal:45000,
 }

    render(){
        return <div>
            <h2>User Component</h2>
            <hr />  
            <Employee empId={this.empId} empName={this.empName} empDetails={this.empDetails}/>
        </div>
    }
}

export default User