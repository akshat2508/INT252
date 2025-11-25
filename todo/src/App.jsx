
import React , { useState } from 'react'
import Form from "./components/Form"

const App = () => {
  let [data,  setData] = useState([]);
  function handleAddData(e)
  {
    setData((old) => [e, ...old])
  }
 function deleteData(index) {
  setData(old => old.filter((_, i) => i !== index));
}

  return (
    <div>
      <Form handleFunction={handleAddData} data={data} handleDelete={deleteData} />
      </div>
  )
}

export default App