import { useState } from "react"

const Product = () => {
    let [pname, setpname] = useState('text product')
    let uphandeler = (productName) => {
        setpname(productName)
    }
    return <div>
        <h3>Products</h3>
        <h3>Product Name:{pname}</h3>
        <img onClick={uphandeler.bind(null,"Iphone")} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_Fy1xA6QXGQ23xdAISVzYAOadC6WO7IKwcnQRIxNYr1WYOiJcY-d6RdYWT5mov_rmNYpgoU9vf2Z0k9ZP_D9psYXPhrvlK30Y7dXEyizYuHowXU1TRWQha4lCnWl9vSMmna4dIK8&usqp=CAc" />
        <img onClick={uphandeler.bind(null,"Samsung")} src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQzIrgZh4d0xOrMlP8nN-Q1e-10_-9Pzc77EHxqX5TldKeUbqJFoJ7ONjUmhHGNZK98uaxzdam3_7hfDZ4kMT317s9H97m5xPZRfXR03c9xBrkWEFvJMGUTL0tY8A5Y2UDKNID45N0&usqp=CAc"/>
        <img onClick={uphandeler.bind(null,"Vivo")} src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQf4ciPUnHFV8rvZX0W69XNxxVVFNfrk8RAzfikVcOgCR7KJhWEjWfefPQM03xDCjwEyWJApPXcj8lhgdS-z49NOLqpJ5Rzxnw8y-94sTH6cegyLyanMzAJimB9GLFdyG08_EzbMWVVDw&usqp=CAc"/>
    </div>
}

export default Product
