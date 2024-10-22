import CompB from "./ComponentB"

function CompA() {
let eid=101
let ename="Rahul"
    return <div>
        <h2>Component A</h2>
        <hr />
        {/* <CompB prop1={["A","B","C"]} prop2={"GM"}/> */}
        <CompB employee_id={eid} employee_name={ename}/>
    </div>
}

export default CompA