import React from 'react'

const Color = ({ onColorChange }) => {
  const handleColorChange = (e) => {
    onColorChange(e.target.value)
  }

  return (
    <>
      <div>
        <div className="catogery">Color</div>
        <div className='text-left ml-4 mt-6 font-[arial] text-sm'>
          <div>
            <input
              type="radio"
              name="color"
              id="all-color"
              value="all"
              defaultChecked
              onChange={handleColorChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="all-color">All</label>
          </div>
          <div>
            <input
              type="radio"
              name="color"
              id="black"
              value="black"
              onChange={handleColorChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="black">Black</label>
          </div>
          <div>
            <input
              type="radio"
              name="color"
              id="blue"
              value="blue"
              onChange={handleColorChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="blue">Blue</label>
          </div>
          <div>
            <input
              type="radio"
              name="color"
              id="green"
              value="green"
              onChange={handleColorChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="green">Green</label>
          </div>
          <div>
            <input
              type="radio"
              name="color"
              id="red"
              value="red"
              onChange={handleColorChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="red">Red</label>
          </div>
          <div>
            <input
              type="radio"
              name="color"
              id="white"
              value="white"
              onChange={handleColorChange}
              className='mr-5 mb-3 accent-green-400 cursor-pointer'
            />
            <label htmlFor="white">White</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Color;