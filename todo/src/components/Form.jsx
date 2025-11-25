import React from 'react'
import FormInput from './FormInput'
import FormOutput from './FormOutput'
const Form = ({handleFunction , data, handleDelete}) => {
  return (
    <>
    <FormInput handleFunction={handleFunction}/>
    <FormOutput handleDelete={handleDelete} data={data}/>
    </>
  )
}

export default Form