import React from "react";
class Employee extends React.Component{
    render(){
        return <div>
            <h2>Employee Component</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <h2>{JSON.stringify(this.props.id)}</h2>
            <h2>{JSON.stringify(this.props.name)}</h2>
            <h2>{JSON.stringify(this.props.loc)}</h2>
        </div>
    }
}

export default Employee