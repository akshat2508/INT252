import React, { useRef, useState } from 'react';

const Reminder = () => {
  const inputData = useRef();
  const [data, setData] = useState([]);

  function handleClick() {
    const value = inputData.current.value.trim();

    if (!value) return; // prevent empty items

    setData([value, ...data]);
    inputData.current.value = '';
  }

  return (
    <>
      <div className='flex justify-evenly items-center mt-50'>
        <input 
          type="text" 
          ref={inputData} 
          className="border px-2 py-1"
        />
        <button 
          onClick={handleClick}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Click to add
        </button>
      </div>

      <div className="mt-4">
        {data.map((item, index) => (
          <div key={index} className="p-2 border-b">
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Reminder;
