function CompB(props) {
    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Employee Id:{props.employee_id}</h3>
        <h3>Employee Name:{props.employee_name}</h3>
    </div>
}

export default CompB