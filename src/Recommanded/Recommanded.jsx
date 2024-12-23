import React from 'react'

const Recommanded = ({ onFilterByCompany }) => {
  const companies = ["All", "Nike", "Adidas", "Puma", "Vans"]

  return (
    <>
      <div className="ml-60">
        <div className='text-2xl mt-10 mb-4 font-bold'>
          <p>Recommended</p>
        </div>
        <div className='flex gap-4'>
          {companies.map((company) => (
            <button
              key={company}
              onClick={() => onFilterByCompany(company)}
              className="px-4 py-2 bg-black text-white hover:text-black-600 hover:bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              {company}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Recommanded