import react from 'react'

class One extends react.Component {
    state = {
        msg: "Hello"
    }
    gmHandler = () => {
        this.setState({ msg: "goood morning" })
    }
    render() {
        return <div>
            <h1>This is a One comonent</h1>
            <h2>msg:{this.state.msg}</h2>
            <button onClick={this.gmHandler}>clickme</button>
        </div>
    }
}
export default One