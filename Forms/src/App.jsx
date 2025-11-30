import React, { useState } from 'react'
import Form from './components/Form'

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
    <>
    <Form handleFunction={handleAddData} data={data} handleDelete={handleDelete} handleSearch={handleSearch} regNo={regNo}/>
    </>
  )
}

export default App