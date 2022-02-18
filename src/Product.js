import React from 'react'
import Rating from './Rating'
export default function Product(props){
    console.log("inside product",props.p[0])
 return (

   <div style={{display:"flex",margin:"0px 40px"}}>
      <img style={Productimage} src={props.p[0].image} />
      <div style={{margin:"10px"}}>
      <h2 style={{color:"#00f508"}}>{props.p[0].title}</h2>
      <h3 style={{color:"black", backgroundColor:"#dbc416",padding:"10px"}}>{props.p[0].category}</h3>
      <h1 style={{color:"black",backgroundColor:"green"}}>${props.p[0].price}</h1>
      <div style={{color:"black",display:"flex",justifyContent:"center", alignItems:"center"}}>
          <Rating rating={props.p[0].rating.rate}/>
          <h3 style={{margin:"10px",color:"green"}}>Add To Cart---</h3>
         <button style={{border:"none",backgroundColor:"white"}} onClick={()=>{localStorage.setItem("cartData",JSON.stringify(props.p))}}><h1><i class="fa-solid fa-cart-arrow-down"></i></h1></button> 
     </div>
      
      <h5 style={{color:"black", backgroundColor:"#f0e595",padding:"10px"}}>{props.p[0].description}</h5>
      </div>
     
   </div>

 )
   
}

const Productimage = {
    width:"60%",
    height:"60%"
}
