import React, { useState} from 'react'
import { useEffect } from 'react'

export default function FilterBar({ products, setProducts}) {
// Define States
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')

  // Update products when search term is entered
  function handleSearchChange(e) {
    setSearchTerm(e.target.value)
  }

  // Update products when sort by is changed
  function handleSortChange(e) {
    setSortBy(e.target.value)
  }

  // Update products when sort order is changed
  function handleSortOrderChange(e) {
    setSortOrder(e.target.value)
  }

  let newFilteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  

  const sortedProducts = newFilteredProducts.sort((a, b) => {
    switch (sortBy) {
    case 'price':
      if (sortOrder === 'asc') {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    case 'name':
      if (sortOrder === 'asc') {
        return a.title.localeCompare(b.title)
      } else {
        return b.title.localeCompare(a.title)
      }
    default:
      return 0
    }
  })

  useEffect(() => {setProducts(sortedProducts)})
  useEffect(() => {setProducts(sortedProducts)}, [searchTerm])
  useEffect(() => {setProducts(sortedProducts)}, [sortOrder])
  useEffect(() => {setProducts(sortedProducts)}, [sortBy] )
  
  
  
  return (
    <>
      <div className="container filter-bar bg-light col-8">
        <div className="row justify-content-center">
          <div className="col-9 col-sm-9 col-lg-3 text-center m-2">
            <input
              className="form-control text-center"
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearchChange}
              aria-label="Search by name"
            />
          </div>
          <select
            className="btn btn-secondary dropdown-toggle col-9 col-sm-9 col-lg-3 m-2"
            value={sortBy}
            onChange={handleSortChange}
          > 
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
          <select 
            className="btn btn-secondary dropdown-toggle col-9 col-sm-9 col-lg-3 m-2" 
            value={sortOrder} 
            onChange={handleSortOrderChange}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </div>
    </>
  )
}