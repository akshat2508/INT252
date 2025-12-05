import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import ProductForm from './components/ProductForm';
const App = () => {
  let [data , setData] = useState([]);
  function handleAddData(e)
  {
    setData((old) => [...old , e]);
  }

  function handleDeleteData(index)
  {
    setData((old) => (old.filter((value , i) => i !== index)));
  }

  return (
     <><div className='flex flex-col min-h-screen'>
     <Navbar  handleAddData={handleAddData}/>
     <div className="grow">
     <ProductForm  data={data} handleDelete={handleDeleteData}/>
     </div>
     <Footer/>
     </div>
     
     </>
  )
}

export default App