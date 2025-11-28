
import React , { useState } from 'react'
import Form from "./components/Form"
import MyContext from './components/MyContext';

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
    <>
    <MyContext.Provider value={{handleAddData , handleDeleteData , data}}>

      <Form />
    </MyContext.Provider>



      </>
  )
}

export default App