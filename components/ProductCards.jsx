"use client"
import React from 'react'

//const productsio=[]
const ProductCards = ( {products} ) => {
  console.log(typeof products.data);
  console.log(products)
  return (
    <div>ProductCards
      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {products.data ? products.data.map((product, index) => (
          <div key={index} className="border-2 p-4 rounded-md">
            <div className="flex justify-center">
              <img src={product.image} alt={product.name} className="w-40 h-40" />
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-sm text-gray-500">{product.price}</p>
              <p className="text-sm text-gray-500">{product.descripion}</p>
            </div>
          </div>
        )): null}
      </div>
    </div>
  )
}

export default ProductCards