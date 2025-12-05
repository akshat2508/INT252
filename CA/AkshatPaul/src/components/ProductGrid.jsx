import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = ({data,handleDelete}) => {
  return (
    <><div className='grid grid-cols-3 gap-6 m-5'>
    <ProductCard data={data} handleDelete={handleDelete} />
    </div>
    </>
  )
}

export default ProductGrid