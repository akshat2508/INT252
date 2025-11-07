import React, { useState } from 'react'

const App = () => {

  let [count , setCount]= useState(0);

  function handleIncrement()
  {
    if(count  >= 10)
    {
        return;

    }
    setCount(count + 1);
  }

  function handleDecrement()
  {
    if(count === 0)
    {
      return
    }
    
    setCount(count  - 1);
  }
  function handleReset()
  {
    
    setCount(0);
  }
  return (
    <>
    <div className=' flex justify-evenly items-center mt-30'>
      <button onClick={handleIncrement} className='bg-red-400 text-3xl w-40'> + </button>
      <h1 className='p-3 m-3 text-3xl'>{count}</h1>
      <button onClick={handleDecrement} className='bg-red-400 text-3xl w-40'> - </button>
      <button onClick={handleReset} className='bg-green-400 text-3xl w-40'> reset </button>
    </div>

    </>
  )
}

export default App