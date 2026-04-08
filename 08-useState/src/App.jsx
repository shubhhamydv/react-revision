 
 import React, { useState } from 'react'

 const App = () => {
   
  const [num, setNum] = useState(10)
  const [userName, user] = useState("shubham")

  function changeNum(){
    setNum(30)
    user("priya")
  }

   return (
    <div>
    <p>my value is {num} and the coder is {userName}</p>
    <button onClick={changeNum}> Click</button>
    </div>
    
   )
 }
 
 export default App
 