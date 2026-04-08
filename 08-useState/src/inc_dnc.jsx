import React, {useState} from 'react'

const inc_dnc = () => {

    const [num, setNum] = useState(0)

    function increase(){
     setNum(num+1)
    }

    function decrease(){
        setNum(num-1)
    }



  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default inc_dnc
