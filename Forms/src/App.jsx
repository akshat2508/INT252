import React, { useState } from 'react'
import Form from './components/Form'
import MyContext from '../../todo/src/components/MyContext';

const App = () => {
  let [data , setData] = useState([]);
  let [regNo , setReg] = useState("");

  function handleAddData(e)
  {
      setData((old) => [...old, e])
  }
  function handleDelete(index)
  {
    setData((old) =>  old.filter((value , i) => i !== index))
  }
  function handleSearch(regno)
  {
      setReg(regno.current.value);

  }
  return (
    <MyContext.Provider value = {{handleAddData , handleDelete  , handleSearch , regNo , data}}>
    <Form/>
    </MyContext.Provider>
    
  )
}

export default App