import React from 'react'
import {useDispatch} from 'react-redux'
import {incrAction,decrAction} from '../Redux/Products/Product.action'


let increamentHandeler=()=>{
    dispatch(incrAction())
}

let decreamentHandeler=()=>{
    dispatch(decrAction())
}

let Product = () => {
    return <div>
        <button onClick={decreamentHandeler}>-</button>
        {1}
        <button onClick={increamentHandeler}>+</button>
    </div>

}

export default Product 