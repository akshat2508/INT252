import React from 'react'
import FormInput from './FormInput'
import FormOutput from './FormOutput'

const Form = ({handleFunction ,data , handleDelete , handleSearch , regNo}) => {
  return (
     <>
        <FormInput handleFunction={handleFunction} handleSearch={handleSearch}/>
        <FormOutput data={data} handleDelete={handleDelete} handleSearch={handleSearch} regNo={regNo}/>
       </>
  )
}

export default Form