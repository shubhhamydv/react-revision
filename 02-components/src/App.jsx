import React from 'react'
import Navbar from './component/Navbar'
import card from './component/card'


function App() {

  const user = 'shubham'
  return (
    <div>
      <Navbar />
      <div className='card'>
        <h1> hello everyone I'm {user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores.</p>
      </div>
      
       {card()}
    </div>
  )
}

export default App
