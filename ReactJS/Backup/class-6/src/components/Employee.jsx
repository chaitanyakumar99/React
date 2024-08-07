let Employee = (props) => {

    return <div> 

        <h1>Employee component</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h1>Id:{props.id}</h1>
        <h2>name:{props.name}</h2>
    </div>

}

export default Employee



