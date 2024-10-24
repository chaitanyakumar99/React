
function ComponentB(props){
    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h2>Employee Id:{props.emp_id}</h2>
        <h2>Employee Name:{props.emp_name}</h2>
        <hr />
        <h2>Countries:{props.countries}</h2>
    </div>
}

export default ComponentB