import React from 'react'

const Price = ({ onPriceChange }) => {
  const handlePriceChange = (e) => {
    onPriceChange(e.target.value)
  }

  return (
    <>
      <div>
        <div className="Price">Price</div>
        <div className='text-left ml-4 mt-6 font-[arial] text-sm'>
          <div>
            <input
              type="radio"
              name="price"
              id="all-price"
              value="all"
              defaultChecked
              onChange={handlePriceChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="all-price">All</label>
          </div>
          <div>
            <input
              type="radio"
              name="price"
              id="0-50"
              value="0-50"
              onChange={handlePriceChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="0-50">$0 - $50</label>
          </div>
          <div>
            <input
              type="radio"
              name="price"
              id="50-100"
              value="50-100"
              onChange={handlePriceChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="50-100">$50 - $100</label>
          </div>
          <div>
            <input
              type="radio"
              name="price"
              id="100-150"
              value="100-150"
              onChange={handlePriceChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="100-150">$100 - $150</label>
          </div>
          <div>
            <input
              type="radio"
              name="price"
              id="over150"
              value="over150"
              onChange={handlePriceChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="over150">Over $150</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Price