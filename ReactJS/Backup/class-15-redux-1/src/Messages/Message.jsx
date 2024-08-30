import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gmAction, geAction, gnAction } from '../redux/Messages/message.action'
const Message = () => {

    let dispatch = useDispatch;
    let message = useSelector((state) => {
        return state
    })
    
    let gmHandeler = () => {
        dispatch(gmAction())
    }

    let geHandeler = () => {
        dispatch(geAction())
    }
    return <div>
        <h2>Message Component</h2>
        <pre>{JSON.stringify(message)}</pre>
        <h4>value:{message.msg}</h4>
        <button onClick={gmHandeler}>GM</button>
        <button onClick={geHandeler}>GE</button>
        <button onClick={() => {
            dispatch(gnAction)
        }}>GN</button>
    </div>

}

export default Message