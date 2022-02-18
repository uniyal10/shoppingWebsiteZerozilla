import { useEffect,useState } from "react"


export default function Cart(props){
    const [cartList,setCartList] = useState([]);
    console.log(props)
  
    useEffect(()=>{
       let data = JSON.parse(localStorage.getItem("cartData"));
       setCartList(data)
    },[])
   return(
     <div style={listStyle}>
      {
          cartList.map(list=>{
              return <li style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px"}} >
                  <img style={{width:"100px",height:"100px"}} src={list.image}/>
                  <div>{list.title} <h2>${list.price}</h2><h1><a style={{border:"1px solid black",backgroundColor:"green",padding:"10px",borderRadius:"8px"}}>Checkout</a></h1></div>
                  <button style={{color:"red",border:"1px solid black", backgroundColor:"#ffdee2"}} onClick={()=>{props.cartstatus(false)}}><h3>Remove</h3></button>
                  </li>
          })
      }
     </div>
    
   )
   return null
}

const listStyle ={
listStyleType:"none",
display:"flex",
color:"black",
position:"absolute",
margin:"8% 50% 70% 35%",
width:"50%",
backgroundColor:"#ffadb7"
}
