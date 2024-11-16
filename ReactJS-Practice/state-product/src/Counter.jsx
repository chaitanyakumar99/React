import React, { Component } from 'react'

class Counter extends Component {
    state = {
        qty: 1
    }
    Incrhandeler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    DecrHandeler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    render() {
        return ( 
            <div>
                <div className="container mt-5" >
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h2>Qty:{this.state.qty}</h2>
                                </div>
                                <div className="card-body">
                                    <button className='btn btn-success mr-5' onClick={this.Incrhandeler}>Incr</button>
                                    <button className='btn btn-warning'  onClick={this.DecrHandeler }>Decr</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter