import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Nav = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value)
  }

  return (
    <>
      <div className="flex justify-around mt-8">
        <div className="input">
          <input
            type="text"
            placeholder="Search Products..."
            className="bg-slate-200 border border-gray-300 rounded-md py-2 px-6"
            onChange={handleSearchChange}
          />
        </div>
        <div className="logo flex gap-4">
          {/* 1. heart
          2. cart 
          3. profile */}
          <FaHeart size={30} title="Wishlist"/>
          <FaCartArrowDown size={30} title="Cart"/>
          <CgProfile size={30} title="Profile"/>
        </div>
      </div>
    </>
  )
}

export default Nav