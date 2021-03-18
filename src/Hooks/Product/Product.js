import React,{useState} from 'react';

let Product=()=>{
    let [Product, setProduct]=useState({
        product_Name: "Grabo G106 (Dark Blue)",
        price:659,
        image: "https://rukminim1.flixcart.com/image/312/312/k6jnfrk0/mobile/6/2/s/grabo-g106-g106-original-imafzynazsfhmbgj.jpeg?q=70",
        qty: 0,
    });
    return(
    <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-8">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{Product.product_Name}</td>
                            <td><img src={Product.image} height="80px" width="70px"/></td>
                            <td><i className="fa fa-minus-circle" onClick={()=>{setProduct({...Product, qty:Product.qty-1})}}></i> 
                            {product.qty}
                            <i className="fa fa-plus-circle" onClick={()=>{setProduct({...Product, qty:Product.qty+1})}}></i> </td>
                            <td>{Product.price}</td>
                            <td>{Product.qty * Product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
    )
}
export default Product;