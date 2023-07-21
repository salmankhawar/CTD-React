import React, { useState} from 'react'

export default function FilterBar({ products, setProducts}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('price')
  const [sortOrder, setSortOrder] = useState('asc')

  function handleSearchChange(e) {
    setSearchTerm(e.target.value)
    setProducts(sortedProducts)
  }

  function handleSortChange(e) {
    setSortBy(e.target.value)
    setProducts(sortedProducts)
  }

  function handleSortOrderChange(e) {
    setSortOrder(e.target.value)
    setProducts(sortedProducts)
  }

  let filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedProducts = filteredProducts.sort((a, b) => {
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
  
  
  
  return (
    <>
      <div class="container filter-bar bg-light col-8">
        <div class="row justify-content-center">
          <div class="col-9 col-sm-9 col-lg-3 text-center m-2">
            <input
              class="form-control"
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearchChange}
              aria-label="Search by name"
            />
          </div>
          <select
            class="btn btn-secondary dropdown-toggle col-9 col-sm-9 col-lg-3 m-2"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
          <select class="btn btn-secondary dropdown-toggle col-9 col-sm-9 col-lg-3 m-2" value={sortOrder} onChange={handleSortOrderChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </>
  )
}

