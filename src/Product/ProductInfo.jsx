import React from 'react'
import { AiFillStar } from "react-icons/ai";

const ProductInfo = ({img, title, star, reviews, prevPrice, newPrice, company, color, category}) => {
  return (
    <>
      <div className='border border-gray-300 rounded-md p-4 m-4 w-[250px]'>
        <div className="product-image mb-2">
          <img src={img} alt={title} className="w-full h-auto" />
        </div>
        <div className="product-details">
          <h1 className="font-bold text-lg mb-1">{title}</h1>
          <div className="rating flex items-center mb-1">
            <AiFillStar className="text-yellow-400" />
            <span className="ml-1">{star}</span>
            <span className="ml-2 text-gray-600">({reviews})</span>
          </div>
          <div className="price font-bold mb-1">
            <del className="text-gray-500 mr-2">${prevPrice}</del>
            <span className="text-green-600">${newPrice}</span>
          </div>
          <div className="company text-gray-600">
            <p>{company}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo