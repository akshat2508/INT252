
import React , { useState } from 'react'
import Form from "./components/Form"

const App = () => {
  let [data,  setData] = useState([]);
  function handleAddData(e)
  {
    setData((old) => [e, ...old])
  }
 function handleDeleteData(index) {
  setData(old => old.filter((value, i) => i !== index));
}

  return (
    <div>
      <Form handleFunction={handleAddData} data={data} handleDelete={handleDeleteData} />
      </div>
  )
}

export default App