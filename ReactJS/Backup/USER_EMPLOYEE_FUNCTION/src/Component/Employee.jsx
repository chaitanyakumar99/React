
let Employee=(props)=>{
    return <div>
        <h2>Employee component</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Employee id:{props.id}</h3>
        <h3>Employee Name:{props.name}</h3>
        <h3>Employee loc:{props.loc}</h3>
    </div>
    }
    export default Employee