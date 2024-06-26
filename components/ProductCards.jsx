"use client"
import React from 'react'
import Link from "next/link";

//const productsio=[]
const ProductCards = ( {products} ) => {
  console.log(typeof products.data);
  console.log(products)
  return (
    <div>
      <div className="grid gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {products.data ? products.data.map((product, index) => (
          <div key={index} className="border-2 p-4 rounded-md">
            <div className="product-image">
              <img 
              src={product.image} 
              alt={product.name} 
              className="mx-auto"
              width={400}
              height={400}
               />
            </div>
            <div className="flex-1 flex flex-col">
              <div className='flex justify-between items-start gap-5 flex-wrap pb-6'>
                <div className='flex flex-col gap-3'>
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <Link 
                  href={product.link}
                  target='_blank'
                  className='text-base text-black opacity-50'
                  >Goto site</Link>
                </div>
                
              </div>
              <p className="text-sm text-gray-500">${product.price}</p>
              <p> </p>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          </div>
        )): null}
      </div>
    </div>
  )
}

export default ProductCards