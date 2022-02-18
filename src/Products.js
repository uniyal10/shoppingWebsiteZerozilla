import axios from "axios";
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import Product from "./Product";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  let [isProducts,setProductsStatus] = useState(true);
  let [isProduct,setProductStatus] = useState(false);
  let [product,setProduct] = useState([]);
  useEffect(() => {
    let id= props.id
    axios
      .get(`https://fakestoreapi.com/products/category/${id}`)
      .then((res) => {
        setProducts(res.data)
        console.log(res.data)
        setProductsStatus(true)
      });
  }, [props.id]);
if(isProducts)
return(
products.map(product=>{
    return <div onClick={()=>{setProduct(products.filter(p=>p.id==product.id));setProductStatus(true);setProductsStatus(false)}} style={product}>
      <a>
        <img style={imgStyle} src={product.image} />
        </a><hr />
    <h2 style={{ color:"black"}}>${product.price}</h2>
    <h3 style={{ color:"black"}}>{product.title}</h3>
    </div>
  })
)
if(isProduct)
return(
  <Product p={product}/>
)
}



const imgStyle = {
  padding:"20px",
  width:"100px",
  height:"100px",
  borderRadius:"8px",
  backgroundColor:"#e3efff",
  margin:"20px 50px"
}
const product={
 
}
