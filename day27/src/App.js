import React, { useEffect, useState } from 'react'
import Progress from './Progress'

const App = () => {

  const [count, setCount] =useState(0) 
  useEffect( ()=>{
     const interval = setInterval(()=>{
     if (count < 100){
      setCount((counts)=>counts+1)
     }

    },20)
    return ()=>{
      clearInterval(interval)
     }

  },[count])

  return (
    <>
      <Progress progress={count} color={"red"}/>
      <Progress progress={count} color={"blue"}/>
      <Progress progress={count} color={"yellow"}/>
      <Progress progress={count} color={"orange"}/>
    </>
  )
}

export default App;
