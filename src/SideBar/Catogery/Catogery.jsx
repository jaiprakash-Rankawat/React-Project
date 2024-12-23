import React from 'react'

const Catogery = ({ onCategoryChange }) => {
  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value)
  }

  return (
    <>
      <div>
        <div className="catogery">Category</div>
        <div className='text-left ml-4 mt-6 font-[arial] text-sm'>
          <div>
            <input
              type="radio"
              name="category"
              id="all"
              value="all"
              defaultChecked
              onChange={handleCategoryChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="sneakers"
              value="sneakers"
              onChange={handleCategoryChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="sneakers">Sneakers</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="flats"
              value="flats"
              onChange={handleCategoryChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="flats">Flats</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="heels"
              value="heels"
              onChange={handleCategoryChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="heels">Heels</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catogery