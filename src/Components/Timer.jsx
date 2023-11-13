import React, { useEffect, useState } from 'react'

function Timer({setStop,questionNumber}) {
    const [timer,setTimer] = useState(30)

    useEffect(()=>{
        if(timer === 0) return setStop(true)
        const interVel = setInterval(()=>{
          setTimer((prev)=>prev -1)
        },1000)
        return () => clearInterval(interVel)
    },[setStop,timer])

    useEffect(()=>{
       setTimer(30)
    },[questionNumber])
  return (
    <div>
        {timer}
    </div>
  )
}

export default Timer