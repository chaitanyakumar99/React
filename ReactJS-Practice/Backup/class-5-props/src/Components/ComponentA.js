import CompB from "./ComponentB"

function CompA() {
let eid=101
let ename="Rahul"

    return <div>
        <h2>Component A.</h2>
        <hr />
        <CompB emp_id={eid} emp_name={ename}/>
        <CompB prop1={["A","B","C"]} prop2={"GM"}/>
        <CompB employee_id={eid} employee_name={ename} msg={"GM"}/>
        {/* <CompB one={1} two={2} three={[1,2,3]} four={{id:101}}/> */}

    </div>
}

export default CompA