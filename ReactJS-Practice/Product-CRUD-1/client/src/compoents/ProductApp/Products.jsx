import React, { useEffect, useState } from 'react'
import Axios  from 'axios';
const Products = () => {
  let [products,setProducts]=useState([]);

  useEffect(()=>{
    Axios.get('http://127.0.0.1:5000/api/products').then((resp)=>{
      setProducts(resp.data)
    }).catch(()=>{})
  },[]);
  
  return (
    <div className='container'>
    <h1>Products Comonent</h1>
    <pre>{JSON.stringify(products)}</pre>
          <div className="row">
            {
              products.length>0 ? <>
              {
                products.map((product)=>{
                  return <div className="col-3">
                      <div className="card">
                        <div className="card-header">
                          {/* <!-- image -->*/}
                          <img src={product.image} alt="" />
                        </div>
                        <div className="card-body">
                          <ul className='list-group'>
                            <li className='list-group-item'>{product.name}</li>
                            <li className='list-group-item'>{product.price} &#8377; </li>
                         
                            <li className='list-group-item'><button className='btn btn-warning'>Add Cart</button></li>
                          </ul>
                        </div>
                      </div>
                  </div>
                })
              }
              </>:<>No Data</>
            }
          </div>
       
    </div>
  )
}

export default Products