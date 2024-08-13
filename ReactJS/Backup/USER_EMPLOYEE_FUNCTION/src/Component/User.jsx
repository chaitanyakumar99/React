
import Employee from "./Employee"
let User = () => {
    let uid=101;
    let uname="KK"
    let loc="Bangalore"
    return <div>
        <h2>User component</h2>
        <hr />

        <Employee id={uid}  name={uname} loc={loc}/>
    </div>
}
export default User