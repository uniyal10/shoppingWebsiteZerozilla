import {useState} from 'react'
import Cart from './Cart'
export default function Header(){
  const [isCart,setCartStatus] = useState(false)
return (
  <>
    <header style={headerStyle}>
    <h2>Online Shoping Website</h2>
    <div style={{margin:"0px 0px 0px 500px"}}>
           <h1><i class="fa-solid fa-cart-arrow-down"></i></h1>
    </div>
    <Cart />
  </header>
  
  </>
)

}
 const headerStyle = {
   display:"flex",
   justifyContent:"center",
   backgroundColor :'#0066ff',
   width:'90%',
   padding:'10px',
   fontSize:"20px",
   margin:"20px",
 }