import './style.css'

let Message = () => {
    let msg="Gm"
    let styles={color:"blue",backgroundColor:'green'}
    return <div>
        <h1 style={{color:'red',backgroundColor:'yellow'}}>Message Component</h1>
        <h2 style={styles}>Welcome to the world</h2>
        <h3 className='msg'>{msg}</h3>
    </div>
}

export default Message