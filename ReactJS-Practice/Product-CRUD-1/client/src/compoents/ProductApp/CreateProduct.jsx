import React, { useState } from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
const CreateProduct = () => {
    let navigate = useNavigate();
    let [product,setProduct]  = useState({name:"",image:"",price:0,qty:1,info:""})
    let [flag,setFlag] = useState(false);
    let updateHandler = (event)=>{
        setProduct({...product,[event.target.name]:event.target.value})
    }
    let updateImageHandler=  (event)=>{
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener("load",async()=>{
            if(reader.result){
                setProduct({...product,image:reader.result})
            }
            else{}
        })
    }
    let submitHanlder=(event)=>{
       event.preventDefault();
       Axios.post('http://127.0.0.1:5000/api/products',product)
        .then((response)=>{
            console.log(response)
            setFlag(true);
        })
        .catch((err)=>{console.log(err)})
    }

        return <div className="container mt-5">
                <pre>{JSON.stringify(product)}</pre>
                {
                  flag == true ?
                   <>
                    {
                        navigate("/admin")
                    }
                   </> : 
                  <>
                   <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h5>Create New Product</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitHanlder}>
                                    <div className='form-group'>
                                        <input type="text" className='form-control' placeholder='Product Name' onChange={updateHandler} name="name" />
                                    </div>
                                    <div className='form-group'>
                                        <input type="file" className='form-control' placeholder='Image' onChange={updateImageHandler} name="image"/>
                                    </div>
                                    <div className='form-group'>
                                        <input type="number" className='form-control' placeholder='Price' onChange={updateHandler} name="price"/>
                                     </div>
                                     <div className='form-group'>
                                         <input type="number" className='form-control' placeholder='QTY' onChange={updateHandler} name="qty"/>
                                     </div>

                                     <div className='form-group'>
                                        <input type="text" className='form-control' placeholder='More Info' onChange={updateHandler} name="info" />
                                    </div>
                                    <input className='btn btn-warning' type="submit" value="Create Product" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                  </>  
                }

               
                </div>
}

export default CreateProduct