import Employee from './Employee'
let User = () => {
    let uid = 101
    let uname = "kk"
    let location = "hyderabad"
    return <div>
        <h1>User component</h1>
        <hr />
        <Employee id={uid} name={uname} loc={location} />

    </div>
}

export default User