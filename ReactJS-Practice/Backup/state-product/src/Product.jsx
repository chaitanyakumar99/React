import React, { Component } from 'react'

class Product extends Component {
    state={
        product_Name:"SAMSUNG Galaxy S23 Ultra 5G (Green, 256 GB)",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/5/1/-original-imagzm8pvabtmeys.jpeg?q=70",
        price:9500,
        Qty:1
    }
    incHandeler=()=>{
        this.setState({Qty:this.state.Qty +1})
    }
    decHandeler=()=>{
        this.setState({Qty:this.state.Qty -1})
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <table className='table table-hover'>
                                <thead className='bg-info text-white'>
                                 <th>Name</th>
                                 <th>Image</th>
                                 <th>Price</th>
                                 <th>Qty</th>
                                 <th>Total Price</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.product_Name}</td>
                                        <td><img src={this.state.image} height="100px" /></td>
                                        <td>{this.state.price}</td>
                                        <td><i className="fa fa-plus-circle" onClick={this.incHandeler}></i>{this.state.Qty}<i className="fa fa-minus-circle" onClick={this.decHandeler}></i></td>
                                        <td>{this.state.Qty * this.state.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product