
// const product = () => {
//  let products={p_namae:"rahul",p_id:"101"}
//   return (
//     <div>product</div>
//     <Cart products={products}/>

//   )
  
// }

import Cart from './Cart'
let Product=()=>{
  let products={
    pname:"iphone",
    pid:101

  }
  return <div>
        <h1>This is A product Component</h1>
        <Cart result={products}/>
  </div>
}

export default Product