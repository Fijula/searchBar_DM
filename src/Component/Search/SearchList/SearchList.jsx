/* eslint-disable react/prop-types */
import './SearchList.css';

function SearchList({searchList}) {
  console.log(searchList,"==>searchlist")
  return (
    <div className='search-list-container'>
      {searchList.map((data)=>{
        return(<div className='search-each' key={data.id}>
          <img 
          width='20' height='20' 
          style={{ objectFit: "contain" }}
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}/>
            <p className='each-title'>{data.title}</p>
        </div>
      )})
      }
    </div>
  )
}

export default SearchList