import { useState } from "react"

let Product=()=>{

    let [PName,setPName]=useState('Test Product')
    let upHandeler=(value)=>{
         setPName(value)
    }

    return <div>
        <h1>Product Name:{PName}</h1>
        <img onClick={upHandeler.bind(null,"Samsung")} src="https://m.media-amazon.com/images/I/81vxWpPpgNL.jpg" width="500" />
        <img onClick={upHandeler.bind(null,"iphone")} src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-pro-max-gold.png?v=b3d8c0ae" width="500" />

    </div>

}

export default Product