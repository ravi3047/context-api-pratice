import React from 'react'
import "./Product.css"

function Product({Title}) {
  return (
    <div className='Product'>
        <div>
        <h1>{Title}</h1>
      <p>This is the product page.</p>
   
      </div>
    </div>
  )
}

export default Product
