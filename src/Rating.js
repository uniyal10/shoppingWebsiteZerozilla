import React from 'react'

export default function Rating(props){
    let rating = props.rating
    console.log(props)
    if(rating===0)
   return (
       <div style={{color:"black"}}><h4>Ratings:
           <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
           <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
           <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
           <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
           <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
       </h4>
       </div>
   )
   if(rating>0 && rating<1)
   return (
    <div style={{color:"black"}}><h4>Ratings:
        <span style={ratingStyle}><i class="fa-solid fa-star-half-stroke"></i></span>  
        <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
        <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
        <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
        <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
    </h4>
    </div>

)
if(rating>1 && rating<2)
return (
 <div style={{color:"black"}}><h4>Ratings:
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star-half-stroke"></i></span>  
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
 </h4>
 </div>
 
)
if(rating>2 && rating<3)
return (
 <div style={{color:"black"}}><h4>Ratings:
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star-half-stroke"></i></span>  
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
 </h4>
 </div>
 
)
if(rating>3 && rating<4)
return (
 <div style={{color:"black"}}><h4>Ratings:
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star-half-stroke"></i></span>  
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
   </h4>
 </div>
 
)
if(rating>4 && rating<5)
return (
 <div style={{color:"black"}}><h4>Ratings:
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span>    
       <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star-half-stroke"></i></span>  
     
 </h4>
 </div>
 
)
if(rating===5)
return (
 <div style={{color:"black"}}><h4>Ratings:
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
 </h4>
 </div>
 
)
if(rating===1)
return (
 <div style={{color:"black"}}><h4>Ratings:
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
 </h4>
 </div>
 
)
if(rating===2)
return (
 <div style={{color:"black"}}><h4>Ratings:
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
 </h4>
 </div>
 
)
if(rating===3)
return (
 <div style={{color:"black"}}><h4>Ratings:
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
 </h4>
 </div>
 
)
if(rating===4)
return (
 <div style={{color:"black"}}><h4>Ratings:
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-solid fa-star"></i></span> 
     <span style={ratingStyle}><i class="fa-regular fa-star"></i></span> 
 </h4>
 </div>
 
)
return "null"

}

const ratingStyle = {
    color:"#ffe000"
}
