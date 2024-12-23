import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import Catogery from './Catogery/Catogery'
import Color from './Color/Color'
import Price from './Price/Price'

const SideBar = ({ onCategoryChange, onColorChange, onPriceChange }) => {
  return (
    <>
      <div className='w-[15%] h-screen border-r-2 border-gray-300 flex flex-col fixed'>
        <div className="text-3xl flex justify-center mb-20 cursor-pointer">
          <FaShoppingBag />
        </div>
        <div className="flex flex-col gap-4 text-center text-xl font-bold font-arial">
          <Catogery onCategoryChange={onCategoryChange} />
          <Color onColorChange={onColorChange} />
          <Price onPriceChange={onPriceChange} />
        </div>
      </div>
    </>
  )
}

export default SideBar