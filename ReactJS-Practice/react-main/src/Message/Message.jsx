
import React, { useState } from 'react';

const Message = () => {
    const [message, setMessage] = useState("hello");

    const upHandler = (value) => {
        setMessage(value);
    };

    return (
        <div>
            <h2>Message: {message}</h2>
            <button onClick={() => upHandler("Good Morning")}>Gm</button>
            <button onClick={() => upHandler("Good Afternoon")}>GA</button>
            <button onClick={() => upHandler("Good Evening")}>GE</button>
        </div>
    );
};

export default Message;
