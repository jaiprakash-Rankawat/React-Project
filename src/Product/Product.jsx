import React from 'react'
import ProductInfo from './ProductInfo'

const Product = ({ products }) => {
  return (
    <>
      <div className='ml-60 flex flex-wrap justify-start'>
        {products.map((item, index) => (
          <ProductInfo
            key={index}
            img={item.img}
            title={item.title}
            star={item.star}
            reviews={item.reviews}
            prevPrice={item.prevPrice}
            newPrice={item.newPrice}
            company={item.company}
          />
        ))}
      </div>
    </>
  )
}

export default Product;