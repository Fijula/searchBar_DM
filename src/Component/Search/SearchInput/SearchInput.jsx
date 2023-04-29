/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

import './SearchInput.css'
function SearchInput({searchList,
    handleChange,
    inputvalue}) {
  return (
        <input type='text'
        value={inputvalue}
        className='input'
        placeholder='Search here'
        onChange={handleChange}
        />
  )
}

export default SearchInput