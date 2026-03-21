 import React from 'react'
 import Card from './components/card'
 
 const App = () => {
   return (
     <div className='parent'>  
       <Card user = {"priya."} age = {20} img = 'https://images.unsplash.com/photo-1773672726538-885c0d878033?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Card user = {"shubh"} age = {20} img = 'https://images.unsplash.com/photo-1773844876662-6b6901484879?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
     </div>
   )
 }
 
 export default App
 

// function abc(){
//   console.log("hello",a);

// }

// abc(10)