import React from 'react'
import ProductGrid from './ProductGrid'

const ProductForm = ({data,  handleDelete}) => {
  return (
    <>
        <ProductGrid data={data} handleDelete={handleDelete}/>
    </>
  )
}

export default ProductForm