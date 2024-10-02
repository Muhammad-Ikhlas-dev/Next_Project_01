import React from 'react'

function SearchForm() {
  return (
    <form className='flex items-center justify-center relative mt-8 sm:-mt-11 w-full'>

      <label for="searchForm" className='pl-8 w-full sm:w-[85%] absolute cursor-text'>
      <img className='cursor-pointer w-7 sm:w-auto' src="/magnifying-glass.svg" alt="search-icon"/>
      </label>
        
      <input id="searchForm"
      className="w-full sm:w-[85%] mx-auto rounded-lg bg-[#242C38] text-[24px] h-fit 
      pl-20 pr-8 py-6 outline-none
      placeholder:text-[#D0DFFF]"
       type="text" 
       placeholder='Search'/>
    </form>
  )
}

export default SearchForm
