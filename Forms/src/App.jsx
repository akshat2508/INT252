import React, { useState } from 'react'
import Form from './components/Form'
import MyContext from '../../todo/src/components/MyContext';
import Footer from './components/Footer';

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
    <> <div className=' flex flex-col min-h-screen'>
    <MyContext.Provider value = {{handleAddData , handleDelete  , handleSearch , regNo , data}}>
      <div className='flex-grow'>
    <Form/>
    </div>
    </MyContext.Provider>
    <Footer/>
    </div>
    </>
    
  )
}

export default App