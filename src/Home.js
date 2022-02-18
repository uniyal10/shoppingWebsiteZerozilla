
import  React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Products from './Products'
export default function Home(){
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState("");
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/categories")
    .then(res=>{
      setCategories(res.data)
    })
  },[])
 return (
   <main style={main}>
   <div>
     {
       categories.map(category=>{
         return <button style={btnStyle} onClick={()=>setId(category)}>{category}</button>
       })
     }
    
   </div>
 <div style={productStyle}>
 {
  id?<Products id={id}/>:<></>
 }
 </div>
</main>
 )
 
}

const productStyle=
{display:"flex",
 justifyContent:"space-between",
 width:"90%"
}

const main={
  width:"90%",
  textAligns:"center"
}
const btnStyle={
  padding:"10px 20px",
  margin:"20px",
  border:"none",
  borderRadius:"2px",
  backgroundColor:"#f72d8b",
  color:"white",
  fontWeight:"10px"
}