import React,{useRef} from 'react'

function Start({setUserName}) {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value);
      };
  return (
    <div className='start'>
      <h1>React Quiz</h1>
      <input  placeholder='Enter Your Name' className='startInput' ref={inputRef}/>
      <button className='startButton' onClick={handleClick}>Start</button>
    </div>
  )
}

export default Start