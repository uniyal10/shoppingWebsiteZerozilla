import { useEffect,useState } from "react"


export default function Cart(){
    const [cartList,setCartList] = useState([]);
  
    useEffect(()=>{
       let data = localStorage.getItem("cartData")
       console.log(data,"cart data");
    })
   return(
      <div></div>
   )
}