import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import MyContext from '../../todo/src/components/MyContext';
import Footer from './components/Footer';
import axios from 'axios';
const App = () => {
  // let [fetchData , setFetchData] = useState();
  let [data , setData] = useState([]);
  let [regNo , setReg] = useState("");

//   useEffect(() => {
//   fetch("https://69365c77f8dc350aff309813.mockapi.io/todo/tasks")
//     .then(res => res.json())
//     .then((res) => {console.log(res)})
//     // .then(data => setData(data))
//     .catch(err => console.log(err));
// }, []);

useEffect(() => {
  axios
    .get("https://69365c77f8dc350aff309813.mockapi.io/todo/tasks")
    .then(res => {
      console.log(res.data);   // axios stores response body in res.data
      setData(res.data);    // uncomment when you want to update state
    })
    .catch(err => console.log(err));
}, []);



function handleAddData(e) {
  axios
    .post("https://69365c77f8dc350aff309813.mockapi.io/todo/tasks", e)
    .then(res => {
      console.log("Saved:", res.data);   // response contains the real saved object
      setData(old => [...old, res.data]); // add the real item with ID
    })
    .catch(err => console.log(err));
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