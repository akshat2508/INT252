import React, { useContext, useRef } from 'react'
import { myContext } from './myContext';

const FormInput = () => {
  const inputData = useRef(null);

  const addData = useContext(myContext);

  const handleClick = () => {
    const value = inputData.current.value;

    addData(value); 

    console.log("Input Value:", value);
    inputData.current.value = "";
  };

  return (
    <div>
      <input type="text" ref={inputData} />
      <button onClick={handleClick}>Click to Add</button>
    </div>
  );
};

export default FormInput; - FORMINPUT.JSX