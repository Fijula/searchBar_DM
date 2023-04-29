/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import "./Search.css"
import { FaSearch } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import axios from 'axios'
import SearchInput from './SearchInput/SearchInput';
import SearchList from './SearchList/SearchList';

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

function Search() {
  const [inputvalue, setInputValue] = useState(" ");
  const [searchList, setSearchList] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputvalue)
  }


  const handleClearSearch = () => {
    setInputValue("");
    setSearchList([]);
  }

  const fetchList = async () => {
    try {
      const response = await axios(API_URL, {
        params: {
          query: inputvalue
        }
      })
      setSearchList(response.data.results);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputvalue)
        fetchList();
    }, 500)
    return () => {
      clearInterval(timeout);
    }

  }, [inputvalue])
  return (
    <>
      <div className='main'>
        <div className='header'>
          <h2>Movie Search </h2>
          <FaSearch />
        </div>

        <div className='search-bar'>
          <SearchInput
            searchList={searchList}
            handleChange={handleChange}
            inputvalue={inputvalue}
          />
          <button className='close-icons'
            onClick={handleClearSearch}>
            <MdClose />
          </button>
        </div>
        {inputvalue && <SearchList searchList={searchList} />}
      </div>
    </>
  )
}

export default Search