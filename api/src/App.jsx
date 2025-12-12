import React, { useState } from 'react'

const App = () => {
  let [userName , setUserName]  = useState();
  let [email , setEmail] = useState();
  let [phone , setPhone] = useState();
  let [pass , setPass] = useState();
  function handleSubmit(e)
  {
      const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      e.preventDefault();
      if(!userName || !email || !phone || !pass || userName.length < 3 )
      {
        alert("invalid input");
      }
      if(!strongRegex.test(pass))
      {
        alert("password must contain alphabets , number and a special character ")
      }
      else if(pass.length < 6)
      {
        alert("passowrd should be of atleast 6 characters ")
      }
      else{
        alert("formm submmited successfullt");
      }
  }
  return (
    <>
    <div className='bg-black text-white p-3 m-3'>
      <form onSubmit={(e) => handleSubmit(e)} action="" className='flex justify-between bg-amber-600 p-4' >
        <input type="text" name='name' placeholder='enter your name' onChange={(e) => {setUserName(e.target.value)}} className='border-2 p-3 rounded-xl' required/>
        <input type="email" name='email' placeholder='enter email' onChange={(event) => {setEmail(event.target.value)}} className='border-2 p-3 rounded-xl' required />
        <input type="number" name='number' placeholder='enter number' onChange={(event) => {setPhone(event.target.value)}} className='border-2 p-3 rounded-xl' required />
        <input type="password" name='password' placeholder='enter password' onChange={(event) => {setPass(event.target.value)}} className='border-2 p-3 rounded-xl' required />
        <input type="submit"  value='click to the submit' className='border-2 bg-green '/>
      </form>
    </div>
    </>
  )
}

export default App