import React from 'react';

class Product extends React.Component {
    state = {
        qty: 1
    }
    incHandeller = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    descHandeller1 = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    render() {
        return <div>
            <button onClick={this.descHandeller1}>-</button>
            {this.state.qty}
            <button onClick={this.incHandeller}>+</button>

        </div>
    }
}

export default Product