 import React from 'react'
 
  function Card(props){
    console.log(props.user, props.age);
   return <div className='card'>
   <img src= {props.img} alt="" />
         <h1>{props.user}, {props.age}</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ab laborum explicabo reprehenderit nihil autem iusto.</p>
          <button>View Profile</button>
      </div> 

     
 }
 
 export default Card
