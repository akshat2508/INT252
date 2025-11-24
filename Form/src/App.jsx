import React, { useState } from 'react'
import { myContext } from './myContext'
import Form from './Form'

const App = () => {
  const [data, setData] = useState([])

  // function to update data
  const addData = (value) => {
    setData([...data, value])
    console.log("Updated Data:", [...data, value])
  }

  return (
    <div>
      <myContext.Provider value={addData}>
        <Form />
      </myContext.Provider>
    </div>
  )
}

export default App