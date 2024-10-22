function CompB(props) {
    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h2>Wish Message:{props.prop1}</h2>
    </div>
}
  
export default CompB