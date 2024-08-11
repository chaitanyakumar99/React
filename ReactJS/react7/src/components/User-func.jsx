import Employee from "./Employee";
let User=()=>{
    let uId=101;
    let uName="Rahul"
    return <div>
        <h2>User Component</h2>
        <hr />
        <Employee id={uId} name={uName} loc={"chennai"}/>
    </div>
}

export default User