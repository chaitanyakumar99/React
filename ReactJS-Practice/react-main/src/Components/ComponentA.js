import CompB from "./ComponentB"

function CompA() {

    return <div>
        <h2>Component A</h2>
        <hr />
        <CompB msg={"GM"}/>
    </div>
}

export default CompA