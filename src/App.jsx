import React, { useState } from 'react'
import Nav from './NavBar/Nav'
import Product from './Product/Product'
import Recommanded from './Recommanded/Recommanded'
import SideBar from './SideBar/SideBar'
import { data } from './Data/data'
import Footer from './Footer/Footer'

const App = () => {
  const [products, setProducts] = useState(data)
  const [query, setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedColor, setSelectedColor] = useState("all")
  const [selectedPrice, setSelectedPrice] = useState("all")
  const [selectedCompany, setSelectedCompany] = useState("All")

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery)
    filterProducts(searchQuery, selectedCategory, selectedColor, selectedPrice, selectedCompany)
  }

  const handleCategory = (category) => {
    setSelectedCategory(category.toLowerCase())
    filterProducts(query, category.toLowerCase(), selectedColor, selectedPrice, selectedCompany)
  }

  const handleColor = (color) => {
    setSelectedColor(color.toLowerCase())
    filterProducts(query, selectedCategory, color.toLowerCase(), selectedPrice, selectedCompany)
  }

  const handlePrice = (price) => {
    setSelectedPrice(price)
    filterProducts(query, selectedCategory, selectedColor, price, selectedCompany)
  }

  const handleCompany = (company) => {
    setSelectedCompany(company)
    filterProducts(query, selectedCategory, selectedColor, selectedPrice, company)
  }

  const filterProducts = (search, category, color, price, company) => {
    let filtered = data

    // Search filter
    if (search) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Category filter
    if (category !== "all") {
      filtered = filtered.filter((item) => 
        item.category.toLowerCase() === category
      )
    }

    // Color filter
    if (color !== "all") {
      filtered = filtered.filter((item) => 
        item.color.toLowerCase() === color
      )
    }

    // Company filter
    if (company !== "All") {
      filtered = filtered.filter((item) => 
        item.company === company
      )
    }

    // Price filter
    if (price !== "all") {
      filtered = filtered.filter((item) => {
        const itemPrice = parseFloat(item.newPrice)
        switch(price) {
          case "0-50":
            return itemPrice <= 50
          case "50-100":
            return itemPrice > 50 && itemPrice <= 100
          case "100-150":
            return itemPrice > 100 && itemPrice <= 150
          case "over150":
            return itemPrice > 150
          default:
            return true
        }
      })
    }

    setProducts(filtered)
  }

  return (
    <div className="relative">
      <SideBar 
        onCategoryChange={handleCategory}
        onColorChange={handleColor}
        onPriceChange={handlePrice}
      />
      <div className="content-area">
        <Nav onSearch={handleSearch} />
        <Recommanded onFilterByCompany={handleCompany} />
        <Product products={products} />
      </div>
      <Footer />
    </div>
  )
}

export default App