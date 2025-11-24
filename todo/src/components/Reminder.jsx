import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);  

  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-3xl font-bold mb-4">Count: {count}</h1>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default Counter;
