"use client"
import React, { useState, useEffect } from 'react';
import { API } from "@/services/api";
import Link from "next/link";
import { FaExternalLinkAlt } from 'react-icons/fa'; // Importing an icon for external links

async function onButtonClick(productObj) {
  const userEmail = window.prompt("Please enter your email to track this product:");
  if (userEmail !== null) {
    const requestData = {
      email: userEmail,
      product: productObj,
    };

    const response = await API.post("/tracker/", requestData);
    console.log(response);

  };
}

const ProductCards = ({ products }) => {

  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (!initialLoad && (!products.data || products.data.length === 0)) {
      alert("No products found");
    }
    setInitialLoad(false);
  }, [products]);

  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {products.data && products.data.map((product, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className=" h-64 overflow-hidden rounded-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex-1 flex flex-col mt-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-sm text-gray-500 mb-4">${product.price}</p>
              <p className="text-sm text-gray-500 mb-4">{product.description}</p>
              <div classname="flex items-center">
                <Link href={product.link} target='_blank' className='inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200 ease-in-out'>
                  <span>Goto site</span>
                  <FaExternalLinkAlt className="ml-1" />
                </Link>
                <button type="button" onClick={() => onButtonClick(product)} className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Track
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;