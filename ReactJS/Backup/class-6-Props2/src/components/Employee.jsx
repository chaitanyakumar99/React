let Employee=(props)=>{
    return <div>
        <h1>Employee Component</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Employee Id:{props.id}</h3>
        <h3>Employee Name:{props.name}</h3>
        <h3>Employee loc:{props.loc}</h3>
    </div>
}
export default Employee